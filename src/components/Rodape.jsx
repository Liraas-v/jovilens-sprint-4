import { Link } from 'react-router-dom'

import {
  INTEGRANTES,
  ITENS_MENU,
  LINK_REPOSITORIO,
  NOME_CHALLENGE,
} from '../constants/projeto'

const estiloTitulo = 'font-titulo text-sm font-extrabold uppercase tracking-wide'

function Rodape() {
  return (
    <footer className="mt-16 border-t border-borda bg-card">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 sm:grid-cols-2 lg:grid-cols-3">
        <section>
          <p className="font-titulo text-xl font-extrabold">
            Jovi<span className="text-acao">Lens</span>
          </p>
          <p className="mt-2 max-w-xs text-sm text-muted">
            A câmera que lê a cena. Projeto da turma 1ESPU, Engenharia de Software, FIAP.
          </p>
        </section>

        <nav aria-label="Rodapé">
          <h2 className={estiloTitulo}>Navegue</h2>
          <ul className="mt-3 space-y-2 text-sm">
            {ITENS_MENU.map((item) => (
              <li key={item.hash}>
                <Link to={{ pathname: '/', hash: item.hash }} className="text-muted hover:text-acao">
                  {item.rotulo}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <section>
          <h2 className={estiloTitulo}>Equipe</h2>
          <ul className="mt-3 space-y-2 text-sm text-muted">
            {INTEGRANTES.map((nome) => (
              <li key={nome}>{nome}</li>
            ))}
          </ul>
        </section>
      </div>

      <div className="border-t border-borda">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-4 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>{NOME_CHALLENGE}</p>
          <a
            href={LINK_REPOSITORIO}
            target="_blank"
            rel="noreferrer"
            aria-label="Código do projeto no GitHub"
            title="Código no GitHub"
            className="text-muted hover:text-acao"
          >
            {/* Ícone decorativo: o nome acessível do link vem do aria-label */}
            <svg viewBox="0 0 16 16" aria-hidden="true" className="size-6 fill-current">
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Rodape
