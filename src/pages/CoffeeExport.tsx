import { PageHero } from '../components/PageHero'
import { Reveal } from '../components/Reveal'
import { SectionHeading } from '../components/SectionHeading'
import { coffeeOrigins, imageSources, processSteps } from '../data/siteData'
import { usePageTitle } from '../hooks/usePageTitle'

export function CoffeeExport() {
  usePageTitle('Coffee Export')
  return (
    <>
      <PageHero eyebrow="Green coffee export" title="Ethiopian coffee prepared for international buyers." intro="A focused presentation of origins, preparation, quality and buyer inquiry." image={imageSources.services[0]} label="Ethiopian green coffee export" />
      <section className="content-section split-section"><SectionHeading eyebrow="Ethiopian origin" title="Coffee shaped by place." /><div className="prose"><p>The current KKGT website names Yirgacheffe, Sidama, Limmu, Lekempti and Djimmah among its coffee origins.</p><p>The production website will add verified grades, crop years, processing methods, availability and buyer specifications.</p></div></section>
      <section className="origin-page-grid">{coffeeOrigins.map((origin, index) => <Reveal key={origin.name} delay={index * .05} className="origin-page-card"><span>{origin.code}</span><h3>{origin.name}</h3><p>{origin.region}</p><small>{origin.note}</small></Reveal>)}</section>
      <section className="workflow-section"><SectionHeading eyebrow="Working process" title="A clear route from sourcing to shipment." /><div className="workflow-grid">{processSteps.map((step) => <article key={step.number}><span>{step.number}</span><h3>{step.title}</h3><p>{step.text}</p></article>)}</div></section>
      <section className="callout-section"><span className="eyebrow eyebrow--light">Buyer information</span><h2>Grades, specifications and availability will be added after company verification.</h2><p>This avoids publishing assumptions as official KKGT export information.</p></section>
    </>
  )
}
