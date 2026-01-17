import { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { usePurchaseOrder } from '../../hooks/usePurchaseOrder';
import { formatCurrency, formatDate, amountInWords } from '../../utils/helpers';
import { COMPANY } from '../../utils/constants';

/**
 * PO Print Template Component - A4 Layout
 */
const POPrintTemplate = ({ isPreview = false }) => {
  const { poData } = usePurchaseOrder();
  const printRef = useRef();

  // Calculate totals
  const subTotal = poData.items
    .reduce((sum, item) => sum + (Number(item.quantity) * Number(item.rate) || 0), 0);
  const gstAmount = (subTotal * poData.gstRate) / 100;
  const total = subTotal + gstAmount;

  // Print function
  const handlePrint = useReactToPrint({
    content: () => printRef.current,
    documentTitle: `${poData.poNumber}`,
  });

  // PDF download function
  const handleDownloadPDF = async () => {
    try {
      const element = printRef.current;
      const canvas = await html2canvas(element, { scale: 2 });
      const imgData = canvas.toDataURL('image/png');

      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'mm',
        format: 'a4',
      });

      const imgWidth = 210;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
      pdf.save(`${poData.poNumber}.pdf`);
    } catch (error) {
      console.error('Error generating PDF:', error);
      alert('Failed to generate PDF');
    }
  };

  return (
    <>
      {/* Action Buttons */}
      {!isPreview && (
        <div className="mb-6 flex gap-4 no-print">
          <button
            onClick={handlePrint}
            className="bg-dark-900 hover:bg-dark-800 text-white px-6 py-2 rounded-lg font-semibold transition-colors"
          >
            🖨️ Print
          </button>
          <button
            onClick={handleDownloadPDF}
            className="bg-gold-950 hover:bg-gold-900 text-white px-6 py-2 rounded-lg font-semibold transition-colors"
          >
            📥 Download PDF
          </button>
        </div>
      )}

      {/* Print Template */}
      <div
        ref={printRef}
        className="bg-white p-8 text-dark-900 font-sans"
        style={{ width: '210mm', height: '297mm', margin: '0 auto' }}
      >
        {/* Header */}
        <div className="border-b-2 border-dark-900 pb-6 mb-6">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h1 className="text-3xl font-bold">{COMPANY.name}</h1>
              <p className="text-sm text-gray-600">{COMPANY.tagline}</p>
            </div>
            <div className="text-right">
              <p className="font-bold text-2xl">PURCHASE ORDER</p>
              <p className="text-sm">{poData.poNumber}</p>
            </div>
          </div>

          {/* Company Details */}
          <div className="grid grid-cols-2 gap-4 text-xs mb-4">
            <div>
              <p className="font-semibold mb-2">From:</p>
              <p className="font-bold">{COMPANY.name}</p>
              <p>{COMPANY.address.line1}</p>
              <p>{COMPANY.address.line2}</p>
              <p>{COMPANY.address.city}, {COMPANY.address.state} {COMPANY.address.postal}</p>
              <p className="mt-2">
                <strong>Phone:</strong> {COMPANY.phone}
              </p>
              <p>
                <strong>Email:</strong> {COMPANY.email}
              </p>
            </div>

            {/* Client Details */}
            <div>
              <p className="font-semibold mb-2">Bill To:</p>
              <p className="font-bold">{poData.clientName || '[Client Name]'}</p>
              <p>{poData.clientAddress || '[Client Address]'}</p>
              <p className="mt-2">
                <strong>Phone:</strong> {poData.clientPhone || '[Phone]'}
              </p>
              <p>
                <strong>Email:</strong> {poData.clientEmail || '[Email]'}
              </p>
            </div>
          </div>
        </div>

        {/* Date Info */}
        <div className="flex justify-between mb-6 text-sm">
          <div>
            <span className="font-semibold">Date:</span> {poData.date}
          </div>
        </div>

        {/* Items Table */}
        <table className="w-full mb-6 text-sm border-collapse">
          <thead>
            <tr className="border-b-2 border-dark-900">
              <th className="text-left p-2 font-bold">Material</th>
              <th className="text-center p-2 font-bold">Qty</th>
              <th className="text-center p-2 font-bold">Unit</th>
              <th className="text-right p-2 font-bold">Rate</th>
              <th className="text-right p-2 font-bold">Amount</th>
            </tr>
          </thead>
          <tbody>
            {poData.items.map((item, idx) => (
              <tr key={idx} className="border-b border-gray-200">
                <td className="p-2">{item.material || '...'}</td>
                <td className="text-center p-2">{item.quantity || '0'}</td>
                <td className="text-center p-2">{item.unit}</td>
                <td className="text-right p-2">{formatCurrency(item.rate || 0)}</td>
                <td className="text-right p-2">
                  {formatCurrency((Number(item.quantity) * Number(item.rate)) || 0)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Totals */}
        <div className="flex justify-end mb-6">
          <div className="w-64">
            <div className="flex justify-between p-2 border-t border-gray-200">
              <span>Subtotal:</span>
              <span>{formatCurrency(subTotal)}</span>
            </div>
            <div className="flex justify-between p-2 border-t border-gray-200">
              <span>GST ({poData.gstRate}%):</span>
              <span>{formatCurrency(gstAmount)}</span>
            </div>
            <div className="flex justify-between p-2 border-t-2 border-dark-900 font-bold">
              <span>Grand Total:</span>
              <span>{formatCurrency(total)}</span>
            </div>
          </div>
        </div>

        {/* Amount in Words */}
        <div className="bg-gray-100 p-4 mb-6 text-sm rounded">
          <p>
            <strong>Amount in Words:</strong> {amountInWords(Math.floor(total))} Rupees Only
          </p>
        </div>

        {/* Terms & Conditions */}
        {poData.termsConditions && (
          <div className="mb-6">
            <p className="font-bold mb-2 text-sm">Terms & Conditions:</p>
            <p className="text-xs whitespace-pre-wrap">{poData.termsConditions}</p>
          </div>
        )}

        {/* Signature Area */}
        <div className="flex justify-between mt-12 pt-4 border-t border-gray-200 text-xs">
          <div>
            <p className="mb-8">Authorized by:</p>
            <p>___________________</p>
            <p className="mt-1">{COMPANY.owner}</p>
            <p className="text-gray-600">{COMPANY.ownerTitle}</p>
          </div>
          <div>
            <p className="mb-8">Accepted by:</p>
            <p>___________________</p>
            <p className="mt-1">Client Name</p>
            <p className="text-gray-600">Date: ___________</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default POPrintTemplate;
