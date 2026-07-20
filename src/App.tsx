import { useEffect } from 'react'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { About } from './pages/About'
import { Agrochemicals } from './pages/Agrochemicals'
import { CoffeeExport } from './pages/CoffeeExport'
import { Commodities } from './pages/Commodities'
import { Contact } from './pages/Contact'
import { Home } from './pages/Home'
import { NotFound } from './pages/NotFound'
import { Quality } from './pages/Quality'
import { Sustainability } from './pages/Sustainability'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo({ top: 0, behavior: 'instant' }) }, [pathname])
  return null
}

function AppRoutes() {
  return (
    <div className="app-shell">
      <ScrollToTop />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/coffee-export" element={<CoffeeExport />} />
          <Route path="/agrochemicals" element={<Agrochemicals />} />
          <Route path="/commodities" element={<Commodities />} />
          <Route path="/sustainability" element={<Sustainability />} />
          <Route path="/quality" element={<Quality />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default function App() {
  const basename = import.meta.env.BASE_URL.replace(/\/$/, '')
  return <BrowserRouter basename={basename}><AppRoutes /></BrowserRouter>
}
