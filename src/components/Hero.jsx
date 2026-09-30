import { NUMEROS } from '../constants/conteudo'
import { IMAGENS } from '../constants/imagens'
import Foto from './Foto'

function Hero() {
  return (
    <section aria-labelledby="hero-titulo" className="mx-auto max-w-6xl px-4 pb-8 pt-12 md:pt-20">
      <div className="grid items-center gap-10 lg:grid-cols-2">
        <div>
          <p className="text-sm font-semibold text-acao">Challenge FIAP x JOVI 2026</p>
          <h1
            id="hero-titulo"
            className="mt-3 font-titulo text-4xl font-medium leading-[1.1] md:text-6xl"
          >
            A câmera que lê a cena antes do clique.
          </h1>
          <p className="mt-5 max-w-xl text-lg text-muted">
            O JoviLens entende se você fotografa uma lousa, um rosto ou um ambiente escuro e ajusta
            a câmera sozinho. A IA sugere, você decide.
          </p>
          <a
            href="#solucao"
            className="mt-8 inline-flex items-center gap-3 text-lg font-medium text-texto"
          >
            Conheça a solução
            <span
              aria-hidden="true"
              className="grid size-8 place-items-center rounded-full border border-texto"
            >
              →
            </span>
          </a>
        </div>

        <div className="overflow-hidden rounded-3xl bg-card lg:col-start-2">
          <Foto
            imagem={IMAGENS.lousa}
            prioridade
            tamanhos="(min-width: 1024px) 560px, 100vw"
            className="h-auto w-full"
          />
        </div>
      </div>

      <dl className="mt-12 grid gap-4 sm:grid-cols-3">
        {NUMEROS.map((numero) => (
          <div key={numero.rotulo} className="rounded-3xl bg-card p-6">
            <dt className="text-sm text-muted">{numero.rotulo}</dt>
            <dd className="mt-1 font-titulo text-4xl font-medium">{numero.valor}</dd>
          </div>
        ))}
      </dl>
    </section>
  )
}

export default Hero
