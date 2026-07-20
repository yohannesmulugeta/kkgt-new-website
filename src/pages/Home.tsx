import { useRef } from 'react'
import { ArrowDown, ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { motion, useScroll, useTransform } from 'framer-motion'
import { BusinessStory } from '../components/BusinessStory'
import { ContactForm } from '../components/ContactForm'
import { ImageWithFallback } from '../components/ImageWithFallback'
import { OriginsScroll } from '../components/OriginsScroll'
import { ProductCard } from '../components/ProductCard'
import { Reveal } from '../components/Reveal'
import { SectionHeading } from '../components/SectionHeading'
import { commodities, imageSources, processSteps, products } from '../data/siteData'
import { usePageTitle } from '../hooks/usePageTitle'

export function Home() {
  usePageTitle('Home', 'KKGT Import Export — Ethiopian coffee, agrochemicals, farming, oilseeds and pulses.')
  const hero = useRef<HTMLElement | null>(null)
  const { scrollYProgress } = useScroll({ target: hero, offset: ['start start', 'end start'] })
  const mediaScale = useTransform(scrollYProgress, [0, 1], [1.08, 1])
  const contentY = useTransform(scrollYProgress, [0, 1], [0, -90])
  const contentOpacity = useTransform(scrollYProgress, [0, 0.78], [1, 0])

  return (
    <>
      <section className="hero" ref={hero}>
        <motion.div className="hero-media" style={{ scale: mediaScale }}>
          <ImageWithFallback src={imageSources.hero} alt="Ethiopian agricultural landscape" label="Ethiopian agriculture" loading="eager" />
        </motion.div>
        <div className="hero-overlay" />
        <motion.div className="hero-content" style={{ y: contentY, opacity: contentOpacity }}>
          <span className="eyebrow eyebrow--light">Ethiopian agriculture · International trade</span>
          <h1>From Ethiopian soil<br />to global markets.</h1>
          <p>KKGT connects agricultural production, crop inputs and export opportunities through four focused business areas.</p>
          <div className="hero-actions">
            <a href="#business" className="button button--orange">Explore our business <ArrowDown size={18} /></a>
            <Link to="/contact" className="button button--ghost">Contact KKGT <ArrowUpRight size={18} /></Link>
          </div>
        </motion.div>
        <div className="hero-index"><span>KKGT</span><span>01 / 08</span></div>
      </section>

      <section className="intro-section">
        <div className="intro-grid">
          <Reveal>
            <span className="eyebrow">About KKGT</span>
            <h2>An Ethiopian agricultural company built for sustainable growth.</h2>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="intro-lead">KKGT Import Export works across green coffee export, agricultural inputs, coffee farming and selected oilseeds and pulses.</p>
            <p>Our direction is grounded in quality, integrity and innovation—connecting Ethiopian agricultural capability with local and international market needs.</p>
            <Link to="/about" className="text-link">Learn about KKGT <ArrowUpRight size={17} /></Link>
          </Reveal>
        </div>
        <Reveal className="intro-image-wrap">
          <ImageWithFallback src={imageSources.company} alt="KKGT agricultural operations" label="KKGT company operations" className="intro-image" />
          <div className="intro-image-note"><strong>1999 E.C.</strong><span>Establishment year stated on the existing website</span></div>
        </Reveal>
      </section>

      <div id="business"><BusinessStory /></div>

      <OriginsScroll />

      <section className="process-section">
        <div className="process-intro">
          <SectionHeading eyebrow="Export process" title="Prepared with care. Delivered with confidence." intro="A clear working sequence helps buyers understand how sourcing moves toward preparation and shipment." />
        </div>
        <div className="process-layout">
          <div className="process-media">
            <ImageWithFallback src={imageSources.supporting} alt="Coffee preparation and export" label="Coffee preparation" />
            <span>Process overview · Draft for testing</span>
          </div>
          <div className="process-list">
            {processSteps.map((step) => (
              <Reveal className="process-step" key={step.number}>
                <span>{step.number}</span>
                <div><h3>{step.title}</h3><p>{step.text}</p></div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="products-section">
        <div className="products-head">
          <SectionHeading eyebrow="Agricultural inputs" title="Products organised for productive farming." intro="A testing catalogue using verified canonical product names from KKGT label work." />
          <Link to="/agrochemicals" className="text-link">View catalogue <ArrowUpRight size={17} /></Link>
        </div>
        <div className="product-grid">
          {products.map((product, index) => <Reveal key={product.name} delay={index * 0.05}><ProductCard {...product} /></Reveal>)}
        </div>
      </section>

      <section className="commodities-section">
        <div className="commodities-background" aria-hidden="true"><div /><div /><div /></div>
        <div className="commodities-content">
          <span className="eyebrow eyebrow--light">Oilseeds and pulses</span>
          <h2>Quality Ethiopian commodities for global trade.</h2>
          <div className="commodity-list">
            {commodities.map((commodity, index) => <motion.span key={commodity} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.08 }}>{commodity}</motion.span>)}
          </div>
          <Link to="/commodities" className="button button--ghost">Explore commodities <ArrowUpRight size={18} /></Link>
        </div>
      </section>

      <section className="quality-preview">
        <div>
          <SectionHeading eyebrow="Quality and documentation" title="Quality at every stage." intro="The final website will present verified certificates, quality controls and traceability information from official KKGT documents." />
          <Link to="/quality" className="button button--green">Explore quality <ArrowUpRight size={18} /></Link>
        </div>
        <div className="certificate-stack">
          {imageSources.certifications.map((image, index) => (
            <ImageWithFallback key={image} src={image} alt={`KKGT certification document ${index + 1}`} label="Certificate placeholder" className={`certificate-card certificate-card--${index + 1}`} />
          ))}
        </div>
      </section>

      <section className="sustainability-preview">
        <ImageWithFallback src={imageSources.company} alt="Ethiopian agriculture and community" label="Farmers and agriculture" className="sustainability-image" />
        <div className="sustainability-overlay" />
        <Reveal className="sustainability-copy">
          <span className="eyebrow eyebrow--light">Growth with purpose</span>
          <h2>Growth that supports people and agriculture.</h2>
          <p>The testing site brings together farmer relationships, responsible sourcing, local employment and agricultural development under one clear story.</p>
          <Link to="/sustainability" className="button button--ghost">Explore sustainability <ArrowUpRight size={18} /></Link>
        </Reveal>
      </section>

      <section className="contact-preview">
        <div className="contact-preview-copy">
          <SectionHeading eyebrow="Contact KKGT" title="Start a conversation." intro="Choose the business area that matches your inquiry. The testing form currently demonstrates the final user experience." />
        </div>
        <ContactForm />
      </section>
    </>
  )
}
