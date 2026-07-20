import { Mail, MapPin, Phone } from 'lucide-react'
import { ContactForm } from '../components/ContactForm'
import { PageHero } from '../components/PageHero'
import { imageSources, site } from '../data/siteData'
import { usePageTitle } from '../hooks/usePageTitle'

export function Contact() {
  usePageTitle('Contact')
  return (
    <>
      <PageHero eyebrow="Contact KKGT" title="Start the right conversation." intro="Choose coffee, agricultural inputs, commodities or a general company inquiry." image={imageSources.hero} label="KKGT contact" />
      <section className="contact-page">
        <div className="contact-details">
          <span className="eyebrow">Office details</span>
          <h2>Addis Ababa, Ethiopia</h2>
          <div><Mail /><a href={`mailto:${site.email}`}>{site.email}</a></div>
          <div><Phone /><a href={`tel:${site.phone.replace(/\s/g, '')}`}>{site.phone}</a></div>
          <div><MapPin /><p>{site.address}</p></div>
          <small>{site.hours}</small>
          <p className="verification-note">Contact information is taken from the existing public website and should be confirmed before production launch.</p>
        </div>
        <ContactForm />
      </section>
    </>
  )
}
