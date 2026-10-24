import { EQUIPE } from '../constants/conteudo'
import Secao from './Secao'

function Equipe() {
  return (
    <Secao
      id="equipe"
      titulo="Nossa Equipe"
      introducao="Três estudantes da turma 1ESPU de Engenharia de Software da FIAP."
    >
      <ul className="grid gap-4 md:grid-cols-3">
        {EQUIPE.map((integrante) => (
          <li key={integrante.nome}>
            <article className="h-full rounded-3xl bg-card p-6">
              <h3 className="font-titulo text-xl font-medium">{integrante.nome}</h3>
              <p className="mt-1 text-sm font-semibold text-acao">{integrante.funcao}</p>
              <p className="mt-3 text-muted">{integrante.fala}</p>
            </article>
          </li>
        ))}
      </ul>
    </Secao>
  )
}

export default Equipe
