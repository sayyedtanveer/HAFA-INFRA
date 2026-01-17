import { useRef } from 'react'
import { useReactToPrint } from 'react-to-print'
import { Button } from '../ui/Button'
import { useChallan } from '../../hooks/useChallan'
import { downloadPDF } from '../../utils/printUtils'
import { COMPANY_INFO } from '../../constants'
import { Download, Printer } from 'lucide-react'

export const ChallanPrintView = () => {
  const { currentChallan } = useChallan()
  const printRef = useRef()

  if (!currentChallan) {
    return <p className="text-center text-gray-500">No Challan to display</p>
  }

  const handlePrint = useReactToPrint({
    content: () => printRef.current,
    documentTitle: `Challan-${currentChallan.number}`
  })

  return (
    <>
      <div className="mb-6 flex gap-3 justify-center no-print">
        <Button onClick={handlePrint} className="flex items-center gap-2">
          <Printer className="w-4 h-4" />
          Print
        </Button>
        <Button variant="outline" onClick={() => downloadPDF('challan-printable', `Challan-${currentChallan.number}.pdf`)} className="flex items-center gap-2">
          <Download className="w-4 h-4" />
          Download PDF
        </Button>
      </div>

      <div id="challan-printable" ref={printRef} className="bg-white p-8 max-w-4xl mx-auto">
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
              <h2 className="text-3xl font-bold text-secondary">DELIVERY CHALLAN</h2>
              <p className="text-xl font-semibold text-primary-600 mt-2">{currentChallan.number}</p>
              <p className="text-sm text-gray-600 mt-2">Date: {new Date(currentChallan.date).toLocaleDateString('en-IN')}</p>
            </div>
          </div>
        </div>

        {/* Client & Site Details */}
        <div className="grid grid-cols-2 gap-6 mb-8">
          <div className="border-2 border-gray-300 p-4">
            <h3 className="font-bold text-secondary mb-3">CLIENT DETAILS:</h3>
            <p className="font-semibold text-lg">{currentChallan.clientName}</p>
            <p className="text-sm mt-2">{currentChallan.clientAddress}</p>
            <p className="text-sm mt-2">Phone: {currentChallan.clientPhone}</p>
          </div>
          <div className="border-2 border-gray-300 p-4">
            <h3 className="font-bold text-secondary mb-3">DELIVERY SITE:</h3>
            <p className="font-semibold text-lg">{currentChallan.siteName}</p>
            <p className="text-sm mt-2">{currentChallan.siteAddress}</p>
          </div>
        </div>

        {/* Vehicle Details */}
        <div className="grid grid-cols-2 gap-6 mb-8">
          <div className="border border-gray-300 p-4">
            <h4 className="font-bold text-secondary mb-2">Vehicle Details:</h4>
            <p className="text-sm"><strong>Vehicle No:</strong> {currentChallan.vehicleNumber || 'N/A'}</p>
            <p className="text-sm"><strong>Driver Name:</strong> {currentChallan.driverName || 'N/A'}</p>
            <p className="text-sm"><strong>Driver Phone:</strong> {currentChallan.driverPhone || 'N/A'}</p>
          </div>
          <div className="border border-gray-300 p-4">
            <h4 className="font-bold text-secondary mb-2">Challan Info:</h4>
            <p className="text-sm"><strong>Challan #:</strong> {currentChallan.number}</p>
            <p className="text-sm"><strong>Date:</strong> {new Date(currentChallan.date).toLocaleDateString('en-IN')}</p>
            <p className="text-sm"><strong>Status:</strong> {currentChallan.status}</p>
          </div>
        </div>

        {/* Materials Table */}
        <div className="mb-8">
          <h4 className="font-bold text-secondary mb-3">MATERIALS DELIVERED:</h4>
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-secondary text-white">
                <th className="border border-gray-300 p-3 text-left">S.No.</th>
                <th className="border border-gray-300 p-3 text-left">Description</th>
                <th className="border border-gray-300 p-3 text-center">Quantity</th>
                <th className="border border-gray-300 p-3 text-center">Unit</th>
              </tr>
            </thead>
            <tbody>
              {currentChallan.materials.map((material, index) => (
                <tr key={material.id}>
                  <td className="border border-gray-300 p-3 text-center">{index + 1}</td>
                  <td className="border border-gray-300 p-3">{material.description}</td>
                  <td className="border border-gray-300 p-3 text-center">{material.quantity}</td>
                  <td className="border border-gray-300 p-3 text-center">{material.unit}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Notes */}
        {currentChallan.notes && (
          <div className="mb-8">
            <h4 className="font-bold text-secondary mb-2">Notes/Remarks:</h4>
            <p className="text-sm whitespace-pre-wrap">{currentChallan.notes}</p>
          </div>
        )}

        {/* Signature Section */}
        <div className="mt-12 pt-8 border-t-2 border-gray-300 grid grid-cols-3 gap-4">
          <div className="text-center">
            <p className="h-12"></p>
            <p className="text-sm font-semibold">Delivered By</p>
            <p className="text-xs text-gray-600">HAFA INFRA</p>
          </div>
          <div className="text-center">
            <p className="h-12"></p>
            <p className="text-sm font-semibold">Verified By</p>
          </div>
          <div className="text-center">
            <p className="h-12"></p>
            <p className="text-sm font-semibold">Received By</p>
          </div>
        </div>

        <p className="text-xs text-gray-600 text-center mt-6">
          This is a computer-generated document. No signature required.
        </p>
      </div>
    </>
  )
}
