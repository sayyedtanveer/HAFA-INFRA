import { Input, Textarea } from '../ui/Input'
import { Button } from '../ui/Button'
import { Card, CardContent, CardHeader } from '../ui/Card'
import { Plus, Trash2 } from 'lucide-react'
import { useChallan } from '../../hooks/useChallan'

export const ChallanForm = () => {
  const {
    currentChallan,
    addMaterial,
    updateChallan,
    updateMaterial,
    removeMaterial,
    saveChallan
  } = useChallan()

  if (!currentChallan) return null

  const handleAddMaterial = () => {
    addMaterial({
      description: '',
      quantity: 1,
      unit: 'kg'
    })
  }

  const handleSave = () => {
    saveChallan()
    alert('Delivery Challan saved successfully!')
  }

  return (
    <div className="space-y-6">
      {/* Client & Site Details */}
      <Card>
        <CardHeader>
          <h3 className="text-lg font-semibold">Client & Site Details</h3>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input
              label="Client Name"
              value={currentChallan.clientName}
              onChange={(e) => updateChallan({ clientName: e.target.value })}
              required
            />
            <Input
              label="Phone"
              value={currentChallan.clientPhone}
              onChange={(e) => updateChallan({ clientPhone: e.target.value })}
              required
            />
          </div>
          <Textarea
            label="Client Address"
            value={currentChallan.clientAddress}
            onChange={(e) => updateChallan({ clientAddress: e.target.value })}
            rows={2}
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input
              label="Site Name"
              value={currentChallan.siteName}
              onChange={(e) => updateChallan({ siteName: e.target.value })}
              required
            />
            <Input
              label="Date"
              type="date"
              value={currentChallan.date}
              onChange={(e) => updateChallan({ date: e.target.value })}
            />
          </div>
          <Textarea
            label="Site Address"
            value={currentChallan.siteAddress}
            onChange={(e) => updateChallan({ siteAddress: e.target.value })}
            rows={2}
            required
          />
        </CardContent>
      </Card>

      {/* Vehicle Details */}
      <Card>
        <CardHeader>
          <h3 className="text-lg font-semibold">Vehicle & Driver Details</h3>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input
              label="Vehicle Number"
              value={currentChallan.vehicleNumber}
              onChange={(e) => updateChallan({ vehicleNumber: e.target.value })}
              placeholder="e.g., MH-01-AB-1234"
            />
            <Input
              label="Driver Name"
              value={currentChallan.driverName}
              onChange={(e) => updateChallan({ driverName: e.target.value })}
            />
          </div>
          <Input
            label="Driver Phone"
            value={currentChallan.driverPhone}
            onChange={(e) => updateChallan({ driverPhone: e.target.value })}
          />
        </CardContent>
      </Card>

      {/* Materials */}
      <Card>
        <CardHeader className="flex justify-between items-center">
          <h3 className="text-lg font-semibold">Materials Being Delivered</h3>
          <Button size="sm" onClick={handleAddMaterial} className="flex items-center gap-2">
            <Plus className="w-4 h-4" />
            Add Material
          </Button>
        </CardHeader>
        <CardContent>
          {currentChallan.materials.length === 0 ? (
            <p className="text-gray-500">No materials added. Click "Add Material" to begin.</p>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b-2 border-gray-300">
                    <th className="text-left p-2">Description</th>
                    <th className="text-left p-2">Quantity</th>
                    <th className="text-left p-2">Unit</th>
                    <th className="text-left p-2">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {currentChallan.materials.map((material) => (
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

      {/* Notes */}
      <Card>
        <CardContent className="p-6">
          <Textarea
            label="Additional Notes"
            value={currentChallan.notes}
            onChange={(e) => updateChallan({ notes: e.target.value })}
            rows={4}
            placeholder="Add any special instructions or notes"
          />
        </CardContent>
      </Card>

      {/* Save Button */}
      <div className="flex gap-4 justify-center">
        <Button onClick={handleSave} size="lg">
          Save Delivery Challan
        </Button>
      </div>
    </div>
  )
}
