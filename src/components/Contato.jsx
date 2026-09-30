import { useState } from 'react'

import { CONTATO } from '../constants/conteudo'
import { INTEGRANTES, LINK_REPOSITORIO } from '../constants/projeto'
import { LIMITE_MENSAGEM, montarMailto } from '../utils/contato'
import Secao from './Secao'

const estiloCampo = 'mt-1 w-full rounded-xl border border-borda bg-bg px-3 py-2 text-texto'

function Contato() {
  const [nome, setNome] = useState('')
  const [mensagem, setMensagem] = useState('')
  const [aberto, setAberto] = useState(false)

  function aoEnviar(evento) {
    evento.preventDefault()
    // Sem back-end: o envio é feito pelo app de e-mail do visitante.
    window.location.href = montarMailto(CONTATO.email, nome, mensagem)
    setAberto(true)
  }

  return (
    <Secao
      id="contato"
      titulo="Contato"
      introducao="Quer saber mais sobre o JoviLens ou falar com a equipe? Escreva abaixo ou use os canais ao lado."
    >
      <div className="grid gap-4 md:grid-cols-2">
        <form onSubmit={aoEnviar} aria-label="Formulário de contato" className="rounded-3xl bg-card p-6">
          <label htmlFor="contato-nome" className="block text-sm font-semibold">
            Nome
          </label>
          <input
            id="contato-nome"
            type="text"
            required
            autoComplete="name"
            value={nome}
            onChange={(evento) => setNome(evento.target.value)}
            className={estiloCampo}
          />

          <label htmlFor="contato-mensagem" className="mt-4 block text-sm font-semibold">
            Mensagem
          </label>
          <textarea
            id="contato-mensagem"
            required
            rows={5}
            maxLength={LIMITE_MENSAGEM}
            value={mensagem}
            onChange={(evento) => setMensagem(evento.target.value)}
            className={estiloCampo}
          />

          <button
            type="submit"
            className="mt-5 rounded-full bg-acao px-6 py-2.5 font-semibold text-acao-texto"
          >
            Escrever por e-mail
          </button>

          {aberto && (
            <p role="status" className="mt-4 text-sm text-muted">
              Abrimos o seu app de e-mail com a mensagem pronta. Falta só enviar por lá.
            </p>
          )}
        </form>

        <address className="rounded-3xl bg-bg2 p-6 not-italic">
          <h3 className="font-titulo text-xl font-medium">Outros canais</h3>
          <dl className="mt-4 space-y-4 text-sm">
            <div>
              <dt className="font-semibold">E-mail da equipe</dt>
              <dd>
                <a href={`mailto:${CONTATO.email}`} className="break-words text-acao underline">
                  {CONTATO.email}
                </a>
              </dd>
            </div>
            <div>
              <dt className="font-semibold">Repositório</dt>
              <dd>
                <a
                  href={LINK_REPOSITORIO}
                  target="_blank"
                  rel="noreferrer"
                  className="break-words text-acao underline"
                >
                  github.com/Liraas-v/jovilens-sprint-4
                </a>
              </dd>
            </div>
            <div>
              <dt className="font-semibold">Integrantes</dt>
              <dd className="text-muted">
                {INTEGRANTES.map((nomeIntegrante) => (
                  <span key={nomeIntegrante} className="block">
                    {nomeIntegrante}
                  </span>
                ))}
              </dd>
            </div>
          </dl>
        </address>
      </div>
    </Secao>
  )
}

export default Contato
