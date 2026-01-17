import { useRef } from 'react'
import { useReactToPrint } from 'react-to-print'
import { Button } from '../ui/Button'
import { Card, CardContent } from '../ui/Card'
import { usePO } from '../../hooks/usePO'
import { downloadPDF } from '../../utils/printUtils'
import { COMPANY_INFO, formatCurrency, numberToWords } from '../../constants'
import { Download, Printer } from 'lucide-react'

export const POPrintView = () => {
  const { currentPO } = usePO()
  const printRef = useRef()

  if (!currentPO) {
    return <p className="text-center text-gray-500">No Purchase Order to display</p>
  }

  const handlePrint = useReactToPrint({
    content: () => printRef.current,
    documentTitle: `PO-${currentPO.number}`
  })

  const calculateSubtotal = () => {
    return currentPO.materials.reduce((sum, m) => sum + (m.quantity * m.rate), 0)
  }

  const subtotal = calculateSubtotal()
  const gst = (subtotal * currentPO.gstRate) / 100
  const total = subtotal + gst

  return (
    <>
      <div className="mb-6 flex gap-3 justify-center no-print">
        <Button onClick={handlePrint} className="flex items-center gap-2">
          <Printer className="w-4 h-4" />
          Print
        </Button>
        <Button variant="outline" onClick={() => downloadPDF('po-printable', `PO-${currentPO.number}.pdf`)} className="flex items-center gap-2">
          <Download className="w-4 h-4" />
          Download PDF
        </Button>
      </div>

      <div id="po-printable" ref={printRef} className="bg-white p-8 max-w-4xl mx-auto">
        {/* Header */}
        <div className="border-b-4 border-secondary pb-6 mb-6">
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-4xl font-bold text-secondary">{COMPANY_INFO.name}</h1>
              <p className="text-primary-600 font-semibold">{COMPANY_INFO.tagline}</p>
              <div className="mt-3 text-sm text-gray-700">
                <p>{COMPANY_INFO.address.line1}</p>
                <p>{COMPANY_INFO.address.line2}</p>
                <p>{COMPANY_INFO.address.line3}</p>
                <p>{COMPANY_INFO.address.line4}</p>
                <p className="mt-2">Phone: {COMPANY_INFO.phone}</p>
                <p>Email: {COMPANY_INFO.email}</p>
              </div>
            </div>
            <div className="text-right">
              <h2 className="text-2xl font-bold text-secondary">PURCHASE ORDER</h2>
              <p className="text-xl font-semibold text-primary-600 mt-2">{currentPO.number}</p>
              <p className="text-sm text-gray-600 mt-2">Date: {new Date(currentPO.date).toLocaleDateString('en-IN')}</p>
            </div>
          </div>
        </div>

        {/* Client Details */}
        <div className="grid grid-cols-2 gap-6 mb-8">
          <div className="border-2 border-gray-300 p-4">
            <h3 className="font-bold text-secondary mb-3 text-lg">BILL TO:</h3>
            <p className="font-semibold text-lg">{currentPO.clientName}</p>
            <p className="text-sm mt-2">{currentPO.clientAddress}</p>
            <p className="text-sm mt-2">Phone: {currentPO.clientPhone}</p>
            <p className="text-sm">Email: {currentPO.clientEmail}</p>
          </div>
          <div className="border-2 border-gray-300 p-4">
            <h3 className="font-bold text-secondary mb-3 text-lg">SHIP TO:</h3>
            <p className="font-semibold text-lg">{currentPO.clientName}</p>
            <p className="text-sm mt-2">{currentPO.clientAddress}</p>
            <p className="text-sm mt-2">Phone: {currentPO.clientPhone}</p>
          </div>
        </div>

        {/* Items Table */}
        <div className="mb-8">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-secondary text-white">
                <th className="border border-gray-300 p-3 text-left">Description</th>
                <th className="border border-gray-300 p-3 text-center">Qty</th>
                <th className="border border-gray-300 p-3 text-center">Unit</th>
                <th className="border border-gray-300 p-3 text-right">Rate</th>
                <th className="border border-gray-300 p-3 text-right">Amount</th>
              </tr>
            </thead>
            <tbody>
              {currentPO.materials.map((material, index) => (
                <tr key={material.id}>
                  <td className="border border-gray-300 p-3">{material.description}</td>
                  <td className="border border-gray-300 p-3 text-center">{material.quantity}</td>
                  <td className="border border-gray-300 p-3 text-center">{material.unit}</td>
                  <td className="border border-gray-300 p-3 text-right">₹{material.rate.toFixed(2)}</td>
                  <td className="border border-gray-300 p-3 text-right">₹{(material.quantity * material.rate).toFixed(2)}</td>
                </tr>
              ))}
              <tr className="bg-gray-50">
                <td colSpan="4" className="border border-gray-300 p-3 text-right font-semibold">Subtotal:</td>
                <td className="border border-gray-300 p-3 text-right font-semibold">₹{subtotal.toFixed(2)}</td>
              </tr>
              <tr className="bg-gray-50">
                <td colSpan="4" className="border border-gray-300 p-3 text-right font-semibold">GST ({currentPO.gstRate}%):</td>
                <td className="border border-gray-300 p-3 text-right font-semibold">₹{gst.toFixed(2)}</td>
              </tr>
              <tr className="bg-primary-100">
                <td colSpan="4" className="border border-gray-300 p-3 text-right font-bold text-lg">TOTAL:</td>
                <td className="border border-gray-300 p-3 text-right font-bold text-lg">₹{total.toFixed(2)}</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Amount in Words */}
        <div className="mb-8 p-4 bg-gray-50 rounded border border-gray-300">
          <p className="text-sm"><strong>Amount in Words:</strong> {numberToWords(Math.floor(total))} Rupees Only</p>
        </div>

        {/* Terms and Conditions */}
        {currentPO.notes && (
          <div className="mb-8">
            <h3 className="font-bold text-secondary mb-2">Terms & Conditions:</h3>
            <p className="text-sm whitespace-pre-wrap">{currentPO.notes}</p>
          </div>
        )}

        {/* Signature Section */}
        <div className="grid grid-cols-3 gap-4 mt-12 pt-8 border-t-2 border-gray-300">
          <div className="text-center">
            <p className="h-12"></p>
            <p className="text-sm font-semibold">Authorized By</p>
            <p className="text-xs text-gray-600">HAFA INFRA</p>
          </div>
          <div className="text-center">
            <p className="h-12"></p>
            <p className="text-sm font-semibold">Verified By</p>
          </div>
          <div className="text-center">
            <p className="h-12"></p>
            <p className="text-sm font-semibold">Client Signature</p>
          </div>
        </div>
      </div>
    </>
  )
}
