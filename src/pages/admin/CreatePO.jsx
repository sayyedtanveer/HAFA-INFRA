import { useNavigate } from 'react-router-dom'
import { Button } from '../../components/ui/Button'
import { usePO } from '../../hooks/usePO'
import { POForm } from '../../components/po/POForm'

export const CreatePO = () => {
  const navigate = useNavigate()
  const { currentPO, savePO } = usePO()

  const handleSaveAndView = () => {
    savePO()
    if (currentPO) {
      navigate(`/admin/po/${currentPO.id}/print`)
    }
  }

  return (
    <div className="py-16 px-4 md:px-6 bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8 flex items-center justify-between">
          <h1 className="text-4xl font-bold text-secondary">Create Purchase Order</h1>
          <Button variant="outline" onClick={() => navigate('/admin/dashboard')}>
            Back to Dashboard
          </Button>
        </div>

        <POForm />

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
