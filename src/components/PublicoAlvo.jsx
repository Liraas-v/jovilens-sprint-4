import { CONTEXTOS } from '../constants/conteudo'
import { IMAGENS } from '../constants/imagens'
import Foto from './Foto'
import Secao from './Secao'

function PublicoAlvo() {
  return (
    <Secao
      id="publico-alvo"
      titulo="Público-Alvo"
      introducao="Estudantes full-time, que dividem o dia entre estudo, vida social e autoexpressão e usam a câmera do celular o tempo todo, quase sempre no modo automático."
    >
      <ul className="grid gap-4 md:grid-cols-2">
        {CONTEXTOS.map((contexto) => (
          <li key={contexto.titulo}>
            <article className="grid h-full overflow-hidden rounded-3xl bg-card sm:grid-cols-[2fr_3fr]">
              {/* alt vazio: a foto é decorativa, o título e o texto ao lado já descrevem o contexto */}
              <Foto
                imagem={IMAGENS[contexto.imagem]}
                alt=""
                tamanhos="(min-width: 640px) 240px, 100vw"
                className="h-40 w-full object-cover sm:h-full"
              />
              <div className="p-6">
                <h3 className="font-titulo text-xl font-medium">{contexto.titulo}</h3>
                <p className="mt-2 text-muted">{contexto.descricao}</p>
              </div>
            </article>
          </li>
        ))}
      </ul>
    </Secao>
  )
}

export default PublicoAlvo
