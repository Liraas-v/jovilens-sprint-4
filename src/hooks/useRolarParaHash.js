import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

// O router troca a rota mas não rola até o #id. Aqui: com hash, rola até o
// elemento; sem hash, volta ao topo (como uma página nova).
export function useRolarParaHash() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      document.getElementById(hash.slice(1))?.scrollIntoView()
    } else {
      window.scrollTo(0, 0)
    }
  }, [pathname, hash])
}
