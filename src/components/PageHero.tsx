import { motion } from 'framer-motion'
import { ImageWithFallback } from './ImageWithFallback'

type PageHeroProps = {
  eyebrow: string
  title: string
  intro: string
  image: string
  label: string
}

export function PageHero({ eyebrow, title, intro, image, label }: PageHeroProps) {
  return (
    <section className="page-hero">
      <ImageWithFallback src={image} alt={label} label={label} className="page-hero-media" loading="eager" />
      <div className="page-hero-overlay" />
      <motion.div className="page-hero-content" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9 }}>
        <span className="eyebrow eyebrow--light">{eyebrow}</span>
        <h1>{title}</h1>
        <p>{intro}</p>
      </motion.div>
    </section>
  )
}
