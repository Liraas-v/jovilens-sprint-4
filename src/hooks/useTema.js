import { useEffect, useState } from 'react'

import { gravarTexto, lerTexto } from '../utils/armazenamento'

const CHAVE_TEMA = 'jovilens:tema'

function temaInicial() {
  const salvo = lerTexto(CHAVE_TEMA)

  if (salvo === 'light' || salvo === 'dark') return salvo

  const sistemaEscuro =
    typeof matchMedia === 'function' && matchMedia('(prefers-color-scheme: dark)').matches

  return sistemaEscuro ? 'dark' : 'light'
}

// Dono do tema: guarda o valor, aplica em <html data-tema> (o global.css troca
// os tokens de cor a partir dele) e persiste só quando há escolha explícita.
// Gravar na primeira visita transformaria a preferência do sistema em escolha
// fixa sem ninguém ter escolhido.
export function useTema() {
  const [tema, setTema] = useState(temaInicial)

  useEffect(() => {
    document.documentElement.setAttribute('data-tema', tema)
  }, [tema])

  function alternarTema() {
    const proximo = tema === 'dark' ? 'light' : 'dark'
    gravarTexto(CHAVE_TEMA, proximo)
    setTema(proximo)
  }

  return { tema, alternarTema }
}
