import html2canvas from 'html2canvas'
import jsPDF from 'jspdf'

/**
 * Utility functions for printing and PDF generation
 */

// Generate PO number
export const generatePONumber = () => {
  const date = new Date()
  const year = date.getFullYear()
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const random = Math.floor(Math.random() * 10000).toString().padStart(5, '0')
  return `PO-${year}${month}-${random}`
}

// Generate Challan number
export const generateChallanNumber = () => {
  const date = new Date()
  const year = date.getFullYear()
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const random = Math.floor(Math.random() * 10000).toString().padStart(5, '0')
  return `CHL-${year}${month}-${random}`
}

// Format date
export const formatDate = (date) => {
  if (!date) return ''
  const d = new Date(date)
  return d.toLocaleDateString('en-IN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}

// Format currency
export const formatCurrency = (amount) => {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR'
  }).format(amount)
}

// Format number with commas
export const formatNumber = (num) => {
  if (!num) return '0'
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}

// Calculate GST
export const calculateGST = (amount, gstRate = 18) => {
  return (amount * gstRate) / 100
}

// Calculate total with GST
export const calculateTotalWithGST = (amount, gstRate = 18) => {
  return amount + calculateGST(amount, gstRate)
}

// Download PDF
export const downloadPDF = async (elementId, filename) => {
  try {
    const element = document.getElementById(elementId)
    if (!element) {
      console.error('Element not found')
      return
    }

    const canvas = await html2canvas(element, {
      scale: 2,
      backgroundColor: '#ffffff',
      useCORS: true
    })

    const imgData = canvas.toDataURL('image/png')
    const pdf = new jsPDF({
      orientation: 'portrait',
      unit: 'mm',
      format: 'a4'
    })

    const imgWidth = 210
    const imgHeight = (canvas.height * imgWidth) / canvas.width
    let heightLeft = imgHeight
    let position = 0

    pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight)
    heightLeft -= 297

    while (heightLeft >= 0) {
      position = heightLeft - imgHeight
      pdf.addPage()
      pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight)
      heightLeft -= 297
    }

    pdf.save(filename)
  } catch (error) {
    console.error('Error generating PDF:', error)
  }
}

// Download as image
export const downloadAsImage = async (elementId, filename) => {
  try {
    const element = document.getElementById(elementId)
    if (!element) {
      console.error('Element not found')
      return
    }

    const canvas = await html2canvas(element, {
      scale: 2,
      backgroundColor: '#ffffff',
      useCORS: true
    })

    const link = document.createElement('a')
    link.href = canvas.toDataURL('image/png')
    link.download = filename
    link.click()
  } catch (error) {
    console.error('Error downloading image:', error)
  }
}

// Number to words (for Indian currency)
export const numberToWords = (num) => {
  const ones = ['', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine']
  const tens = ['', '', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety']
  const scales = ['', 'Thousand', 'Lakh', 'Crore']

  if (num === 0) return 'Zero'

  const parts = []
  let scaleIndex = 0

  while (num > 0) {
    let part = 0

    if (scaleIndex === 0) {
      part = num % 100
      num = Math.floor(num / 100)
    } else if (scaleIndex === 1) {
      part = num % 10
      num = Math.floor(num / 10)
    } else {
      part = num % 100
      num = Math.floor(num / 100)
    }

    if (part !== 0) {
      let partWords = ''

      if (scaleIndex === 0) {
        // Handle 0-99
        const tens_digit = Math.floor(part / 10)
        const ones_digit = part % 10
        if (tens_digit >= 2) {
          partWords = tens[tens_digit]
          if (ones_digit > 0) partWords += ' ' + ones[ones_digit]
        } else if (tens_digit === 1) {
          const teens = ['Ten', 'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen']
          partWords = teens[ones_digit]
        } else {
          partWords = ones[ones_digit]
        }
      } else {
        // Handle other scales
        const tens_digit = Math.floor(part / 10)
        const ones_digit = part % 10
        if (tens_digit >= 2) {
          partWords = tens[tens_digit]
          if (ones_digit > 0) partWords += ' ' + ones[ones_digit]
        } else if (tens_digit === 1) {
          const teens = ['Ten', 'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen']
          partWords = teens[ones_digit]
        } else {
          partWords = ones[ones_digit]
        }

        if (scaleIndex > 0 && scaleIndex < scales.length) {
          partWords += ' ' + scales[scaleIndex]
        }
      }

      parts.unshift(partWords)
    }

    scaleIndex++
  }

  return parts.join(' ')
}
