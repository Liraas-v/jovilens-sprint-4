import { Navigate, useLocation } from 'react-router-dom'

import { useAuth } from '../hooks/useAuth'

// Guarda de onde a pessoa veio em state.de para o login devolvê-la lá.
function RotaPrivada({ children }) {
  const { usuario } = useAuth()
  const localizacao = useLocation()

  if (!usuario) {
    return <Navigate to="/login" replace state={{ de: localizacao.pathname }} />
  }

  return children
}

export default RotaPrivada
