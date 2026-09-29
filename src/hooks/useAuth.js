import { useContext } from 'react'

import { AutenticacaoContexto } from '../context/AutenticacaoContexto'

// Único jeito de os componentes falarem com a autenticação: assim a tela
// não sabe se a sessão vive em localStorage, cookie ou API.
export function useAuth() {
  const contexto = useContext(AutenticacaoContexto)

  if (contexto === null) {
    throw new Error('useAuth precisa estar dentro de AutenticacaoProvedor')
  }

  return contexto
}
