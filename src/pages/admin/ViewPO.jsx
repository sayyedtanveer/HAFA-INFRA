import { useNavigate } from 'react-router-dom'
import { Button } from '../../components/ui/Button'
import { usePO } from '../../hooks/usePO'
import { POPrintView } from '../../components/po/POPrintView'

export const ViewPO = () => {
  const navigate = useNavigate()
  const { currentPO } = usePO()

  return (
    <div className="py-16 px-4 md:px-6 bg-white min-h-screen">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8 flex items-center justify-between no-print">
          <h1 className="text-2xl font-bold text-secondary">Purchase Order</h1>
          <div className="flex gap-3">
            <Button variant="outline" onClick={() => navigate('/admin/dashboard')}>
              Back to Dashboard
            </Button>
            <Button onClick={() => navigate('/admin/po/create')}>
              Create New PO
            </Button>
          </div>
        </div>

        {!currentPO ? (
          <div className="text-center py-12">
            <p className="text-gray-600 mb-4">No Purchase Order found. Create a new one.</p>
            <Button onClick={() => navigate('/admin/po/create')}>
              Create PO
            </Button>
          </div>
        ) : (
          <POPrintView />
        )}
      </div>
    </div>
  )
}
