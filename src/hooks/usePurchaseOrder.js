import { useContext } from 'react';
import { PurchaseOrderContext } from '../context/PurchaseOrderContext';

/**
 * Custom hook to use PurchaseOrderContext
 */
export const usePurchaseOrder = () => {
  const context = useContext(PurchaseOrderContext);
  if (!context) {
    throw new Error('usePurchaseOrder must be used within PurchaseOrderProvider');
  }
  return context;
};
