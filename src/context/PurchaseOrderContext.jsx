import { createContext, useState, useCallback } from 'react';
import { generatePONumber, formatDate } from '../utils/helpers';

/**
 * PurchaseOrderContext - Manages Purchase Order state globally
 */
export const PurchaseOrderContext = createContext();

export const PurchaseOrderProvider = ({ children }) => {
  const [poData, setPoData] = useState({
    poNumber: generatePONumber(),
    date: formatDate(),
    clientName: '',
    clientAddress: '',
    clientPhone: '',
    clientEmail: '',
    items: [{ material: '', quantity: '', rate: '', unit: 'MT' }],
    gstRate: 18,
    termsConditions: '',
  });

  const updatePoData = useCallback((updates) => {
    setPoData((prev) => ({ ...prev, ...updates }));
  }, []);

  const updatePoItem = useCallback((index, field, value) => {
    setPoData((prev) => {
      const newItems = [...prev.items];
      newItems[index] = { ...newItems[index], [field]: value };
      return { ...prev, items: newItems };
    });
  }, []);

  const addPoItem = useCallback(() => {
    setPoData((prev) => ({
      ...prev,
      items: [...prev.items, { material: '', quantity: '', rate: '', unit: 'MT' }],
    }));
  }, []);

  const removePoItem = useCallback((index) => {
    setPoData((prev) => ({
      ...prev,
      items: prev.items.filter((_, i) => i !== index),
    }));
  }, []);

  const resetPo = useCallback(() => {
    setPoData({
      poNumber: generatePONumber(),
      date: formatDate(),
      clientName: '',
      clientAddress: '',
      clientPhone: '',
      clientEmail: '',
      items: [{ material: '', quantity: '', rate: '', unit: 'MT' }],
      gstRate: 18,
      termsConditions: '',
    });
  }, []);

  return (
    <PurchaseOrderContext.Provider
      value={{
        poData,
        updatePoData,
        updatePoItem,
        addPoItem,
        removePoItem,
        resetPo,
      }}
    >
      {children}
    </PurchaseOrderContext.Provider>
  );
};
