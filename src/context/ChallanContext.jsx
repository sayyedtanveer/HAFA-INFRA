import React, { createContext, useState, useCallback } from 'react'
import { generateChallanNumber } from '../utils/printUtils'

export const ChallanContext = createContext()

export const ChallanProvider = ({ children }) => {
  const [challans, setChallans] = useState([])
  const [currentChallan, setCurrentChallan] = useState(null)

  // Initialize a new Challan
  const createNewChallan = useCallback(() => {
    const newChallan = {
      id: generateChallanNumber(),
      number: generateChallanNumber(),
      date: new Date().toISOString().split('T')[0],
      clientName: '',
      clientAddress: '',
      siteName: '',
      siteAddress: '',
      vehicleNumber: '',
      driverName: '',
      driverPhone: '',
      materials: [],
      notes: '',
      status: 'Pending',
      createdAt: new Date().toISOString()
    }
    setCurrentChallan(newChallan)
    return newChallan
  }, [])

  // Add material to current Challan
  const addMaterial = useCallback((material) => {
    if (!currentChallan) return
    setCurrentChallan(prev => ({
      ...prev,
      materials: [...prev.materials, { ...material, id: Math.random().toString(36).substr(2, 9) }]
    }))
  }, [currentChallan])

  // Update material in current Challan
  const updateMaterial = useCallback((materialId, updatedData) => {
    if (!currentChallan) return
    setCurrentChallan(prev => ({
      ...prev,
      materials: prev.materials.map(m => m.id === materialId ? { ...m, ...updatedData } : m)
    }))
  }, [currentChallan])

  // Remove material from current Challan
  const removeMaterial = useCallback((materialId) => {
    if (!currentChallan) return
    setCurrentChallan(prev => ({
      ...prev,
      materials: prev.materials.filter(m => m.id !== materialId)
    }))
  }, [currentChallan])

  // Update Challan details
  const updateChallan = useCallback((updates) => {
    if (!currentChallan) return
    setCurrentChallan(prev => ({ ...prev, ...updates }))
  }, [currentChallan])

  // Save Challan
  const saveChallan = useCallback(() => {
    if (!currentChallan) return
    setChallans(prev => {
      const existing = prev.findIndex(c => c.id === currentChallan.id)
      if (existing >= 0) {
        const updated = [...prev]
        updated[existing] = currentChallan
        return updated
      }
      return [...prev, currentChallan]
    })
  }, [currentChallan])

  // Load Challan
  const loadChallan = useCallback((challanId) => {
    const challan = challans.find(c => c.id === challanId)
    if (challan) {
      setCurrentChallan(challan)
    }
  }, [challans])

  // Delete Challan
  const deleteChallan = useCallback((challanId) => {
    setChallans(prev => prev.filter(c => c.id !== challanId))
    if (currentChallan?.id === challanId) {
      setCurrentChallan(null)
    }
  }, [currentChallan])

  const value = {
    challans,
    currentChallan,
    createNewChallan,
    addMaterial,
    updateMaterial,
    removeMaterial,
    updateChallan,
    saveChallan,
    loadChallan,
    deleteChallan,
    setCurrentChallan
  }

  return <ChallanContext.Provider value={value}>{children}</ChallanContext.Provider>
}
