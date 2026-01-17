/**
 * Constants for HAFA INFRA application
 */

export const COMPANY = {
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
    city: 'Kurla (W)',
    state: 'Mumbai',
    postal: '400070',
    country: 'India',
  },
  gst: 'XXXXXXXXXXXXXX', // Add actual GST number if available
};

export const PRODUCTS = {
  STEEL: {
    id: 'steel',
    name: 'Steel',
    description: 'High quality construction steel with superior strength and durability',
    icon: '🔧',
    specs: ['TMT Bars', 'Structural Steel', 'Stainless Steel', 'Angles & Channels'],
  },
  RMC: {
    id: 'rmc',
    name: 'Ready Mix Concrete (RMC)',
    description: 'Pre-mixed concrete delivered to your site with consistent quality',
    icon: '🏗️',
    specs: ['M20 Grade', 'M30 Grade', 'M35 Grade', 'Custom Grades Available'],
  },
  SAND: {
    id: 'sand',
    name: 'Sand',
    description: 'River sand and manufactured sand for construction and concrete',
    icon: '⛱️',
    specs: ['River Sand', 'Manufactured Sand', 'M Sand', 'Fine Sand'],
  },
  BLOCKS: {
    id: 'blocks',
    name: 'Blocks',
    description: 'Concrete blocks and bricks for structural construction',
    icon: '🧱',
    specs: ['Concrete Blocks', 'Hollow Blocks', 'Solid Blocks', 'Partition Blocks'],
  },
};

export const NAVIGATION = [
  { label: 'Home', path: '/' },
  { label: 'About Us', path: '/about' },
  { label: 'Products', path: '/products' },
  { label: 'Services', path: '/services' },
  { label: 'Contact', path: '/contact' },
];

export const WHY_CHOOSE_US = [
  {
    title: 'Quality Assurance',
    description: 'Premium quality materials tested and verified for durability and strength',
    icon: '✓',
  },
  {
    title: 'Competitive Pricing',
    description: 'Best rates in the market without compromising on quality',
    icon: '₹',
  },
  {
    title: 'On-Time Delivery',
    description: 'Reliable delivery schedule to meet your project timeline',
    icon: '🚚',
  },
  {
    title: 'Expert Support',
    description: 'Dedicated support team to assist with product selection and specifications',
    icon: '👥',
  },
  {
    title: 'Bulk Orders',
    description: 'Special discounts available for large quantity orders',
    icon: '📦',
  },
  {
    title: 'Experience',
    description: 'Years of experience in construction material supply industry',
    icon: '⭐',
  },
];

export const SERVICES = [
  {
    title: 'Material Supply',
    description: 'Reliable supply of construction materials for all project sizes',
  },
  {
    title: 'Bulk Orders',
    description: 'Special handling and pricing for large quantity orders',
  },
  {
    title: 'Technical Consultation',
    description: 'Expert advice on material selection and specifications',
  },
  {
    title: 'Delivery Management',
    description: 'Efficient logistics and on-time delivery to your site',
  },
];

export const COLORS = {
  primary: '#111827',      // Dark color
  gold: '#d4a754',         // Gold accent
  white: '#ffffff',
  light: '#f9fafb',
  dark: '#1f2937',
  text: '#374151',
  border: '#e5e7eb',
};
