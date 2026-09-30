// Simulação local da detecção de cena do JoviLens, só com Math: nenhuma
// chamada a serviço externo. O gerador de números (`aleatorio`) e a data
// (`agora`) entram por parâmetro para dar para verificar sem depender de sorte.
export function gerarDeteccao(cenas, aleatorio = Math.random, agora = new Date()) {
  // aleatorio() dá [0, 1); vezes o tamanho da lista e truncado com
  // Math.floor vira um índice válido.
  const cena = cenas[Math.floor(aleatorio() * cenas.length)]

  // Confiança entre 60% e 100%, arredondada para inteiro.
  const confianca = Math.round(aleatorio() * 40 + 60)

  // Tempo entre 0,4 s e 1,5 s com uma casa decimal.
  const tempoSegundos = Math.round((aleatorio() * 1.1 + 0.4) * 10) / 10

  return {
    id: `${agora.getTime()}-${Math.floor(aleatorio() * 1_000_000)}`,
    cena: cena.id,
    modo: cena.modo,
    confianca,
    tempoSegundos,
    criadoEm: agora.toISOString(),
  }
}
