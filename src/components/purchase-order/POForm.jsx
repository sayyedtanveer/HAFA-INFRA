import { usePurchaseOrder } from '../../hooks/usePurchaseOrder';
import { formatCurrency } from '../../utils/helpers';

/**
 * PO Form Component
 */
const POForm = () => {
  const { poData, updatePoData, updatePoItem, addPoItem, removePoItem } = usePurchaseOrder();

  // Calculate totals
  const subTotal = poData.items
    .reduce((sum, item) => sum + (Number(item.quantity) * Number(item.rate) || 0), 0);
  const gstAmount = (subTotal * poData.gstRate) / 100;
  const total = subTotal + gstAmount;

  return (
    <form className="space-y-6">
      {/* Header Section */}
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-2xl font-bold text-dark-900 mb-6">Purchase Order Details</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* PO Number */}
          <div>
            <label className="block text-sm font-semibold text-dark-900 mb-2">
              PO Number
            </label>
            <input
              type="text"
              value={poData.poNumber}
              disabled
              className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-50 text-gray-600"
            />
          </div>

          {/* Date */}
          <div>
            <label className="block text-sm font-semibold text-dark-900 mb-2">
              Date
            </label>
            <input
              type="text"
              value={poData.date}
              disabled
              className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-50 text-gray-600"
            />
          </div>

          {/* Client Name */}
          <div>
            <label className="block text-sm font-semibold text-dark-900 mb-2">
              Client Name *
            </label>
            <input
              type="text"
              value={poData.clientName}
              onChange={(e) => updatePoData({ clientName: e.target.value })}
              placeholder="Enter client name"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-gold-950"
            />
          </div>

          {/* Client Phone */}
          <div>
            <label className="block text-sm font-semibold text-dark-900 mb-2">
              Client Phone
            </label>
            <input
              type="tel"
              value={poData.clientPhone}
              onChange={(e) => updatePoData({ clientPhone: e.target.value })}
              placeholder="Enter client phone"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-gold-950"
            />
          </div>

          {/* Client Email */}
          <div className="md:col-span-2">
            <label className="block text-sm font-semibold text-dark-900 mb-2">
              Client Email
            </label>
            <input
              type="email"
              value={poData.clientEmail}
              onChange={(e) => updatePoData({ clientEmail: e.target.value })}
              placeholder="Enter client email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-gold-950"
            />
          </div>

          {/* Client Address */}
          <div className="md:col-span-2">
            <label className="block text-sm font-semibold text-dark-900 mb-2">
              Client Address
            </label>
            <textarea
              value={poData.clientAddress}
              onChange={(e) => updatePoData({ clientAddress: e.target.value })}
              placeholder="Enter complete client address"
              rows="3"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-gold-950 resize-none"
            />
          </div>
        </div>
      </div>

      {/* Items Section */}
      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="text-xl font-bold text-dark-900 mb-6">Order Items</h3>

        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-dark-100 border-b-2 border-dark-900">
                <th className="text-left p-3 font-semibold">Material</th>
                <th className="text-center p-3 font-semibold">Qty</th>
                <th className="text-center p-3 font-semibold">Unit</th>
                <th className="text-right p-3 font-semibold">Rate</th>
                <th className="text-right p-3 font-semibold">Amount</th>
                <th className="text-center p-3 font-semibold">Action</th>
              </tr>
            </thead>
            <tbody>
              {poData.items.map((item, idx) => (
                <tr key={idx} className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="p-3">
                    <input
                      type="text"
                      value={item.material}
                      onChange={(e) => updatePoItem(idx, 'material', e.target.value)}
                      placeholder="Steel/RMC/Sand/Blocks"
                      className="w-full px-2 py-1 border border-gray-300 rounded focus:outline-none focus:border-gold-950"
                    />
                  </td>
                  <td className="p-3 text-center">
                    <input
                      type="number"
                      value={item.quantity}
                      onChange={(e) => updatePoItem(idx, 'quantity', e.target.value)}
                      placeholder="0"
                      className="w-full px-2 py-1 border border-gray-300 rounded focus:outline-none focus:border-gold-950 text-center"
                    />
                  </td>
                  <td className="p-3 text-center">
                    <select
                      value={item.unit}
                      onChange={(e) => updatePoItem(idx, 'unit', e.target.value)}
                      className="w-full px-2 py-1 border border-gray-300 rounded focus:outline-none focus:border-gold-950"
                    >
                      <option>MT</option>
                      <option>Ton</option>
                      <option>Pieces</option>
                      <option>Cubic Meter</option>
                    </select>
                  </td>
                  <td className="p-3 text-right">
                    <input
                      type="number"
                      value={item.rate}
                      onChange={(e) => updatePoItem(idx, 'rate', e.target.value)}
                      placeholder="0"
                      className="w-full px-2 py-1 border border-gray-300 rounded focus:outline-none focus:border-gold-950 text-right"
                    />
                  </td>
                  <td className="p-3 text-right font-semibold">
                    {formatCurrency((Number(item.quantity) * Number(item.rate)) || 0)}
                  </td>
                  <td className="p-3 text-center">
                    <button
                      type="button"
                      onClick={() => removePoItem(idx)}
                      className="text-red-600 hover:text-red-800 font-semibold"
                    >
                      ✕
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <button
          type="button"
          onClick={addPoItem}
          className="bg-dark-900 hover:bg-dark-800 text-white px-6 py-2 rounded-lg font-semibold transition-colors mb-6"
        >
          + Add Item
        </button>

        {/* GST Section */}
        <div className="flex justify-end mb-6">
          <div className="w-80 space-y-4">
            <div className="flex justify-between p-3 bg-gray-50 border border-gray-300 rounded">
              <span className="font-semibold">Subtotal:</span>
              <span>{formatCurrency(subTotal)}</span>
            </div>
            <div className="flex items-center gap-4 p-3 bg-gray-50 border border-gray-300 rounded">
              <label className="font-semibold">GST Rate (%):</label>
              <select
                value={poData.gstRate}
                onChange={(e) => updatePoData({ gstRate: Number(e.target.value) })}
                className="px-3 py-1 border border-gray-300 rounded focus:outline-none focus:border-gold-950"
              >
                <option value="0">0%</option>
                <option value="5">5%</option>
                <option value="9">9%</option>
                <option value="12">12%</option>
                <option value="18">18%</option>
                <option value="28">28%</option>
              </select>
            </div>
            <div className="flex justify-between p-3 bg-gray-50 border border-gray-300 rounded">
              <span className="font-semibold">GST Amount:</span>
              <span>{formatCurrency(gstAmount)}</span>
            </div>
            <div className="flex justify-between p-3 bg-dark-900 text-white rounded font-bold text-lg">
              <span>Total:</span>
              <span>{formatCurrency(total)}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Terms & Conditions */}
      <div className="bg-white rounded-lg shadow p-6">
        <label className="block text-sm font-semibold text-dark-900 mb-2">
          Terms & Conditions
        </label>
        <textarea
          value={poData.termsConditions}
          onChange={(e) => updatePoData({ termsConditions: e.target.value })}
          placeholder="Enter terms and conditions (optional)"
          rows="4"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-gold-950 resize-none"
        />
      </div>
    </form>
  );
};

export default POForm;
