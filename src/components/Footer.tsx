import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { navigation, site } from '../data/siteData'
import { BrandLogo } from './BrandLogo'

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-top">
        <div>
          <span className="eyebrow eyebrow--light">KKGT Import Export</span>
          <h2>Let’s build the next agricultural opportunity.</h2>
        </div>
        <Link to="/contact" className="button button--orange">Start a conversation <ArrowUpRight size={18} /></Link>
      </div>
      <div className="footer-grid">
        <div className="footer-brand">
          <BrandLogo />
          <p>Ethiopian coffee, agricultural inputs, farming and commodity trade.</p>
        </div>
        <div>
          <h3>Explore</h3>
          {navigation.slice(1).map((item) => <Link key={item.href} to={item.href}>{item.label}</Link>)}
        </div>
        <div>
          <h3>Contact</h3>
          <a href={`mailto:${site.email}`}>{site.email}</a>
          <a href={`tel:${site.phone.replace(/\s/g, '')}`}>{site.phone}</a>
          <p>{site.address}</p>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} KKGT Import Export</span>
        <span>Testing website · Content pending final company verification</span>
      </div>
    </footer>
  )
}
