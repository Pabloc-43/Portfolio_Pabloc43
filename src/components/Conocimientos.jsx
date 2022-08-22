import React from 'react'
import ConocimientosTargeta from './reutilizables/ConocimientosTargeta'

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
    {/*Skills-card1*/}
    <div className="col col-lg-3 col-xs-12 col-md-6 habil">
      <div className="card h-100">
        <div className="d-flex justify-content-center py-4">
          <img src="images/html-5.png" className="card-img-top hb" alt="..." />
        </div>
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">This is a short card.</p>
        </div>
      </div>
    </div>
    {/*Skills-card2*/}
    <div className="col col-lg-3 col-xs-12 col-md-6 habil">
      <div className="card h-100">
        <div className="d-flex justify-content-center py-4">
          <img src="images/piton.png" className="card-img-top hb" alt="..." />
        </div>
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            This is a longer card with supporting text below as a natural
            lead-in to additional content.
          </p>
        </div>
      </div>
    </div>
    {/*Skills-card3*/}
    <div className="col col-lg-3 col-xs-12 habil col-md-6">
      <div className="card h-100">
        <div className="d-flex justify-content-center py-4 py-4">
          <img src="images/css-3.png" className="card-img-top hb" alt="..." />
        </div>
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            This is a longer card with supporting text below as a natural
            lead-in to additional content. This content is a little bit longer.
          </p>
        </div>
      </div>
    </div>
    {/*Skills-card4*/}
    <div className="col col-lg-3 col-xs-12 habil col-md-6">
      <div className="card h-100">
        <div className="d-flex justify-content-center py-4">
          <img src="images/figma.png" className="card-img-top hb" alt="..." />
        </div>
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            This is a longer card with supporting text below as a natural
            lead-in to additional content. This content is a little bit longer.
          </p>
        </div>
      </div>
    </div>
    {/*Skills-card5*/}
    <div className="col col-lg-4 col-xs-12 habil col-md-6">
      <div className="card h-100">
        <div className="d-flex justify-content-center py-4">
          <img src="images/js.png" className="card-img-top hb" alt="..." />
        </div>
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            This is a longer card with supporting text below as a natural
            lead-in to additional content. This content is a little bit longer.
          </p>
        </div>
      </div>
    </div>
    {/*Skills-card6*/}
    <div className="col col-lg-4 col-xs-12 habil col-md-6">
      <div className="card h-100">
        <div className="d-flex justify-content-center py-4">
          <img
            src="images/cad-file.png"
            className="card-img-top hb"
            alt="..."
          />
        </div>
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            This is a longer card with supporting text below as a natural
            lead-in to additional content. This content is a little bit longer.
          </p>
        </div>
      </div>
    </div>
    {/*Skills-card1*/}
    <div className="col col-lg-4 col-xs-12 col-md-6 habil">
      <div className="card h-100">
        <div className="d-flex justify-content-center py-4">
          <img src="images/html-5.png" className="card-img-top hb" alt="..." />
        </div>
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">This is a short card.</p>
        </div>
      </div>
    </div>
<ConocimientosTargeta />

  </div>
</section>

  )
}
