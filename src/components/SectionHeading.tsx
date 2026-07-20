type SectionHeadingProps = {
  eyebrow: string
  title: string
  intro?: string
  light?: boolean
}

export function SectionHeading({ eyebrow, title, intro, light = false }: SectionHeadingProps) {
  return (
    <div className={`section-heading ${light ? 'section-heading--light' : ''}`}>
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {intro && <p>{intro}</p>}
    </div>
  )
}
