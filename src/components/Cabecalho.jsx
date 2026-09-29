import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import { ITENS_MENU } from '../constants/projeto'
import { useAuth } from '../hooks/useAuth'

const estiloLink =
  'block rounded px-3 py-2 text-sm font-semibold text-texto hover:text-acao'

function Cabecalho() {
  const [menuAberto, setMenuAberto] = useState(false)
  const { usuario, sair } = useAuth()
  const navegar = useNavigate()

  function fecharMenu() {
    setMenuAberto(false)
  }

  function aoSair() {
    sair()
    fecharMenu()
    navegar('/')
  }

  return (
    <header className="sticky top-0 z-40 border-b border-borda bg-card">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link to="/" onClick={fecharMenu} className="font-titulo text-xl font-extrabold">
          Jovi<span className="text-acao">Lens</span>
        </Link>

        <button
          type="button"
          className="rounded border border-borda px-3 py-1.5 text-sm font-semibold md:hidden"
          aria-expanded={menuAberto}
          aria-controls="menu-principal"
          onClick={() => setMenuAberto(!menuAberto)}
        >
          {menuAberto ? 'Fechar' : 'Menu'}
        </button>

        <nav
          id="menu-principal"
          aria-label="Principal"
          className={`${menuAberto ? 'flex' : 'hidden'} absolute left-0 right-0 top-full flex-col gap-1 border-b border-borda bg-card px-4 py-3 md:static md:flex md:flex-row md:items-center md:gap-1 md:border-0 md:p-0`}
        >
          {ITENS_MENU.map((item) => (
            <Link
              key={item.hash}
              to={{ pathname: '/', hash: item.hash }}
              onClick={fecharMenu}
              className={estiloLink}
            >
              {item.rotulo}
            </Link>
          ))}

          {usuario ? (
            <>
              <Link to="/historico" onClick={fecharMenu} className={estiloLink}>
                Histórico
              </Link>
              <button
                type="button"
                onClick={aoSair}
                className="rounded border border-borda px-3 py-2 text-left text-sm font-semibold hover:text-acao md:text-center"
              >
                Sair
              </button>
            </>
          ) : (
            <Link
              to="/login"
              onClick={fecharMenu}
              className="rounded bg-acao px-3 py-2 text-sm font-semibold text-acao-texto"
            >
              Entrar
            </Link>
          )}
        </nav>
      </div>
    </header>
  )
}

export default Cabecalho
