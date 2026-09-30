import { RECURSOS } from '../constants/conteudo'
import Secao from './Secao'

function Solucao() {
  return (
    <Secao
      id="solucao"
      titulo="A Solução"
      introducao="O desafio da JOVI pede repensar a câmera do smartphone. O JoviLens responde com uma IA de contexto que roda no aparelho: reconhece a cena, aplica o modo e os parâmetros ideais e mostra o porquê. A decisão final é sempre do usuário."
    >
      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {RECURSOS.map((recurso) => (
          <li key={recurso.id}>
            <article className="h-full rounded-3xl bg-card p-6">
              <h3 className="font-titulo text-xl font-medium">{recurso.titulo}</h3>
              <p className="mt-2 text-muted">{recurso.descricao}</p>
            </article>
          </li>
        ))}
      </ul>
    </Secao>
  )
}

export default Solucao
