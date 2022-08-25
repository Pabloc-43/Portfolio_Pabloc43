import React from 'react'
import ConocimientosTargeta from './reutilizables/ConocimientosTargeta'
import datosConocimientos from './data/conocimientos';

const conocimientos = datosConocimientos;

export default function Tecnologias() {
  return (
    <section className="container container-xs my-5" id="Habilidades">
  <div className="row row-cols-1 row-cols-md-3 g-4">
    {/*Skills-titulo*/}
    <div className="col-12 text-center">
      <br />
      <br />
      <h2>Habilidades:</h2>
    </div>
    {conocimientos.map(x => <ConocimientosTargeta key={x.id} props={x} />)}
  </div>
</section>

  )
}
