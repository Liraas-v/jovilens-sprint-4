import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import App from './App'
import { AutenticacaoProvedor } from './context/AutenticacaoContexto'
import './styles/global.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <AutenticacaoProvedor>
        <App />
      </AutenticacaoProvedor>
    </BrowserRouter>
  </StrictMode>,
)
