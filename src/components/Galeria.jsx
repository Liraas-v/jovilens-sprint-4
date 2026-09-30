import { FOTOS_GALERIA } from '../constants/conteudo'
import { IMAGENS } from '../constants/imagens'
import Foto from './Foto'
import Secao from './Secao'

function Galeria() {
  return (
    <Secao
      id="galeria"
      titulo="Galeria"
      introducao="Cenas do dia a dia do estudante e o que o JoviLens faria em cada uma."
    >
      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {FOTOS_GALERIA.map((chave, indice) => {
          const imagem = IMAGENS[chave]

          return (
            <li key={chave} className={indice === 0 ? 'lg:col-span-2' : ''}>
              <figure className="h-full overflow-hidden rounded-3xl bg-card">
                <Foto
                  imagem={imagem}
                  tamanhos={indice === 0 ? '(min-width: 1024px) 760px, 100vw' : '(min-width: 1024px) 370px, 100vw'}
                  className="aspect-[3/2] w-full object-cover"
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
