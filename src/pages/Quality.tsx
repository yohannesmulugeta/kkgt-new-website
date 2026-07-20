import { ImageWithFallback } from '../components/ImageWithFallback'
import { PageHero } from '../components/PageHero'
import { SectionHeading } from '../components/SectionHeading'
import { imageSources } from '../data/siteData'
import { usePageTitle } from '../hooks/usePageTitle'

export function Quality() {
  usePageTitle('Quality and Certifications')
  return (
    <>
      <PageHero eyebrow="Quality and certifications" title="Confidence built through clear controls and documentation." intro="A dedicated place for verified certificates, quality procedures and traceability information." image={imageSources.supporting} label="Quality preparation" />
      <section className="content-section split-section"><SectionHeading eyebrow="Quality structure" title="Make evidence easy to understand." /><div className="prose"><p>The redesigned page separates quality procedures, traceability, licences, certifications and downloadable documents.</p><p>No certificate title, issuer, validity period or compliance claim will be invented.</p></div></section>
      <section className="certificate-gallery"><SectionHeading eyebrow="Document gallery" title="Certification details pending official files." />
        <div className="certificate-grid">{imageSources.certifications.map((image, index) => <article key={image}><ImageWithFallback src={image} alt={`Certification preview ${index + 1}`} label="Certification preview" /><h3>Certificate preview {index + 1}</h3><p>Official title and validity will be added after verification.</p></article>)}</div>
      </section>
      <section className="quality-pillars"><article><span>01</span><h3>Inspection</h3><p>Explain how products are checked at relevant operational stages.</p></article><article><span>02</span><h3>Traceability</h3><p>Show how lots, suppliers and documents can be connected.</p></article><article><span>03</span><h3>Documentation</h3><p>Provide controlled access to approved company documents.</p></article></section>
    </>
  )
}
