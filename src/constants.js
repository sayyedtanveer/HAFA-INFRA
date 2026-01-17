// Company information constants
export const COMPANY_INFO = {
  name: 'HAFA INFRA',
  tagline: 'Construction Material Supplier & Trading',
  owner: 'M. Suleman',
  ownerTitle: 'Proprietor',
  phone: '+91 81085 63656',
  email: 'suleman.mohammed338@gmail.com',
  address: {
    line1: '201, Al Haram C.H.S.',
    line2: 'Nandadeep Building, M P Marg',
    line3: 'Brahmanwadi, Near Pipe Road',
    line4: 'Kurla (W), Mumbai – 400070',
    full: '201, Al Haram C.H.S., Nandadeep Building, M P Marg, Brahmanwadi, Near Pipe Road, Kurla (W), Mumbai – 400070'
  },
  gst: 'GST No. (To be updated)',
}

// Materials/Products
export const MATERIALS = [
  {
    id: 'steel',
    name: 'Steel',
    description: 'High-quality structural and reinforcement steel for all construction needs',
    icon: '🏗️',
    image: 'steel.jpg'
  },
  {
    id: 'rmc',
    name: 'Ready Mix Concrete (RMC)',
    description: 'Fresh and durable ready-mix concrete delivered to your site',
    icon: '🚚',
    image: 'rmc.jpg'
  },
  {
    id: 'sand',
    name: 'Sand',
    description: 'Premium quality sand for construction and concrete works',
    icon: '⛱️',
    image: 'sand.jpg'
  },
  {
    id: 'blocks',
    name: 'Blocks',
    description: 'Strong and reliable concrete and cement blocks',
    icon: '🧱',
    image: 'blocks.jpg'
  }
]

// Navigation items
export const NAV_ITEMS = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About Us' },
  { path: '/products', label: 'Products' },
  { path: '/services', label: 'Services' },
  { path: '/contact', label: 'Contact Us' },
]

// Admin items
export const ADMIN_NAV_ITEMS = [
  { path: '/admin/dashboard', label: 'Dashboard' },
  { path: '/admin/po', label: 'Purchase Orders' },
  { path: '/admin/challan', label: 'Delivery Challan' },
]

// Why Choose Us Points
export const WHY_CHOOSE_US = [
  {
    title: 'Premium Quality',
    description: 'We source only the finest construction materials from trusted suppliers.'
  },
  {
    title: 'Reliable Delivery',
    description: 'Fast and reliable delivery to your construction sites across Mumbai.'
  },
  {
    title: 'Best Prices',
    description: 'Competitive pricing without compromising on quality.'
  },
  {
    title: 'Expert Team',
    description: 'Our experienced team ensures smooth transactions and support.'
  },
  {
    title: 'Bulk Orders',
    description: 'Special discounts available for bulk and regular orders.'
  },
  {
    title: '24/7 Support',
    description: 'Always ready to assist with your construction material needs.'
  }
]

// Services
export const SERVICES = [
  {
    title: 'Material Supply',
    description: 'Bulk supply of construction materials with guaranteed quality',
    icon: '📦'
  },
  {
    title: 'Delivery Services',
    description: 'Timely delivery across Mumbai with proper handling',
    icon: '🚛'
  },
  {
    title: 'Quality Assurance',
    description: 'Every material is inspected for quality before delivery',
    icon: '✓'
  },
  {
    title: 'Customized Orders',
    description: 'Special orders and customized solutions available',
    icon: '⚙️'
  }
]

// PO Status
export const PO_STATUS = {
  DRAFT: 'Draft',
  SUBMITTED: 'Submitted',
  APPROVED: 'Approved',
  REJECTED: 'Rejected'
}

// Challan Status
export const CHALLAN_STATUS = {
  PENDING: 'Pending',
  IN_TRANSIT: 'In Transit',
  DELIVERED: 'Delivered',
  CANCELLED: 'Cancelled'
}
