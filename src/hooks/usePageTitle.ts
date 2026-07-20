import { useEffect } from 'react'

export function usePageTitle(title: string, description?: string) {
  useEffect(() => {
    document.title = `${title} | KKGT Import Export`
    if (description) {
      const meta = document.querySelector('meta[name="description"]')
      meta?.setAttribute('content', description)
    }
  }, [title, description])
}
