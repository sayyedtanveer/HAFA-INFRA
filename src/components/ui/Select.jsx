import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

export const Select = ({ 
  label, 
  options = [], 
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
      <div className="relative">
        <select
          className={`w-full px-4 py-2.5 border-2 rounded-lg focus:outline-none transition-colors appearance-none ${
            error ? 'border-red-500 focus:border-red-600' : 'border-gray-300 focus:border-primary-500'
          } ${className}`}
          {...props}
        >
          <option value="">Select an option</option>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
      </div>
      {helperText && (
        <p className={`mt-1 text-sm ${error ? 'text-red-600' : 'text-gray-500'}`}>
          {helperText}
        </p>
      )}
    </div>
  )
}
