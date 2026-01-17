import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { POProvider } from './context/POContext'
import { ChallanProvider } from './context/ChallanContext'
import { MainLayout } from './components/layout/MainLayout'

// Public pages
import { Home } from './pages/Home'
import { About } from './pages/About'
import { Products } from './pages/Products'
import { Services } from './pages/Services'
import { Contact } from './pages/Contact'

// Admin pages
import { AdminDashboard } from './pages/admin/Dashboard'
import { CreatePO } from './pages/admin/CreatePO'
import { ViewPO } from './pages/admin/ViewPO'
import { CreateChallan } from './pages/admin/CreateChallan'
import { ViewChallan } from './pages/admin/ViewChallan'

function App() {
  return (
    <POProvider>
      <ChallanProvider>
        <Router>
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<MainLayout><Home /></MainLayout>} />
            <Route path="/about" element={<MainLayout><About /></MainLayout>} />
            <Route path="/products" element={<MainLayout><Products /></MainLayout>} />
            <Route path="/services" element={<MainLayout><Services /></MainLayout>} />
            <Route path="/contact" element={<MainLayout><Contact /></MainLayout>} />

            {/* Admin Routes */}
            <Route path="/admin/dashboard" element={<MainLayout><AdminDashboard /></MainLayout>} />
            <Route path="/admin/po/create" element={<MainLayout><CreatePO /></MainLayout>} />
            <Route path="/admin/po/:id/print" element={<MainLayout><ViewPO /></MainLayout>} />
            <Route path="/admin/challan/create" element={<MainLayout><CreateChallan /></MainLayout>} />
            <Route path="/admin/challan/:id/print" element={<MainLayout><ViewChallan /></MainLayout>} />

            {/* 404 Page */}
            <Route path="*" element={
              <MainLayout>
                <div className="py-16 px-4 text-center">
                  <h1 className="text-4xl font-bold text-secondary mb-4">Page Not Found</h1>
                  <p className="text-gray-600">The page you're looking for doesn't exist.</p>
                </div>
              </MainLayout>
            } />
          </Routes>
        </Router>
      </ChallanProvider>
    </POProvider>
  )
}

export default App
