# HAFA INFRA - Construction Materials Supplier Website

A professional, responsive React + Vite website for HAFA INFRA, a construction material supplier and trading company in Mumbai.

## 🚀 Features

### Public Features
- **Home Page** - Hero section with CTA buttons, materials showcase, why choose us section
- **About Us** - Company information, proprietor details, services
- **Products** - Steel, RMC, Sand, Blocks with detailed specifications
- **Services** - Comprehensive service descriptions and quality assurance info
- **Contact Us** - Contact form, contact details, location, working hours
- **Responsive Design** - Mobile-friendly, works on all devices
- **Professional Theme** - Black, Gold, and White color scheme

### Admin Features
- **Dashboard** - Overview of all POs and Challans
- **Purchase Order (PO)**
  - Create new POs with dynamic material table
  - Auto-generated PO numbers
  - GST calculation
  - Print to PDF
  - Professional A4 print layout
- **Delivery Challan**
  - Create delivery challans
  - Auto-generated challan numbers
  - Vehicle & driver details
  - Print to PDF
  - Professional A4 print layout

## 📋 Tech Stack

- **Frontend Framework**: React 18
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Routing**: React Router DOM v6
- **Forms**: React Hook Form
- **Printing**: react-to-print
- **PDF Generation**: jsPDF + html2canvas
- **Icons**: Lucide React
- **Language**: JavaScript (ES6+)

## 📂 Project Structure

```
HAFA-INFRA/
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.jsx
│   │   │   ├── Footer.jsx
│   │   │   └── MainLayout.jsx
│   │   ├── home/
│   │   │   ├── HeroSection.jsx
│   │   │   ├── MaterialsSection.jsx
│   │   │   ├── WhyChooseUsSection.jsx
│   │   │   ├── CTASection.jsx
│   │   │   └── FinalCTASection.jsx
│   │   ├── po/
│   │   │   ├── POForm.jsx
│   │   │   └── POPrintView.jsx
│   │   ├── challan/
│   │   │   ├── ChallanForm.jsx
│   │   │   └── ChallanPrintView.jsx
│   │   └── ui/
│   │       ├── Button.jsx
│   │       ├── Input.jsx
│   │       ├── Card.jsx
│   │       ├── Modal.jsx
│   │       ├── Alert.jsx
│   │       ├── Badge.jsx
│   │       └── Select.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Products.jsx
│   │   ├── Services.jsx
│   │   ├── Contact.jsx
│   │   └── admin/
│   │       ├── Dashboard.jsx
│   │       ├── CreatePO.jsx
│   │       ├── ViewPO.jsx
│   │       ├── CreateChallan.jsx
│   │       └── ViewChallan.jsx
│   ├── context/
│   │   ├── POContext.jsx
│   │   └── ChallanContext.jsx
│   ├── hooks/
│   │   ├── usePO.js
│   │   ├── useChallan.js
│   │   └── useLocalStorage.js
│   ├── utils/
│   │   ├── index.js
│   │   └── printUtils.js
│   ├── constants.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── public/
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── tsconfig.json
└── README.md
```

## 🛠️ Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Step 1: Install Dependencies
```bash
npm install
```

### Step 2: Start Development Server
```bash
npm run dev
```

The application will open automatically at `http://localhost:5173`

### Step 3: Build for Production
```bash
npm run build
```

This creates an optimized build in the `dist/` folder.

### Step 4: Preview Production Build
```bash
npm run preview
```

## 📝 Usage

### Creating a Purchase Order

1. Go to `/admin/dashboard`
2. Click "Create Purchase Order"
3. Fill in client details
4. Add materials with quantity and rates
5. GST is calculated automatically
6. Click "Save Purchase Order"
7. View/Print the PO with professional formatting

### Creating a Delivery Challan

1. Go to `/admin/dashboard`
2. Click "Create Delivery Challan"
3. Fill in client and site details
4. Enter vehicle and driver information
5. Add materials being delivered
6. Click "Save Delivery Challan"
7. View/Print the challan with professional formatting

### Printing & PDF Export

- Both PO and Challan have **Print** buttons
- Use **Download PDF** button to save as PDF
- Professional A4 layout optimized for printing
- Company header with address and contact details included

## 🎨 Customization

### Update Company Information

Edit `src/constants.js`:

```javascript
export const COMPANY_INFO = {
  name: 'HAFA INFRA',
  tagline: 'Construction Material Supplier & Trading',
  owner: 'M. Suleman',
  phone: '+91 81085 63656',
  email: 'suleman.mohammed338@gmail.com',
  address: {
    // ... address details
  }
}
```

### Update Colors

Edit `tailwind.config.js` to customize the color scheme:

```javascript
colors: {
  primary: {
    500: '#c39a69', // Main gold color
    // ... other shades
  },
  secondary: '#000000', // Black
  accent: '#ffffff', // White
}
```

### Add/Remove Pages

1. Create new page component in `src/pages/`
2. Add route in `src/App.jsx`
3. Update navigation in `src/constants.js`

## 🚀 Deployment

### Deploy to Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Deploy to Netlify
```bash
npm run build
# Upload the 'dist' folder to Netlify
```

### Deploy to GitHub Pages
1. Add `"homepage": "https://yourusername.github.io/hafa-infra"` to package.json
2. Run `npm run build`
3. Push the `dist` folder to GitHub

## 📱 Features

### Responsive Design
- Mobile-first approach
- Works perfectly on all devices
- Touch-friendly navigation

### Print Optimization
- A4 size layout
- Professional formatting
- Print-specific styling
- Hide buttons and non-essential elements when printing

### PDF Export
- High-quality PDF generation
- Multi-page support for large documents
- Company branding maintained

## 🔒 Security Notes

- This is a front-end only application
- No backend server by default (for demo purposes)
- Data is stored in browser localStorage
- For production, integrate with backend API

## 📞 Contact Integration

- WhatsApp integration with pre-filled number
- Direct calling functionality
- Email integration
- Contact form (ready for backend integration)

## 🎯 Future Enhancements

- Backend API integration
- User authentication
- Database storage for POs and Challans
- Email notifications
- SMS alerts
- Inventory management
- Payment gateway integration
- Customer dashboard
- Analytics and reporting

## 📄 License

This project is proprietary to HAFA INFRA.

## 👨‍💼 Owner

**M. Suleman** (Proprietor)
- Phone: +91 81085 63656
- Email: suleman.mohammed338@gmail.com

## 🏢 Company

**HAFA INFRA**
Construction Material Supplier & Trading

201, Al Haram C.H.S.,
Nandadeep Building, M P Marg,
Brahmanwadi, Near Pipe Road,
Kurla (W), Mumbai – 400070

---

**Last Updated**: January 2026
**Version**: 1.0.0
