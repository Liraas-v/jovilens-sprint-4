// Imagem responsiva do manifesto: srcset por largura e width/height reais,
// para o navegador reservar o espaço e a página não pular quando carregar.
function Foto({ imagem, alt, tamanhos = '100vw', prioridade = false, className = '' }) {
  const maior = imagem.larguras[imagem.larguras.length - 1]
  const srcSet = imagem.larguras.map((l) => `${imagem.base}-${l}.webp ${l}w`).join(', ')

  return (
    <img
      src={`${imagem.base}-${maior}.webp`}
      srcSet={srcSet}
      sizes={tamanhos}
      width={imagem.largura}
      height={imagem.altura}
      alt={alt ?? imagem.alt}
      loading={prioridade ? 'eager' : 'lazy'}
      fetchPriority={prioridade ? 'high' : undefined}
      decoding="async"
      className={className}
    />
  )
}

export default Foto
