import { useState } from 'react'

const logoUrl = 'https://kkgtimportexport.com/wp-content/uploads/2024/07/photo_2024-05-31_12-23-37-1.jpg'

export function BrandLogo({ compact = false }: { compact?: boolean }) {
  const [failed, setFailed] = useState(false)
  if (!failed) {
    return <img src={logoUrl} alt="KKGT Import Export" onError={() => setFailed(true)} />
  }
  return (
    <span className={`brand-wordmark ${compact ? 'brand-wordmark--compact' : ''}`} aria-label="KKGT Import Export">
      <strong><i>KKG</i>T</strong><small>IMPORT EXPORT</small>
    </span>
  )
}
