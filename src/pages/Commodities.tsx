import { PageHero } from '../components/PageHero'
import { Reveal } from '../components/Reveal'
import { SectionHeading } from '../components/SectionHeading'
import { commodities, imageSources } from '../data/siteData'
import { usePageTitle } from '../hooks/usePageTitle'

export function Commodities() {
  usePageTitle('Oilseeds and Pulses')
  return (
    <>
      <PageHero eyebrow="Oilseeds and pulses" title="Selected Ethiopian commodities for commercial buyers." intro="A structured presentation of the commodities currently mentioned in KKGT’s public business profile." image={imageSources.services[3]} label="Oilseeds and pulses" />
      <section className="content-section split-section"><SectionHeading eyebrow="Commodity portfolio" title="Products organised for buyer clarity." /><p className="large-paragraph">The production version will add verified specifications, moisture limits, packaging options, crop-year information and available quantities.</p></section>
      <section className="commodity-page-grid">{commodities.map((commodity, index) => <Reveal key={commodity} delay={index * .05} className="commodity-page-card"><span>0{index + 1}</span><h3>{commodity}</h3><p>Commercial specification pending verification.</p></Reveal>)}</section>
      <section className="callout-section"><span className="eyebrow eyebrow--light">Export inquiry</span><h2>Commodity availability changes by season and confirmed supply.</h2><p>The final inquiry form will capture destination, quantity, specification and packaging requirements.</p></section>
    </>
  )
}
