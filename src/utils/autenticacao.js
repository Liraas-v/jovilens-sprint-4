import { CREDENCIAIS_TESTE } from '../constants/credenciais.js'

// Tira espaços das pontas porque colar credencial costuma trazer espaço junto.
// O usuário é comparado exatamente (maiúsculas contam), igual à senha.
export function credenciaisValidas(usuario, senha) {
  return (
    String(usuario).trim() === CREDENCIAIS_TESTE.usuario &&
    String(senha).trim() === CREDENCIAIS_TESTE.senha
  )
}
