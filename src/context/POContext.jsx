import React, { createContext, useState, useCallback } from 'react'
import { generatePONumber } from '../utils/printUtils'

export const POContext = createContext()

export const POProvider = ({ children }) => {
  const [purchaseOrders, setPurchaseOrders] = useState([])
  const [currentPO, setCurrentPO] = useState(null)

  // Initialize a new PO
  const createNewPO = useCallback(() => {
    const newPO = {
      id: generatePONumber(),
      number: generatePONumber(),
      date: new Date().toISOString().split('T')[0],
      clientName: '',
      clientAddress: '',
      clientPhone: '',
      clientEmail: '',
      materials: [],
      notes: '',
      gstRate: 18,
      status: 'Draft',
      createdAt: new Date().toISOString()
    }
    setCurrentPO(newPO)
    return newPO
  }, [])

  // Add material to current PO
  const addMaterial = useCallback((material) => {
    if (!currentPO) return
    setCurrentPO(prev => ({
      ...prev,
      materials: [...prev.materials, { ...material, id: Math.random().toString(36).substr(2, 9) }]
    }))
  }, [currentPO])

  // Update material in current PO
  const updateMaterial = useCallback((materialId, updatedData) => {
    if (!currentPO) return
    setCurrentPO(prev => ({
      ...prev,
      materials: prev.materials.map(m => m.id === materialId ? { ...m, ...updatedData } : m)
    }))
  }, [currentPO])

  // Remove material from current PO
  const removeMaterial = useCallback((materialId) => {
    if (!currentPO) return
    setCurrentPO(prev => ({
      ...prev,
      materials: prev.materials.filter(m => m.id !== materialId)
    }))
  }, [currentPO])

  // Update PO details
  const updatePO = useCallback((updates) => {
    if (!currentPO) return
    setCurrentPO(prev => ({ ...prev, ...updates }))
  }, [currentPO])

  // Save PO
  const savePO = useCallback(() => {
    if (!currentPO) return
    setPurchaseOrders(prev => {
      const existing = prev.findIndex(po => po.id === currentPO.id)
      if (existing >= 0) {
        const updated = [...prev]
        updated[existing] = currentPO
        return updated
      }
      return [...prev, currentPO]
    })
  }, [currentPO])

  // Load PO
  const loadPO = useCallback((poId) => {
    const po = purchaseOrders.find(p => p.id === poId)
    if (po) {
      setCurrentPO(po)
    }
  }, [purchaseOrders])

  // Delete PO
  const deletePO = useCallback((poId) => {
    setPurchaseOrders(prev => prev.filter(p => p.id !== poId))
    if (currentPO?.id === poId) {
      setCurrentPO(null)
    }
  }, [currentPO])

  const value = {
    purchaseOrders,
    currentPO,
    createNewPO,
    addMaterial,
    updateMaterial,
    removeMaterial,
    updatePO,
    savePO,
    loadPO,
    deletePO,
    setCurrentPO
  }

  return <POContext.Provider value={value}>{children}</POContext.Provider>
}
