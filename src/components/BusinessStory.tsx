import { useEffect, useRef, useState } from 'react'
import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { businessAreas } from '../data/siteData'
import { ImageWithFallback } from './ImageWithFallback'

export function BusinessStory() {
  const [active, setActive] = useState(0)
  const itemsRef = useRef<Array<HTMLDivElement | null>>([])

  useEffect(() => {
    const observers = itemsRef.current.map((item, index) => {
      if (!item) return null
      const observer = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) setActive(index)
      }, { rootMargin: '-40% 0px -40% 0px', threshold: 0 })
      observer.observe(item)
      return observer
    })
    return () => observers.forEach((observer) => observer?.disconnect())
  }, [])

  return (
    <section className="business-story section-dark">
      <div className="business-story-head">
        <span className="eyebrow eyebrow--light">Four connected businesses</span>
        <h2>Agricultural capability across the value chain.</h2>
      </div>
      <div className="business-story-layout">
        <div className="business-copy-list">
          {businessAreas.map((business, index) => (
            <div
              className={`business-copy ${active === index ? 'active' : ''}`}
              key={business.id}
              ref={(node) => { itemsRef.current[index] = node }}
            >
              <span>{business.number} · {business.eyebrow}</span>
              <h3>{business.title}</h3>
              <p>{business.description}</p>
              <Link to={business.href}>Explore this business <ArrowUpRight size={17} /></Link>
            </div>
          ))}
        </div>
        <div className="business-media-sticky">
          <AnimatePresence mode="wait">
            <motion.div key={businessAreas[active].id} initial={{ opacity: 0, scale: 1.03 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.55 }}>
              <ImageWithFallback
                src={businessAreas[active].image}
                alt={businessAreas[active].title}
                label={businessAreas[active].title}
                className="business-media"
              />
              <div className="business-media-caption">
                <span>{businessAreas[active].number}</span>
                <strong>{businessAreas[active].title}</strong>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
