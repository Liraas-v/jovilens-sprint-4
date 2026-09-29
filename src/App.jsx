import { Route, Routes } from 'react-router-dom'

import Inicio from './pages/Inicio'
import Login from './pages/Login'
import NaoEncontrada from './pages/NaoEncontrada'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Inicio />} />
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<NaoEncontrada />} />
    </Routes>
  )
}

export default App
