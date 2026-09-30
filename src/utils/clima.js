// Coordenadas fixas de São Paulo: pegar a localização do visitante seria
// escopo de um app de verdade, não desta landing.
const LATITUDE = -23.55
const LONGITUDE = -46.63

export const URL_CLIMA =
  `https://api.open-meteo.com/v1/forecast?latitude=${LATITUDE}&longitude=${LONGITUDE}` +
  '&current=temperature_2m,is_day,precipitation'

export const TEMPO_LIMITE_MS = 8000

// A resposta vem de fora, então só é aceita se tiver o formato esperado.
// Qualquer coisa diferente vira erro em vez de um NaN na tela.
export function interpretarResposta(dados) {
  const atual = dados?.current

  if (
    !atual ||
    !Number.isFinite(atual.temperature_2m) ||
    !Number.isFinite(atual.precipitation) ||
    (atual.is_day !== 0 && atual.is_day !== 1)
  ) {
    throw new Error('Resposta do clima em formato inesperado')
  }

  return {
    temperatura: atual.temperature_2m,
    isDay: atual.is_day,
    precipitacao: atual.precipitation,
  }
}
