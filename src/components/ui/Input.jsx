export const Input = ({ 
  label, 
  error, 
  helperText, 
  className = '', 
  ...props 
}) => {
  return (
    <div className="w-full">
      {label && (
        <label className="block text-sm font-medium text-secondary mb-2">
          {label}
          {props.required && <span className="text-red-600">*</span>}
        </label>
      )}
      <input
        className={`w-full px-4 py-2.5 border-2 rounded-lg focus:outline-none transition-colors ${
          error ? 'border-red-500 focus:border-red-600' : 'border-gray-300 focus:border-primary-500'
        } ${className}`}
        {...props}
      />
      {helperText && (
        <p className={`mt-1 text-sm ${error ? 'text-red-600' : 'text-gray-500'}`}>
          {helperText}
        </p>
      )}
    </div>
  )
}

export const Textarea = ({ 
  label, 
  error, 
  helperText, 
  className = '', 
  ...props 
}) => {
  return (
    <div className="w-full">
      {label && (
        <label className="block text-sm font-medium text-secondary mb-2">
          {label}
          {props.required && <span className="text-red-600">*</span>}
        </label>
      )}
      <textarea
        className={`w-full px-4 py-2.5 border-2 rounded-lg focus:outline-none transition-colors resize-none ${
          error ? 'border-red-500 focus:border-red-600' : 'border-gray-300 focus:border-primary-500'
        } ${className}`}
        {...props}
      />
      {helperText && (
        <p className={`mt-1 text-sm ${error ? 'text-red-600' : 'text-gray-500'}`}>
          {helperText}
        </p>
      )}
    </div>
  )
}
