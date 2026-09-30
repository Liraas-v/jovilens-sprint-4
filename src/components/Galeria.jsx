import { FOTOS_GALERIA } from '../constants/conteudo'
import { IMAGENS } from '../constants/imagens'
import Foto from './Foto'
import Secao from './Secao'

// A primeira foto é a principal: ocupa 2 colunas no tablet e 2x2 no desktop,
// e as outras quatro preenchem o resto do grid sem deixar vão.
function Galeria() {
  return (
    <Secao
      id="galeria"
      titulo="Galeria"
      introducao="Cenas do dia a dia do estudante e o que o JoviLens faria em cada uma."
    >
      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {FOTOS_GALERIA.map((chave, indice) => {
          const imagem = IMAGENS[chave]
          const principal = indice === 0

          return (
            <li key={chave} className={principal ? 'sm:col-span-2 lg:row-span-2' : ''}>
              <figure className="flex h-full flex-col overflow-hidden rounded-3xl bg-card">
                <Foto
                  imagem={imagem}
                  tamanhos={principal ? '(min-width: 1024px) 560px, 100vw' : '(min-width: 1024px) 280px, 50vw'}
                  className="aspect-[3/2] w-full flex-1 object-cover"
                />
                <figcaption className="p-4 text-sm text-muted">{imagem.aplicaria}</figcaption>
              </figure>
            </li>
          )
        })}
      </ul>
    </Secao>
  )
}

export default Galeria
