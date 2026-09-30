// localStorage pode estar bloqueado (navegação anônima restrita) ou ter o
// valor alterado à mão. Aqui nada disso derruba a página: leitura falha
// devolve o padrão e escrita falha é ignorada (o dado dura até recarregar).
export function lerJson(chave, padrao) {
  try {
    const bruto = localStorage.getItem(chave)
    return bruto === null ? padrao : JSON.parse(bruto)
  } catch {
    return padrao
  }
}

export function gravarJson(chave, valor) {
  try {
    localStorage.setItem(chave, JSON.stringify(valor))
  } catch {
    // Sem storage disponível, o dado vale só nesta visita.
  }
}

export function lerTexto(chave) {
  try {
    return localStorage.getItem(chave)
  } catch {
    return null
  }
}

export function gravarTexto(chave, valor) {
  try {
    localStorage.setItem(chave, valor)
  } catch {
    // Sem storage disponível, o dado vale só nesta visita.
  }
}
