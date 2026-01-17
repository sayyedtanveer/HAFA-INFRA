import { useContext } from 'react'
import { ChallanContext } from '../context/ChallanContext'

export const useChallan = () => {
  const context = useContext(ChallanContext)
  if (!context) {
    throw new Error('useChallan must be used within a ChallanProvider')
  }
  return context
}
