import { useClimaContextual } from '../hooks/useClimaContextual'

function ClimaContextual() {
  const { clima, sugestao, carregando, erro, tentarDeNovo } = useClimaContextual()

  return (
    <article className="rounded-3xl bg-card p-6">
      <h3 className="font-titulo text-xl font-medium">Clima contextual</h3>
      <p className="mt-1 text-sm text-muted">
        Dados reais de São Paulo (Open-Meteo) sugerindo o modo de câmera.
      </p>

      <div aria-live="polite" className="mt-4">
        {carregando && <p className="text-muted">Buscando o clima...</p>}

        {erro && !carregando && (
          <div role="alert">
            <p className="font-semibold text-erro">{erro}</p>
            <button
              type="button"
              onClick={tentarDeNovo}
              className="mt-3 rounded-full border border-borda px-5 py-2 text-sm font-semibold hover:text-acao"
            >
              Tentar de novo
            </button>
          </div>
        )}

        {clima && sugestao && !carregando && !erro && (
          <>
            <p className="font-titulo text-4xl font-medium">{Math.round(clima.temperatura)} °C</p>
            <p className="text-sm text-muted">
              {clima.isDay === 1 ? 'Dia' : 'Noite'} ·{' '}
              {clima.precipitacao > 0 ? `Chuva de ${clima.precipitacao} mm` : 'Sem chuva'}
            </p>
            <p className="mt-4 text-sm text-muted">Modo sugerido</p>
            <p className="font-titulo text-2xl font-medium text-acao">{sugestao.modo}</p>
            <p className="mt-1 text-sm text-muted">{sugestao.motivo}</p>
          </>
        )}
      </div>
    </article>
  )
}

export default ClimaContextual
