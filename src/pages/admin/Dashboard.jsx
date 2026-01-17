import { useNavigate } from 'react-router-dom'
import { Button } from '../../components/ui/Button'
import { Card, CardContent } from '../../components/ui/Card'
import { usePO } from '../../hooks/usePO'
import { useChallan } from '../../hooks/useChallan'
import { FileText, Truck, Plus } from 'lucide-react'

export const AdminDashboard = () => {
  const navigate = useNavigate()
  const { purchaseOrders, createNewPO } = usePO()
  const { challans, createNewChallan } = useChallan()

  const handleNewPO = () => {
    createNewPO()
    navigate('/admin/po/create')
  }

  const handleNewChallan = () => {
    createNewChallan()
    navigate('/admin/challan/create')
  }

  return (
    <div className="py-16 px-4 md:px-6 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-secondary mb-12">Admin Dashboard</h1>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <Card className="hover:shadow-xl transition-shadow cursor-pointer" onClick={handleNewPO}>
            <CardContent className="p-8 flex items-center gap-4">
              <div className="bg-primary-100 p-4 rounded-lg">
                <FileText className="w-8 h-8 text-primary-600" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-secondary">Create Purchase Order</h3>
                <p className="text-gray-600 text-sm">Create a new PO for your client</p>
              </div>
              <Plus className="w-6 h-6 text-primary-500" />
            </CardContent>
          </Card>

          <Card className="hover:shadow-xl transition-shadow cursor-pointer" onClick={handleNewChallan}>
            <CardContent className="p-8 flex items-center gap-4">
              <div className="bg-blue-100 p-4 rounded-lg">
                <Truck className="w-8 h-8 text-blue-600" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-secondary">Create Delivery Challan</h3>
                <p className="text-gray-600 text-sm">Create a new challan for delivery</p>
              </div>
              <Plus className="w-6 h-6 text-primary-500" />
            </CardContent>
          </Card>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 text-sm font-medium">Total Purchase Orders</p>
                  <p className="text-4xl font-bold text-secondary mt-2">{purchaseOrders.length}</p>
                </div>
                <FileText className="w-12 h-12 text-primary-100" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 text-sm font-medium">Total Delivery Challans</p>
                  <p className="text-4xl font-bold text-secondary mt-2">{challans.length}</p>
                </div>
                <Truck className="w-12 h-12 text-blue-100" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Recent POs */}
        {purchaseOrders.length > 0 && (
          <Card className="mb-12">
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold text-secondary mb-6">Recent Purchase Orders</h2>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b-2 border-gray-300">
                      <th className="text-left p-3">PO Number</th>
                      <th className="text-left p-3">Client</th>
                      <th className="text-left p-3">Date</th>
                      <th className="text-left p-3">Status</th>
                      <th className="text-left p-3">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {purchaseOrders.slice(-5).reverse().map((po) => (
                      <tr key={po.id} className="border-b border-gray-200 hover:bg-gray-50">
                        <td className="p-3 font-semibold text-primary-600">{po.number}</td>
                        <td className="p-3">{po.clientName}</td>
                        <td className="p-3 text-sm text-gray-600">{new Date(po.date).toLocaleDateString('en-IN')}</td>
                        <td className="p-3">
                          <span className="px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-sm font-medium">
                            {po.status}
                          </span>
                        </td>
                        <td className="p-3">
                          <Button
                            size="sm"
                            variant="ghost"
                            onClick={() => navigate(`/admin/po/${po.id}/print`)}
                          >
                            View
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Recent Challans */}
        {challans.length > 0 && (
          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold text-secondary mb-6">Recent Delivery Challans</h2>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b-2 border-gray-300">
                      <th className="text-left p-3">Challan Number</th>
                      <th className="text-left p-3">Site</th>
                      <th className="text-left p-3">Date</th>
                      <th className="text-left p-3">Status</th>
                      <th className="text-left p-3">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {challans.slice(-5).reverse().map((challan) => (
                      <tr key={challan.id} className="border-b border-gray-200 hover:bg-gray-50">
                        <td className="p-3 font-semibold text-primary-600">{challan.number}</td>
                        <td className="p-3">{challan.siteName}</td>
                        <td className="p-3 text-sm text-gray-600">{new Date(challan.date).toLocaleDateString('en-IN')}</td>
                        <td className="p-3">
                          <span className="px-3 py-1 rounded-full bg-green-100 text-green-800 text-sm font-medium">
                            {challan.status}
                          </span>
                        </td>
                        <td className="p-3">
                          <Button
                            size="sm"
                            variant="ghost"
                            onClick={() => navigate(`/admin/challan/${challan.id}/print`)}
                          >
                            View
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  )
}
