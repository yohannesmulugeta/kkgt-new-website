import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { coffeeOrigins } from '../data/siteData'

export function OriginsScroll() {
  const section = useRef<HTMLElement | null>(null)
  const track = useRef<HTMLDivElement | null>(null)

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    const context = gsap.context(() => {
      const mm = gsap.matchMedia()
      mm.add('(min-width: 900px) and (prefers-reduced-motion: no-preference)', () => {
        if (!section.current || !track.current) return
        const distance = () => Math.max(0, track.current!.scrollWidth - window.innerWidth + 120)
        gsap.to(track.current, {
          x: () => -distance(),
          ease: 'none',
          scrollTrigger: {
            trigger: section.current,
            start: 'top top',
            end: () => `+=${distance() + window.innerHeight * 0.6}`,
            scrub: 0.8,
            pin: true,
            invalidateOnRefresh: true,
          },
        })
      })
      return () => mm.revert()
    }, section)
    return () => context.revert()
  }, [])

  return (
    <section className="origins-scroll" ref={section}>
      <div className="origins-intro">
        <span className="eyebrow">Coffee origins</span>
        <h2>Distinct origins.<br />Exceptional Ethiopian coffee.</h2>
        <p>Explore the origins currently named in KKGT’s public coffee offering.</p>
      </div>
      <div className="origins-track" ref={track}>
        {coffeeOrigins.map((origin, index) => (
          <article className="origin-card" key={origin.name}>
            <div className="origin-code">{origin.code}</div>
            <span>0{index + 1} · {origin.region}</span>
            <h3>{origin.name}</h3>
            <p>{origin.note}</p>
            <div className="origin-landscape" aria-hidden="true"><i /><i /><i /></div>
          </article>
        ))}
      </div>
    </section>
  )
}
