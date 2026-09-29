import { Route, Routes } from 'react-router-dom'

import Cabecalho from './components/Cabecalho'
import Rodape from './components/Rodape'
import RotaPrivada from './components/RotaPrivada'
import Historico from './pages/Historico'
import Inicio from './pages/Inicio'
import Login from './pages/Login'
import NaoEncontrada from './pages/NaoEncontrada'

// App só cuida do layout fixo e das rotas; a lógica fica nos hooks.
function App() {
  return (
    <>
      <a
        href="#conteudo"
        className="sr-only focus:not-sr-only focus:absolute focus:left-2 focus:top-2 focus:z-50 focus:rounded focus:bg-acao focus:px-3 focus:py-2 focus:text-acao-texto"
      >
        Ir para o conteúdo
      </a>

      <Cabecalho />

      <main id="conteudo" className="min-h-[60vh]">
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/historico"
            element={
              <RotaPrivada>
                <Historico />
              </RotaPrivada>
            }
          />
          <Route path="*" element={<NaoEncontrada />} />
        </Routes>
      </main>

      <Rodape />
    </>
  )
}

export default App
