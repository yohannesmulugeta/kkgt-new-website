type ProductCardProps = {
  name: string
  category: string
  formulation: string
  accent: string
}

export function ProductCard({ name, category, formulation, accent }: ProductCardProps) {
  return (
    <article className="product-card">
      <div className={`product-pack product-pack--${accent}`}>
        <div className="product-pack-mark">KKGT</div>
        <strong>{name}</strong>
        <span>{category}</span>
      </div>
      <div className="product-card-copy">
        <span>{category}</span>
        <h3>{name}</h3>
        <p>Formulation: {formulation}</p>
      </div>
    </article>
  )
}
