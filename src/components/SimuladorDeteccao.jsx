import { useState } from 'react'
import { Link } from 'react-router-dom'

import { CENAS } from '../constants/conteudo'
import { IMAGENS } from '../constants/imagens'
import { useHistoricoDeteccoes } from '../hooks/useHistoricoDeteccoes'
import { gerarDeteccao } from '../utils/simulador'
import Foto from './Foto'

function SimuladorDeteccao() {
  const { adicionar } = useHistoricoDeteccoes()
  const [ultima, setUltima] = useState(null)

  function simular() {
    const deteccao = gerarDeteccao(CENAS)
    setUltima(deteccao)
    adicionar(deteccao)
  }

  const cena = ultima ? CENAS.find((c) => c.id === ultima.cena) : null

  return (
    <article className="rounded-3xl bg-card p-6">
      <h3 className="font-titulo text-xl font-medium">Simulador de detecção</h3>
      <p className="mt-1 text-sm text-muted">
        Uma simulação: sorteia uma cena e mostra o que o JoviLens escolheria. Não usa a câmera nem
        envia nada.
      </p>

      <button
        type="button"
        onClick={simular}
        className="mt-4 rounded-full bg-acao px-6 py-2.5 font-semibold text-acao-texto"
      >
        Simular detecção
      </button>

      <div aria-live="polite" className="mt-4">
        {ultima && cena && (
          <div className="grid gap-4 sm:grid-cols-[1fr_1.4fr]">
            <Foto
              imagem={IMAGENS[cena.id]}
              tamanhos="(min-width: 640px) 200px, 100vw"
              className="aspect-[3/2] w-full rounded-2xl object-cover"
            />
            <div>
              <p className="text-sm text-muted">{cena.rotulo}</p>
              <p className="font-titulo text-2xl font-medium text-acao">Modo {ultima.modo}</p>
              <p className="mt-2 text-sm">
                Confiança: <strong>{ultima.confianca}%</strong>
              </p>
              {/* Único style inline: a largura muda a cada sorteio e o Tailwind não gera classe dinâmica */}
              <div className="mt-1 h-2 overflow-hidden rounded-full bg-bg2" aria-hidden="true">
                <div className="h-full bg-acao" style={{ width: `${ultima.confianca}%` }} />
              </div>
              <p className="mt-2 text-sm">
                Detectado em <strong>{ultima.tempoSegundos.toString().replace('.', ',')} s</strong>
              </p>
            </div>
          </div>
        )}
      </div>

      <p className="mt-4 text-sm text-muted">
        Cada simulação fica no{' '}
        <Link to="/historico" className="font-semibold text-acao underline">
          histórico
        </Link>{' '}
        (área que pede login).
      </p>
    </article>
  )
}

export default SimuladorDeteccao
