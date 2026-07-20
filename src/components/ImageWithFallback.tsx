import { useState } from 'react'

type ImageWithFallbackProps = {
  src: string
  alt: string
  className?: string
  label?: string
  loading?: 'eager' | 'lazy'
}

export function ImageWithFallback({ src, alt, className = '', label, loading = 'lazy' }: ImageWithFallbackProps) {
  const [failed, setFailed] = useState(false)

  return (
    <div className={`image-shell ${className}`}>
      <div className="image-fallback" aria-hidden="true">
        <span>{label ?? 'KKGT agricultural image'}</span>
      </div>
      {!failed && (
        <img
          src={src}
          alt={alt}
          loading={loading}
          onError={() => setFailed(true)}
        />
      )}
    </div>
  )
}
