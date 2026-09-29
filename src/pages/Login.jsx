import { useState } from 'react'
import { Navigate, useLocation } from 'react-router-dom'

import { CREDENCIAIS_TESTE } from '../constants/credenciais'
import { useAuth } from '../hooks/useAuth'

const estiloCampo =
  'mt-1 w-full rounded border border-borda bg-bg px-3 py-2 text-texto'

function Login() {
  const { usuario, entrar } = useAuth()
  const localizacao = useLocation()
  const [campoUsuario, setCampoUsuario] = useState('')
  const [campoSenha, setCampoSenha] = useState('')
  const [erro, setErro] = useState('')

  // Quem já está logado, ou acabou de entrar, segue para onde queria ir.
  if (usuario) {
    return <Navigate to={localizacao.state?.de ?? '/historico'} replace />
  }

  function aoEnviar(evento) {
    evento.preventDefault()

    if (!entrar(campoUsuario, campoSenha)) {
      setErro('Usuário ou senha incorretos. Confira o acesso de teste ao lado.')
    }
  }

  return (
    <section className="mx-auto grid max-w-4xl gap-8 px-4 py-16 md:grid-cols-2">
      <form onSubmit={aoEnviar} noValidate>
        <h1 className="font-titulo text-3xl font-extrabold">Entrar</h1>

        <label htmlFor="usuario" className="mt-6 block text-sm font-semibold">
          Usuário
        </label>
        <input
          id="usuario"
          type="text"
          autoComplete="username"
          value={campoUsuario}
          onChange={(evento) => setCampoUsuario(evento.target.value)}
          className={estiloCampo}
        />

        <label htmlFor="senha" className="mt-4 block text-sm font-semibold">
          Senha
        </label>
        <input
          id="senha"
          type="password"
          autoComplete="current-password"
          value={campoSenha}
          onChange={(evento) => setCampoSenha(evento.target.value)}
          className={estiloCampo}
        />

        {erro && (
          <p role="alert" className="mt-4 text-sm font-semibold text-erro">
            {erro}
          </p>
        )}

        <button
          type="submit"
          className="mt-6 rounded bg-acao px-5 py-2.5 font-semibold text-acao-texto"
        >
          Entrar
        </button>
      </form>

      <aside className="h-fit rounded border border-borda bg-card p-5">
        <h2 className="font-titulo text-lg font-extrabold">Acesso de teste</h2>
        <p className="mt-2 text-sm text-muted">
          Este projeto não tem back-end. Use as credenciais abaixo para abrir a área privada.
        </p>
        <dl className="mt-4 space-y-2 text-sm">
          <div>
            <dt className="font-semibold">Usuário</dt>
            <dd className="font-mono">{CREDENCIAIS_TESTE.usuario}</dd>
          </div>
          <div>
            <dt className="font-semibold">Senha</dt>
            <dd className="font-mono">{CREDENCIAIS_TESTE.senha}</dd>
          </div>
        </dl>
      </aside>
    </section>
  )
}

export default Login
