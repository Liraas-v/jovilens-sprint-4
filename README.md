# JoviLens

Landing page e protótipo da câmera **JoviLens**, projeto do Challenge FIAP x JOVI 2026 (Sprint 4, entrega conjunta de Web Development e Front-End Design). O JoviLens é uma câmera inteligente que lê a cena antes do clique, sugere o modo ideal e deixa a decisão final com o usuário.

- **Deploy na Vercel:** https://jovilens-sprint-4.vercel.app/
- **Repositório:** https://github.com/Liraas-v/jovilens-sprint-4

## Tecnologias

- [React](https://react.dev/) 19 (componentes funcionais, props e hooks)
- [React Router](https://reactrouter.com/) 7 (rotas públicas e privada)
- [Tailwind CSS](https://tailwindcss.com/) 4
- [Vite](https://vite.dev/) 8 (servidor de desenvolvimento e build)
- API pública [Open-Meteo](https://open-meteo.com/) (clima de São Paulo, sem chave de acesso)
- Deploy: Git + [Vercel](https://vercel.com/)

## Como instalar

Pré-requisito: **Node.js 20.19 ou superior** (ou 22.12 ou superior) e npm.

```bash
git clone https://github.com/Liraas-v/jovilens-sprint-4.git
cd jovilens-sprint-4
npm install
```

Se o projeto veio do arquivo `.zip`, basta entrar na pasta descompactada e rodar `npm install`.

## Como executar

```bash
npm run dev
```

O site abre em `http://localhost:5173`. Outros comandos:

```bash
npm run build     # gera a versão de produção na pasta dist
npm run preview   # serve a versão de produção localmente
```

**Servidores:** o projeto não tem back-end. Tudo roda no navegador; a única chamada externa é à API pública do Open-Meteo, que não exige cadastro nem chave.

## Acesso de teste (rota privada)

A página **Histórico** (`/historico`) é privada e pede login. A autenticação é simulada, sem back-end, e as credenciais também aparecem na própria tela de login:

| Campo   | Valor               |
| ------- | ------------------- |
| Usuário | `equipeJoviLens`    |
| Senha   | `JoviLensFiap1ESPU` |

## Como testar

1. Abra a página inicial e vá até **A Solução**, no bloco **Teste na prática**.
2. O cartão **Clima contextual** mostra o clima real de São Paulo e o modo de câmera sugerido a partir dele.
3. No **Simulador de detecção**, clique em **Simular detecção** algumas vezes: cada clique sorteia uma cena, mostra o modo escolhido, a confiança e o tempo, e guarda o resultado.
4. Clique em **Entrar** (ou em **Histórico**, que redireciona para o login), use o acesso de teste acima e veja o **Histórico** com as estatísticas e a lista das simulações.
5. Use o botão **Tema claro/escuro** no cabeçalho. A escolha fica guardada no navegador.
6. Reduza a janela (ou abra no celular) para conferir o layout em Desktop, Tablet e Mobile.

O histórico e o tema ficam salvos no `localStorage`, ou seja, somente no navegador de quem usa.

## Requisitos do desafio e onde estão

| Requisito                             | Onde                                                                                                  |
| ------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| Componentização e props               | `src/components/` (cabeçalho, rodapé, seções, cartões); os dados descem por props                     |
| Rotas públicas e privada              | `src/App.jsx` e `src/components/RotaPrivada.jsx` (`/`, `/login` públicas; `/historico` privada)        |
| Hooks nativos                         | `useState`, `useEffect`, `useContext` e `createContext` em hooks, contexto e componentes              |
| Hooks customizados                    | `src/hooks/`: `useAuth`, `useTema`, `useClimaContextual`, `useHistoricoDeteccoes`, `useRolarParaHash` |
| Tailwind CSS                          | Toda a estilização; tokens de cor e fonte em `src/styles/global.css`                                  |
| Responsividade                        | Desktop, Tablet e Mobile, com menu recolhível no celular                                              |
| Consumo de API                        | `src/hooks/useClimaContextual.js` e `src/utils/clima.js` (Open-Meteo)                                 |
| `localStorage` e operações com `Math` | Sessão, tema e histórico; sorteio, arredondamento e estatísticas em `src/utils/`                      |
| Seções da landing                     | A Solução, Público-Alvo, Galeria, Nossa Equipe e Contato                                              |
| Deploy                                | Git + Vercel (link no topo)                                                                           |

## Uso de inteligência artificial no projeto

A inteligência artificial foi utilizada como apoio na implementação do Tailwind CSS e no consumo da API externa.

## Estrutura do projeto

```
src/
├── components/   componentes de tela (Cabecalho, Rodape, Hero, seções, Simulador, Clima...)
├── pages/        páginas por rota (Inicio, Login, Historico, NaoEncontrada)
├── hooks/        hooks customizados
├── context/      contexto de autenticação
├── utils/        lógica pura (sorteio, estatísticas, validação, storage, clima)
├── constants/    textos, imagens e dados fixos
└── styles/       Tailwind e tokens de tema
```

## Contato

O e-mail que aparece na seção Contato do site, `contato.jovilens@gmail.com`, é **fictício**: foi criado para a apresentação do projeto e não tem caixa de entrada monitorada. O formulário do site não envia nada sozinho, ele apenas abre o aplicativo de e-mail do visitante com a mensagem pronta.

## Créditos das imagens

A foto do celular JOVI V70 5G exibida no topo da página é uma imagem oficial da JOVI (https://www.jovimobile.com/br/products/v70-5g), usada apenas neste trabalho acadêmico e sempre com o crédito ao lado.

## Integrantes

- Henrique Lira da Silva Costa (RM571009)
- Lucas de Abreu Latuf (RM570068)
- Lucas Cardoso Franco (RM571430)

Turma 1ESPU, Engenharia de Software, FIAP.
