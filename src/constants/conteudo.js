// Conteúdo estático da landing, separado dos componentes. Os textos vêm do
// protótipo do JoviLens (Sprints 1 a 3).

export const NUMEROS = [
  { valor: '12', rotulo: 'modos de câmera' },
  { valor: '~1,5 s', rotulo: 'para ler a cena' },
  { valor: '0', rotulo: 'imagens enviadas para fora do aparelho' },
]

export const RECURSOS = [
  { id: 'deteccao', titulo: 'A câmera lê a cena antes do clique',
    descricao: 'Ela reconhece lousa, texto, rosto, comida, paisagem e ambiente escuro, escolhe entre os 12 modos e mostra o quanto tem de certeza.' },
  { id: 'documento', titulo: 'Lousa e apostila que dá para ler',
    descricao: 'No Modo Documento a câmera fixa ISO 100, sobe o contraste em +40 e leva a nitidez ao máximo.' },
  { id: 'noite', titulo: 'Biblioteca e campus à noite',
    descricao: 'O Modo Noite usa ISO 3200 e 1/15 s com redução de ruído, para a imagem não estourar.' },
  { id: 'sugestao', titulo: 'A IA sugere, você decide',
    descricao: 'Quando ela detecta texto, pergunta se você quer o Modo Documento. Aplicar ou ignorar é sempre escolha sua.' },
  { id: 'analise', titulo: 'A foto recebe nota',
    descricao: 'Depois da captura, a IA dá uma nota de 0 a 100, mostra nitidez, exposição, enquadramento e contraste e sugere o que melhorar na próxima foto.' },
  { id: 'offline', titulo: 'Tudo no aparelho',
    descricao: 'Todo o processamento acontece no dispositivo. Nenhuma imagem ou informação sai do aparelho, alinhado à LGPD.' },
]

export const CONTEXTOS = [
  { titulo: 'Sala de aula', imagem: 'lousa',
    descricao: 'Fotografa lousa, slide e apostila todo dia e precisa do texto legível.' },
  { titulo: 'Biblioteca e restaurante universitário', imagem: 'noite',
    descricao: 'Pouca luz e iluminação artificial, onde a câmera automática comum costuma falhar.' },
  { titulo: 'Eventos no campus', imagem: 'campus',
    descricao: 'Quer registrar o momento com os amigos sem parar para mexer em modo, foco ou exposição.' },
  { titulo: 'Material em outro idioma', imagem: 'idioma',
    descricao: 'Encontra um artigo, placa ou slide em outra língua e precisa capturar com nitidez para entender depois.' },
]

export const FOTOS_GALERIA = ['lousa', 'noite', 'campus', 'idioma', 'retrato']

// `fala` é rascunho: cada integrante reescreve com as próprias palavras.
export const EQUIPE = [
  { nome: 'Henrique Lira da Silva Costa', funcao: 'Back-end e Python',
    fala: 'Cuido do Python e do que não aparece na tela. Gosto de entender como a coisa funciona por dentro.' },
  { nome: 'Lucas de Abreu Latuf', funcao: 'Front-end e Protótipo',
    fala: 'Desenhei o protótipo do JoviLens tela por tela e cuido de como ele parece e se comporta.' },
  { nome: 'Lucas Cardoso Franco', funcao: 'Modelagem, Documentação e Storytelling',
    fala: 'Deixo o projeto organizado no papel antes de ele chegar na tela, e conto a história dele.' },
]

// E-mail fictício da equipe: o projeto não tem caixa de entrada monitorada.
export const CONTATO = { email: 'contato.jovilens@gmail.com' }

// Cenas que o simulador sorteia. `id` é a chave da foto em IMAGENS e `modo`
// é o que o JoviLens escolheria para ela.
export const CENAS = [
  { id: 'lousa', modo: 'Documento', rotulo: 'Lousa em sala de aula' },
  { id: 'noite', modo: 'Noite', rotulo: 'Campus à noite' },
  { id: 'campus', modo: 'Foto', rotulo: 'Encontro no campus' },
  { id: 'idioma', modo: 'Tradução', rotulo: 'Slide em outro idioma' },
  { id: 'retrato', modo: 'Retrato', rotulo: 'Retrato com fundo desfocado' },
]
