// Manifesto das imagens. `base` + `-<largura>.webp` forma cada arquivo.
// `aplicaria` diz o que o JoviLens faria na cena (não é o EXIF real da foto).
// Fotos tiradas no campus da FIAP, recortadas em 3:2 a partir de originais de 900 px de largura.
const CENA = { larguras: [480, 900], largura: 900, altura: 600 }

export const IMAGENS = {
  // Imagem oficial da JOVI (jovimobile.com/br), recortada só no celular.
  // Usada só neste trabalho acadêmico; o crédito aparece sempre junto da foto.
  joviV70: {
    base: '/img/jovi-v70',
    larguras: [400, 600, 740],
    largura: 740,
    altura: 800,
    alt: 'Traseira lilás do celular JOVI V70 5G, com as duas lentes e o anel da câmera principal de 200 MP',
    credito: 'Imagem: JOVI (V70 5G)',
  },
  sala: {
    ...CENA, base: '/img/sala',
    alt: 'Laboratório de computadores da FIAP com fileiras de monitores e uma tela de projeção recolhida',
    aplicaria: 'Modo Documento · ISO 100 · contraste +40 · nitidez máxima',
  },
  noite: {
    ...CENA, base: '/img/noite',
    alt: 'Salão de convivência da FIAP à noite, com alunos ao fundo e iluminação artificial',
    aplicaria: 'Modo Noite · ISO 3200 · 1/15 s · redução de ruído',
  },
  campus: {
    ...CENA, base: '/img/campus',
    alt: 'Corredor da FIAP com mural de pôsteres coloridos e janelas com a luz do dia',
    aplicaria: 'Modo Foto · a câmera escolhe sozinha, sem parar o momento',
  },
  idioma: {
    ...CENA, base: '/img/idioma',
    alt: 'Parede da FIAP com a frase em inglês Let’s rock the future',
    aplicaria: 'Modo Tradução · texto nítido para ler depois',
  },
  entrada: {
    ...CENA, base: '/img/entrada',
    alt: 'Entrada da FIAP à noite, com o letreiro vermelho aceso e uma pessoa entrando',
    aplicaria: 'Modo Noite · letreiro aceso sem estourar · redução de ruído',
  },
}
