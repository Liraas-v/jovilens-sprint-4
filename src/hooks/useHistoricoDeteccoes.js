import { useEffect, useState } from 'react'

import { gravarJson, lerJson } from '../utils/armazenamento'
import { adicionarAoHistorico, sanearHistorico } from '../utils/historico'

const CHAVE_HISTORICO = 'jovilens:historico'

// Estado do histórico + persistência no localStorage. A regra de "o que é
// um item válido" e "quantos cabem" mora em utils/historico.js.
export function useHistoricoDeteccoes() {
  const [historico, setHistorico] = useState(() => sanearHistorico(lerJson(CHAVE_HISTORICO, [])))

  // Grava sempre que a lista muda, a partir do estado já atualizado.
  useEffect(() => {
    gravarJson(CHAVE_HISTORICO, historico)
  }, [historico])

  // Atualização funcional: cada chamada parte da lista mais recente, então
  // cliques seguidos no mesmo ciclo não sobrescrevem um ao outro.
  function adicionar(deteccao) {
    setHistorico((atual) => adicionarAoHistorico(atual, deteccao))
  }

  function limpar() {
    setHistorico([])
  }

  return { historico, adicionar, limpar }
}
