// Manifesto das imagens. `base` + `-<largura>.webp` forma cada arquivo.
// `aplicaria` diz o que o JoviLens faria na cena (não é o EXIF real da foto).
// As imagens atuais são provisórias; a Parte 5 troca pelas fotos reais.
const CENA = { larguras: [480, 960, 1600], largura: 1600, altura: 1067 }
const RETRATO = { larguras: [320, 640, 960], largura: 960, altura: 1200 }

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
  lousa: {
    ...CENA, base: '/img/lousa',
    alt: 'Lousa de sala de aula com anotações e fórmulas escritas à mão',
    aplicaria: 'Modo Documento · ISO 100 · contraste +40 · nitidez máxima',
  },
  noite: {
    ...CENA, base: '/img/noite',
    alt: 'Ambiente do campus à noite, com pouca luz e iluminação artificial',
    aplicaria: 'Modo Noite · ISO 3200 · 1/15 s · redução de ruído',
  },
  campus: {
    ...CENA, base: '/img/campus',
    alt: 'Grupo de estudantes reunidos no campus durante o dia',
    aplicaria: 'Modo Foto · a câmera escolhe sozinha, sem parar o momento',
  },
  idioma: {
    ...CENA, base: '/img/idioma',
    alt: 'Slide com texto em inglês visto de perto',
    aplicaria: 'Modo Tradução · texto nítido para ler depois',
  },
  retrato: {
    ...CENA, base: '/img/retrato',
    alt: 'Estudante em primeiro plano com o fundo do campus desfocado',
    aplicaria: 'Modo Retrato · bokeh de IA com desfoque progressivo',
  },
  'equipe-henrique': {
    ...RETRATO, base: '/img/equipe-henrique',
    alt: 'Retrato de Henrique Lira em luz natural',
  },
  'equipe-latuf': {
    ...RETRATO, base: '/img/equipe-latuf',
    alt: 'Retrato de Lucas Latuf em luz natural',
  },
  'equipe-cardoso': {
    ...RETRATO, base: '/img/equipe-cardoso',
    alt: 'Retrato de Lucas Cardoso em luz natural',
  },
}
