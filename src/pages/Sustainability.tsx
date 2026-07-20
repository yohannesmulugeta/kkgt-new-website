import { ImageWithFallback } from '../components/ImageWithFallback'
import { PageHero } from '../components/PageHero'
import { Reveal } from '../components/Reveal'
import { SectionHeading } from '../components/SectionHeading'
import { imageSources } from '../data/siteData'
import { usePageTitle } from '../hooks/usePageTitle'

const themes = [
  ['Farmer relationships', 'Long-term agricultural growth depends on productive relationships and clear market connection.'],
  ['Responsible sourcing', 'Sourcing should reflect agreed quality, traceability and commercial requirements.'],
  ['Knowledge sharing', 'Training and practical agricultural support can strengthen productivity and product handling.'],
  ['Community impact', 'Community stories will be added only from documented KKGT activities.'],
]

export function Sustainability() {
  usePageTitle('Farming and Sustainability')
  return (
    <>
      <PageHero eyebrow="Farming and sustainability" title="Growth that supports people and agriculture." intro="A responsible company story based on verified farming, sourcing and community activity." image={imageSources.services[2]} label="Coffee farming" />
      <section className="content-section split-section"><SectionHeading eyebrow="Long-term value" title="Agriculture is more than a transaction." /><div className="prose"><p>The current public website connects KKGT with farming, farmer relationships, sustainability and community development.</p><p>The new structure gives these subjects space while avoiding generic claims that cannot be demonstrated.</p></div></section>
      <section className="impact-story"><ImageWithFallback src={imageSources.company} alt="Ethiopian agricultural activity" label="Agricultural community" /><div><span className="eyebrow eyebrow--light">Documented impact</span><h2>Real projects. Real locations. Real outcomes.</h2><p>The final website will present project dates, locations, participants and photographs when those records are supplied.</p></div></section>
      <section className="theme-grid">{themes.map(([title, text], index) => <Reveal className="theme-card" key={title} delay={index * .06}><span>0{index + 1}</span><h3>{title}</h3><p>{text}</p></Reveal>)}</section>
    </>
  )
}
