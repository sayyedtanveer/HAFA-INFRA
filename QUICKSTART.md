# HAFA INFRA - Quick Start Guide

## 🚀 Getting Started in 3 Steps

### Step 1: Install Dependencies
Open terminal/PowerShell and run:
```bash
cd HAFA-INFRA
npm install
```

### Step 2: Start Development Server
```bash
npm run dev
```

Your browser will open at `http://localhost:5173`

### Step 3: Explore the Application

**Public Pages:**
- Home: `http://localhost:5173/`
- About: `http://localhost:5173/about`
- Products: `http://localhost:5173/products`
- Services: `http://localhost:5173/services`
- Contact: `http://localhost:5173/contact`

**Admin Pages:**
- Dashboard: `http://localhost:5173/admin/dashboard`
- Create PO: `http://localhost:5173/admin/po/create`
- Create Challan: `http://localhost:5173/admin/challan/create`

## 📝 Key Features to Test

### 1. Home Page
- Responsive hero section with CTA buttons
- WhatsApp integration (click "WhatsApp Us")
- Phone calling functionality
- Beautiful materials showcase
- Why Choose Us section

### 2. Create Purchase Order
1. Go to Dashboard
2. Click "Create Purchase Order"
3. Fill in client details
4. Add materials (click "Add Material")
5. Set quantity and rates
6. GST calculates automatically
7. Save and preview

### 3. Print Purchase Order
- Click "Print" button for print preview
- Click "Download PDF" to save as PDF
- Professional A4 layout
- Company header with address included

### 4. Create Delivery Challan
- Similar flow to PO
- Add vehicle details
- Add driver information
- List materials for delivery
- Save and print

## 🎨 Customization

### Change Company Logo/Name
Edit in `src/constants.js`:
```javascript
export const COMPANY_INFO = {
  name: 'YOUR COMPANY NAME',
  // ... other details
}
```

### Change Colors (Black, Gold, White)
Edit in `tailwind.config.js`:
```javascript
colors: {
  primary: {
    500: '#c39a69', // Gold - change this
  },
  secondary: '#000000', // Black - change this
  accent: '#ffffff', // White - change this
}
```

### Add New Materials/Services
Edit in `src/constants.js`:
```javascript
export const MATERIALS = [
  {
    id: 'steel',
    name: 'Steel',
    description: 'Your description here',
    // ... other fields
  },
  // Add more materials
]
```

## 📦 What's Included

✅ Fully responsive design
✅ Professional UI with modern theme
✅ Complete home page with hero section
✅ About, Products, Services pages
✅ Contact page with form
✅ Purchase Order creation and printing
✅ Delivery Challan creation and printing
✅ PDF export functionality
✅ Mobile-optimized navigation
✅ Beautiful component library
✅ Context API for state management
✅ React Router for navigation
✅ Form handling with React Hook Form
✅ Icon library (Lucide React)
✅ Tailwind CSS for styling

## 🔧 Available Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run ESLint (optional)
npm run lint
```

## 📱 Responsive Breakpoints

The design is fully responsive for:
- Mobile (320px - 640px)
- Tablet (641px - 1024px)
- Desktop (1025px and above)

## 💡 Tips

1. **Data Persistence**: PO and Challan data is stored in browser (localStorage)
2. **Print Quality**: Use Chrome/Edge for best print results
3. **WhatsApp**: Click WhatsApp button to open chat with the owner
4. **Contact Form**: Currently logs to console (ready for API integration)

## 🚨 Troubleshooting

**Port 5173 already in use?**
```bash
npm run dev -- --port 5174
```

**Styles not loading?**
- Clear browser cache (Ctrl+Shift+Delete)
- Restart dev server

**Issues with printing?**
- Use Chrome or Edge browser
- Disable ad blockers
- Check print preview before printing

## 📖 Documentation

For more details, see `README.md`

## 🆘 Support

For issues or questions:
- Phone: +91 81085 63656
- Email: suleman.mohammed338@gmail.com

---

Happy coding! 🎉
