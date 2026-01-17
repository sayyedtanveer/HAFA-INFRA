import { useNavigate } from 'react-router-dom'
import { Button } from '../../components/ui/Button'
import { useChallan } from '../../hooks/useChallan'
import { ChallanPrintView } from '../../components/challan/ChallanPrintView'

export const ViewChallan = () => {
  const navigate = useNavigate()
  const { currentChallan } = useChallan()

  return (
    <div className="py-16 px-4 md:px-6 bg-white min-h-screen">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8 flex items-center justify-between no-print">
          <h1 className="text-2xl font-bold text-secondary">Delivery Challan</h1>
          <div className="flex gap-3">
            <Button variant="outline" onClick={() => navigate('/admin/dashboard')}>
              Back to Dashboard
            </Button>
            <Button onClick={() => navigate('/admin/challan/create')}>
              Create New Challan
            </Button>
          </div>
        </div>

        {!currentChallan ? (
          <div className="text-center py-12">
            <p className="text-gray-600 mb-4">No Challan found. Create a new one.</p>
            <Button onClick={() => navigate('/admin/challan/create')}>
              Create Challan
            </Button>
          </div>
        ) : (
          <ChallanPrintView />
        )}
      </div>
    </div>
  )
}
