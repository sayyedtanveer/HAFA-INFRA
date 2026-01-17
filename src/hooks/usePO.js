import { useContext } from 'react'
import { POContext } from '../context/POContext'

export const usePO = () => {
  const context = useContext(POContext)
  if (!context) {
    throw new Error('usePO must be used within a POProvider')
  }
  return context
}
