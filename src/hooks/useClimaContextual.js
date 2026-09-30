import { useEffect, useState } from 'react'

import { TEMPO_LIMITE_MS, URL_CLIMA, interpretarResposta } from '../utils/clima'
import { sugerirModoPorClima } from '../utils/sugestaoClima'

// Busca o clima ao montar e a cada "tentar de novo". Cuida de carregando,
// erro, tempo limite e de não atualizar estado depois de desmontar; o
// componente só lê o resultado.
export function useClimaContextual() {
  const [clima, setClima] = useState(null)
  const [carregando, setCarregando] = useState(true)
  const [erro, setErro] = useState(null)
  const [tentativa, setTentativa] = useState(0)

  useEffect(() => {
    let ativo = true
    const controlador = new AbortController()
    const limite = setTimeout(() => controlador.abort(), TEMPO_LIMITE_MS)

    setCarregando(true)
    setErro(null)

    fetch(URL_CLIMA, { signal: controlador.signal })
      .then((resposta) => {
        if (!resposta.ok) throw new Error(`A API respondeu ${resposta.status}`)
        return resposta.json()
      })
      .then((dados) => {
        if (ativo) setClima(interpretarResposta(dados))
      })
      .catch(() => {
        if (ativo) setErro('Não deu para buscar o clima agora.')
      })
      .finally(() => {
        clearTimeout(limite)
        if (ativo) setCarregando(false)
      })

    return () => {
      ativo = false
      clearTimeout(limite)
      controlador.abort()
    }
  }, [tentativa])

  const sugestao = clima ? sugerirModoPorClima(clima) : null

  function tentarDeNovo() {
    setTentativa((atual) => atual + 1)
  }

  return { clima, sugestao, carregando, erro, tentarDeNovo }
}
