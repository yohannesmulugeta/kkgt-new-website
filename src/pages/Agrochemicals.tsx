import { useMemo, useState } from 'react'
import { Search } from 'lucide-react'
import { PageHero } from '../components/PageHero'
import { ProductCard } from '../components/ProductCard'
import { products, imageSources } from '../data/siteData'
import { usePageTitle } from '../hooks/usePageTitle'

export function Agrochemicals() {
  usePageTitle('Agrochemicals')
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState('All')
  const categories = ['All', ...new Set(products.map((item) => item.category))]
  const filtered = useMemo(() => products.filter((item) => (category === 'All' || item.category === category) && item.name.toLowerCase().includes(query.toLowerCase())), [query, category])
  return (
    <>
      <PageHero eyebrow="Agricultural inputs" title="A clear, searchable agrochemical catalogue." intro="The testing version uses canonical product names while technical content remains limited to verified data." image={imageSources.services[1]} label="Agricultural inputs" />
      <section className="catalogue-section">
        <div className="catalogue-toolbar">
          <div className="search-box"><Search size={18} /><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search products" aria-label="Search products" /></div>
          <div className="filter-buttons">{categories.map((item) => <button className={category === item ? 'active' : ''} key={item} onClick={() => setCategory(item)}>{item}</button>)}</div>
        </div>
        <div className="product-grid">{filtered.map((product) => <ProductCard key={product.name} {...product} />)}</div>
      </section>
      <section className="safety-note"><div><span className="eyebrow">Responsible product information</span><h2>Technical details must come from approved labels and leaflets.</h2></div><p>Active ingredients, application rates, target crops, safety directions and registration information will not be invented for the website.</p></section>
    </>
  )
}
