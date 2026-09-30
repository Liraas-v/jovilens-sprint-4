// Traduz o clima atual num modo de câmera, na mesma linguagem dos 12 modos
// do JoviLens. É uma sugestão: quem decide é a pessoa.
export function sugerirModoPorClima({ isDay, precipitacao }) {
  if (isDay === 0) {
    return {
      modo: 'Noite',
      motivo: 'Já escureceu em São Paulo. ISO alto e exposição mais longa ajudam a registrar sem estourar a imagem.',
    }
  }

  if (precipitacao > 0) {
    return {
      modo: 'Pro',
      motivo: 'Está chovendo em São Paulo: luz baixa e contraste fraco. No modo Pro você ajusta exposição e balanço de branco.',
    }
  }

  return {
    modo: 'Foto',
    motivo: 'Dia claro e sem chuva em São Paulo. Condição ideal para o modo Foto padrão.',
  }
}
