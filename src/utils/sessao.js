import { CREDENCIAIS_TESTE } from '../constants/credenciais.js'

const CHAVE = 'jovilens:sessao'

// localStorage pode estar bloqueado (navegação anônima restrita) ou ter o
// valor mexido à mão. Em qualquer dos dois casos a resposta é "sem sessão".
export function lerSessao() {
  try {
    const valor = localStorage.getItem(CHAVE)
    return valor === CREDENCIAIS_TESTE.usuario ? valor : null
  } catch {
    return null
  }
}

export function gravarSessao(usuario) {
  try {
    localStorage.setItem(CHAVE, usuario)
  } catch {
    // Sem storage a sessão só dura até recarregar a página.
  }
}

export function limparSessao() {
  try {
    localStorage.removeItem(CHAVE)
  } catch {
    // Nada a limpar se o storage não está disponível.
  }
}
