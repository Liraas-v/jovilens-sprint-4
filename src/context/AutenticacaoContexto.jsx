import { createContext, useState } from 'react'

import { CREDENCIAIS_TESTE } from '../constants/credenciais'
import { credenciaisValidas } from '../utils/autenticacao'
import { gravarSessao, lerSessao, limparSessao } from '../utils/sessao'

export const AutenticacaoContexto = createContext(null)

export function AutenticacaoProvedor({ children }) {
  // Lê a sessão uma vez, no primeiro render, para não piscar deslogado.
  const [usuario, setUsuario] = useState(() => lerSessao())

  function entrar(nome, senha) {
    if (!credenciaisValidas(nome, senha)) return false

    gravarSessao(CREDENCIAIS_TESTE.usuario)
    setUsuario(CREDENCIAIS_TESTE.usuario)
    return true
  }

  function sair() {
    limparSessao()
    setUsuario(null)
  }

  return (
    <AutenticacaoContexto.Provider value={{ usuario, entrar, sair }}>
      {children}
    </AutenticacaoContexto.Provider>
  )
}
