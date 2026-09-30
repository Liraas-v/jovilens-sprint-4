import { useState } from 'react'
import { Link } from 'react-router-dom'

import Foto from '../components/Foto'
import { CENAS } from '../constants/conteudo'
import { IMAGENS } from '../constants/imagens'
import { useHistoricoDeteccoes } from '../hooks/useHistoricoDeteccoes'
import { LIMITE_HISTORICO, estatisticas } from '../utils/historico'

function formatarData(iso) {
  return new Date(iso).toLocaleString('pt-BR', { dateStyle: 'short', timeStyle: 'medium' })
}

function Historico() {
  const { historico, limpar } = useHistoricoDeteccoes()
  const [confirmando, setConfirmando] = useState(false)
  const resumo = estatisticas(historico)

  // Dois cliques para apagar: o primeiro só pede a confirmação.
  function aoLimpar() {
    if (!confirmando) {
      setConfirmando(true)
      return
    }
    limpar()
    setConfirmando(false)
  }

  return (
    <section className="mx-auto max-w-6xl px-4 py-16">
      <h1 className="font-titulo text-4xl font-medium">Histórico de detecções</h1>
      <p className="mt-3 max-w-2xl text-muted">
        As simulações que você fez na página inicial. Ficam guardadas só neste navegador (até{' '}
        {LIMITE_HISTORICO}) e não são enviadas a lugar nenhum.
      </p>

      {historico.length === 0 ? (
        <div className="mt-8 rounded-3xl bg-card p-8">
          <p className="font-semibold">Nenhuma simulação ainda.</p>
          <p className="mt-2 text-muted">
            Vá até o simulador de detecção e clique em "Simular detecção" para gerar a primeira.
          </p>
          <Link
            to={{ pathname: '/', hash: '#solucao' }}
            className="mt-5 inline-block rounded-full bg-acao px-6 py-2.5 font-semibold text-acao-texto"
          >
            Ir para o simulador
          </Link>
        </div>
      ) : (
        <>
          <dl className="mt-8 grid gap-4 sm:grid-cols-3">
            <div className="rounded-3xl bg-card p-6">
              <dt className="text-sm text-muted">Confiança média</dt>
              <dd className="mt-1 font-titulo text-4xl font-medium">{resumo.mediaConfianca}%</dd>
            </div>
            <div className="rounded-3xl bg-card p-6">
              <dt className="text-sm text-muted">Tempo médio</dt>
              <dd className="mt-1 font-titulo text-4xl font-medium">
                {resumo.tempoMedio.toString().replace('.', ',')} s
              </dd>
            </div>
            <div className="rounded-3xl bg-card p-6">
              <dt className="text-sm text-muted">Modo mais frequente</dt>
              <dd className="mt-1 font-titulo text-4xl font-medium">{resumo.modoMaisFrequente}</dd>
            </div>
          </dl>

          <div className="mt-8 flex items-center justify-between gap-4">
            <p className="text-sm text-muted">
              {resumo.total} {resumo.total === 1 ? 'simulação' : 'simulações'}
            </p>
            <button
              type="button"
              onClick={aoLimpar}
              className="rounded-full border border-borda px-5 py-2 text-sm font-semibold hover:text-acao"
            >
              {confirmando ? 'Confirmar: apagar tudo' : 'Limpar histórico'}
            </button>
          </div>

          <ol className="mt-4 grid gap-3">
            {historico.map((item) => {
              const cena = CENAS.find((c) => c.id === item.cena)
              const imagem = IMAGENS[item.cena]

              return (
                <li
                  key={item.id}
                  className="grid items-center gap-4 rounded-3xl bg-card p-4 sm:grid-cols-[96px_1fr_auto]"
                >
                  {imagem ? (
                    <Foto
                      imagem={imagem}
                      alt=""
                      tamanhos="96px"
                      className="aspect-[3/2] w-24 rounded-xl object-cover"
                    />
                  ) : (
                    <div className="aspect-[3/2] w-24 rounded-xl bg-bg2" />
                  )}
                  <div>
                    <p className="font-semibold">
                      Modo {item.modo}
                      <span className="font-normal text-muted"> · {cena?.rotulo ?? item.cena}</span>
                    </p>
                    <p className="text-sm text-muted">{formatarData(item.criadoEm)}</p>
                  </div>
                  <p className="text-sm">
                    <strong>{item.confianca}%</strong> em{' '}
                    {item.tempoSegundos.toString().replace('.', ',')} s
                  </p>
                </li>
              )
            })}
          </ol>
        </>
      )}
    </section>
  )
}

export default Historico
