import { useEffect, useState } from 'react'
import { Menu, X, ArrowUpRight } from 'lucide-react'
import { Link, NavLink } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { navigation } from '../data/siteData'
import { BrandLogo } from './BrandLogo'

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <>
      <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
        <div className="header-inner">
          <Link to="/" className="brand" aria-label="KKGT home">
            <BrandLogo compact />
          </Link>
          <nav className="desktop-nav" aria-label="Main navigation">
            {navigation.map((item) => (
              <NavLink key={item.href} to={item.href} className={({ isActive }) => isActive ? 'active' : ''}>
                {item.label}
              </NavLink>
            ))}
          </nav>
          <Link to="/contact" className="header-cta">
            Request a quote <ArrowUpRight size={16} />
          </Link>
          <button className="menu-button" onClick={() => setOpen(true)} aria-label="Open menu">
            <Menu />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div className="mobile-menu" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <div className="mobile-menu-top">
              <BrandLogo compact />
              <button onClick={() => setOpen(false)} aria-label="Close menu"><X /></button>
            </div>
            <nav>
              {navigation.map((item, index) => (
                <motion.div key={item.href} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.045 }}>
                  <NavLink to={item.href} onClick={() => setOpen(false)}>{item.label}</NavLink>
                </motion.div>
              ))}
            </nav>
            <p>KKGT Import Export · Addis Ababa, Ethiopia</p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
