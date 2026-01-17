import { Input, Textarea } from '../ui/Input'
import { Button } from '../ui/Button'
import { Card, CardContent, CardHeader } from '../ui/Card'
import { Plus, Trash2 } from 'lucide-react'
import { usePO } from '../../hooks/usePO'
import { formatCurrency } from '../../utils/printUtils'

export const POForm = () => {
  const {
    currentPO,
    addMaterial,
    updatePO,
    updateMaterial,
    removeMaterial,
    savePO
  } = usePO()

  if (!currentPO) return null

  const calculateSubtotal = () => {
    return currentPO.materials.reduce((sum, m) => sum + (m.quantity * m.rate), 0)
  }

  const subtotal = calculateSubtotal()
  const gst = (subtotal * currentPO.gstRate) / 100
  const total = subtotal + gst

  const handleAddMaterial = () => {
    addMaterial({
      description: '',
      quantity: 1,
      unit: 'kg',
      rate: 0
    })
  }

  const handleSave = () => {
    savePO()
    alert('Purchase Order saved successfully!')
  }

  return (
    <div className="space-y-6">
      {/* Client Details */}
      <Card>
        <CardHeader>
          <h3 className="text-lg font-semibold">Client Details</h3>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input
              label="Client Name"
              value={currentPO.clientName}
              onChange={(e) => updatePO({ clientName: e.target.value })}
              required
            />
            <Input
              label="Phone"
              value={currentPO.clientPhone}
              onChange={(e) => updatePO({ clientPhone: e.target.value })}
              required
            />
          </div>
          <Input
            label="Email"
            type="email"
            value={currentPO.clientEmail}
            onChange={(e) => updatePO({ clientEmail: e.target.value })}
            required
          />
          <Textarea
            label="Address"
            value={currentPO.clientAddress}
            onChange={(e) => updatePO({ clientAddress: e.target.value })}
            rows={3}
            required
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input
              label="PO Date"
              type="date"
              value={currentPO.date}
              onChange={(e) => updatePO({ date: e.target.value })}
            />
            <Input
              label="GST Rate (%)"
              type="number"
              value={currentPO.gstRate}
              onChange={(e) => updatePO({ gstRate: parseFloat(e.target.value) })}
            />
          </div>
        </CardContent>
      </Card>

      {/* Materials */}
      <Card>
        <CardHeader className="flex justify-between items-center">
          <h3 className="text-lg font-semibold">Materials</h3>
          <Button size="sm" onClick={handleAddMaterial} className="flex items-center gap-2">
            <Plus className="w-4 h-4" />
            Add Material
          </Button>
        </CardHeader>
        <CardContent>
          {currentPO.materials.length === 0 ? (
            <p className="text-gray-500">No materials added. Click "Add Material" to begin.</p>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b-2 border-gray-300">
                    <th className="text-left p-2">Description</th>
                    <th className="text-left p-2">Qty</th>
                    <th className="text-left p-2">Unit</th>
                    <th className="text-left p-2">Rate</th>
                    <th className="text-left p-2">Total</th>
                    <th className="text-left p-2">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {currentPO.materials.map((material) => (
                    <tr key={material.id} className="border-b border-gray-200 hover:bg-gray-50">
                      <td className="p-2">
                        <input
                          type="text"
                          value={material.description}
                          onChange={(e) => updateMaterial(material.id, { description: e.target.value })}
                          className="w-full px-2 py-1 border border-gray-300 rounded"
                          placeholder="Enter description"
                        />
                      </td>
                      <td className="p-2">
                        <input
                          type="number"
                          value={material.quantity}
                          onChange={(e) => updateMaterial(material.id, { quantity: parseFloat(e.target.value) || 0 })}
                          className="w-full px-2 py-1 border border-gray-300 rounded"
                        />
                      </td>
                      <td className="p-2">
                        <select
                          value={material.unit}
                          onChange={(e) => updateMaterial(material.id, { unit: e.target.value })}
                          className="w-full px-2 py-1 border border-gray-300 rounded"
                        >
                          <option>kg</option>
                          <option>ton</option>
                          <option>cft</option>
                          <option>piece</option>
                          <option>bag</option>
                          <option>liter</option>
                        </select>
                      </td>
                      <td className="p-2">
                        <input
                          type="number"
                          value={material.rate}
                          onChange={(e) => updateMaterial(material.id, { rate: parseFloat(e.target.value) || 0 })}
                          className="w-full px-2 py-1 border border-gray-300 rounded"
                        />
                      </td>
                      <td className="p-2 font-semibold">
                        {formatCurrency(material.quantity * material.rate)}
                      </td>
                      <td className="p-2">
                        <button
                          onClick={() => removeMaterial(material.id)}
                          className="text-red-600 hover:text-red-800 transition-colors"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Summary */}
      <Card>
        <CardContent className="p-6">
          <div className="space-y-3 max-w-sm ml-auto">
            <div className="flex justify-between text-lg">
              <span>Subtotal:</span>
              <span>{formatCurrency(subtotal)}</span>
            </div>
            <div className="flex justify-between text-lg">
              <span>GST ({currentPO.gstRate}%):</span>
              <span>{formatCurrency(gst)}</span>
            </div>
            <div className="border-t-2 border-gray-300 pt-3 flex justify-between text-2xl font-bold">
              <span>Total:</span>
              <span className="text-primary-500">{formatCurrency(total)}</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Notes */}
      <Card>
        <CardContent className="p-6">
          <Textarea
            label="Terms & Conditions / Notes"
            value={currentPO.notes}
            onChange={(e) => updatePO({ notes: e.target.value })}
            rows={4}
            placeholder="Add any terms, conditions, or notes for the client"
          />
        </CardContent>
      </Card>

      {/* Save Button */}
      <div className="flex gap-4 justify-center">
        <Button onClick={handleSave} size="lg">
          Save Purchase Order
        </Button>
      </div>
    </div>
  )
}
