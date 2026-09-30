export const LIMITE_MENSAGEM = 1000

// Monta o link mailto: com assunto e corpo. encodeURIComponent protege &, #,
// %, acentos e quebras de linha, que quebrariam a URL se fossem crus. O
// corte em LIMITE_MENSAGEM evita estourar o tamanho que os apps de e-mail aceitam.
export function montarMailto(email, nome, mensagem) {
  const assunto = `Contato pelo site JoviLens - ${nome.trim()}`
  const corpo = `${mensagem.trim().slice(0, LIMITE_MENSAGEM)}\n\n${nome.trim()}`

  return `mailto:${email}?subject=${encodeURIComponent(assunto)}&body=${encodeURIComponent(corpo)}`
}
