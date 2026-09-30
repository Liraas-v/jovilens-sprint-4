export const LIMITE_HISTORICO = 20

function itemValido(item) {
  return (
    item !== null &&
    typeof item === 'object' &&
    typeof item.id === 'string' &&
    typeof item.cena === 'string' &&
    typeof item.modo === 'string' &&
    Number.isFinite(item.confianca) &&
    Number.isFinite(item.tempoSegundos) &&
    typeof item.criadoEm === 'string' &&
    !Number.isNaN(Date.parse(item.criadoEm))
  )
}

// Tudo que vem do localStorage é tratado como não confiável: se não for uma
// lista, vira lista vazia; itens com campo faltando ou de tipo errado saem.
export function sanearHistorico(bruto) {
  if (!Array.isArray(bruto)) return []

  return bruto.filter(itemValido).slice(0, LIMITE_HISTORICO)
}

// O mais novo vai na frente; passou do limite, o mais antigo sai.
export function adicionarAoHistorico(historico, deteccao) {
  return [deteccao, ...historico].slice(0, LIMITE_HISTORICO)
}

export function estatisticas(historico) {
  const total = historico.length

  if (total === 0) {
    return { total: 0, mediaConfianca: 0, tempoMedio: 0, modoMaisFrequente: null }
  }

  const somaConfianca = historico.reduce((soma, item) => soma + item.confianca, 0)
  const somaTempo = historico.reduce((soma, item) => soma + item.tempoSegundos, 0)

  const contagem = {}
  for (const item of historico) {
    contagem[item.modo] = (contagem[item.modo] ?? 0) + 1
  }
  const maior = Math.max(...Object.values(contagem))
  // Em empate fica o modo que apareceu primeiro na lista (o mais recente).
  const modoMaisFrequente = Object.keys(contagem).find((modo) => contagem[modo] === maior)

  return {
    total,
    mediaConfianca: Math.round(somaConfianca / total),
    tempoMedio: Math.round((somaTempo / total) * 10) / 10,
    modoMaisFrequente,
  }
}
