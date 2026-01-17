import { AlertCircle, CheckCircle, AlertTriangle, Info } from 'lucide-react'

export const Alert = ({ type = 'info', title, message, className = '' }) => {
  const styles = {
    info: 'bg-blue-50 border-blue-200 text-blue-800',
    success: 'bg-green-50 border-green-200 text-green-800',
    warning: 'bg-yellow-50 border-yellow-200 text-yellow-800',
    error: 'bg-red-50 border-red-200 text-red-800'
  }

  const icons = {
    info: <Info className="w-5 h-5" />,
    success: <CheckCircle className="w-5 h-5" />,
    warning: <AlertTriangle className="w-5 h-5" />,
    error: <AlertCircle className="w-5 h-5" />
  }

  return (
    <div className={`border-l-4 p-4 rounded ${styles[type]} ${className}`}>
      <div className="flex gap-3">
        {icons[type]}
        <div>
          {title && <h4 className="font-semibold mb-1">{title}</h4>}
          {message && <p className="text-sm">{message}</p>}
        </div>
      </div>
    </div>
  )
}
