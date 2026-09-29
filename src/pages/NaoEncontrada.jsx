import { Link } from 'react-router-dom'

function NaoEncontrada() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-16">
      <h1 className="font-titulo text-3xl font-extrabold">Página não encontrada</h1>
      <p className="mt-4 text-muted">Esse endereço não existe no JoviLens.</p>
      <Link to="/" className="mt-6 inline-block font-semibold text-acao underline">
        Voltar para o início
      </Link>
    </main>
  )
}

export default NaoEncontrada
