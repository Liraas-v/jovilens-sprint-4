// Casca comum das seções da landing: section + h2 ligados por aria-labelledby.
function Secao({ id, titulo, introducao, children }) {
  return (
    <section id={id} aria-labelledby={`${id}-titulo`} className="mx-auto max-w-6xl scroll-mt-20 px-4 py-16">
      <h2 id={`${id}-titulo`} className="font-titulo text-3xl font-medium leading-tight md:text-4xl">
        {titulo}
      </h2>
      {introducao && <p className="mt-3 max-w-2xl text-muted">{introducao}</p>}
      <div className="mt-8">{children}</div>
    </section>
  )
}

export default Secao
