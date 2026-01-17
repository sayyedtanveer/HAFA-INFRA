import { useNavigate } from 'react-router-dom'
import { Button } from '../../components/ui/Button'
import { useChallan } from '../../hooks/useChallan'
import { ChallanForm } from '../../components/challan/ChallanForm'

export const CreateChallan = () => {
  const navigate = useNavigate()
  const { currentChallan, saveChallan } = useChallan()

  const handleSaveAndView = () => {
    saveChallan()
    if (currentChallan) {
      navigate(`/admin/challan/${currentChallan.id}/print`)
    }
  }

  return (
    <div className="py-16 px-4 md:px-6 bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8 flex items-center justify-between">
          <h1 className="text-4xl font-bold text-secondary">Create Delivery Challan</h1>
          <Button variant="outline" onClick={() => navigate('/admin/dashboard')}>
            Back to Dashboard
          </Button>
        </div>

        <ChallanForm />

        <div className="mt-8 flex gap-4 justify-center">
          <Button onClick={handleSaveAndView} size="lg">
            Save & Preview
          </Button>
          <Button variant="outline" onClick={() => navigate('/admin/dashboard')} size="lg">
            Cancel
          </Button>
        </div>
      </div>
    </div>
  )
}
