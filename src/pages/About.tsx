import { ImageWithFallback } from '../components/ImageWithFallback'
import { PageHero } from '../components/PageHero'
import { Reveal } from '../components/Reveal'
import { SectionHeading } from '../components/SectionHeading'
import { businessAreas, imageSources } from '../data/siteData'
import { usePageTitle } from '../hooks/usePageTitle'

const values = [
  ['Quality', 'A consistent focus on the standard of products, service and communication.'],
  ['Integrity', 'Business relationships built through responsible and transparent conduct.'],
  ['Innovation', 'Practical improvement in agriculture, operations and market connection.'],
  ['Sustainability', 'Long-term thinking that recognises people, productivity and the environment.'],
]

export function About() {
  usePageTitle('About KKGT')
  return (
    <>
      <PageHero eyebrow="About KKGT" title="Agricultural trade with an Ethiopian foundation." intro="KKGT Import Export brings together coffee, agricultural inputs, primary production and commodity trade." image={imageSources.company} label="KKGT agricultural operations" />
      <section className="content-section split-section">
        <Reveal><SectionHeading eyebrow="Company overview" title="Built around agricultural opportunity." /></Reveal>
        <Reveal delay={0.1} className="prose"><p>KKGT is positioned as an Ethiopian agricultural import-and-export company connecting local production and international markets.</p><p>The public company profile presents work in green coffee export, pesticide import and distribution, coffee farming, oilseeds and pulses, and agricultural technology.</p></Reveal>
      </section>
      <section className="mission-grid">
        <Reveal><span className="eyebrow">Mission</span><h2>Develop practical agricultural value.</h2><p>Work with communities to identify agricultural needs, support useful technologies and services, and grow the company sustainably.</p></Reveal>
        <Reveal delay={0.08}><span className="eyebrow">Vision</span><h2>Become an admired Ethiopian company.</h2><p>Build long-term relationships through innovation, quality and cost-effective products and services.</p></Reveal>
      </section>
      <section className="values-section">
        <SectionHeading eyebrow="Guiding principles" title="Quality. Integrity. Innovation." />
        <div className="value-grid">{values.map(([title, text], index) => <Reveal key={title} delay={index * .06} className="value-card"><span>0{index + 1}</span><h3>{title}</h3><p>{text}</p></Reveal>)}</div>
      </section>
      <section className="business-overview-grid">
        {businessAreas.map((item) => <article key={item.id}><ImageWithFallback src={item.image} alt={item.title} label={item.title} /><span>{item.number}</span><h3>{item.title}</h3><p>{item.description}</p></article>)}
      </section>
    </>
  )
}
