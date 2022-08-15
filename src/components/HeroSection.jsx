import React from 'react'

export default function HeroSection() {
  return (
        <section id="Inicio" className="container container-xs my-5 py-5" >
            <div className="row espacioR">
                <div className="order-1 col-12 col col-md-5 col-lg-5 d-flex flex-column justify-content-end align-items-start mb-5 ps-0">
                    <div className="d-flex flex-column ps-2 mobil">
                        <h1 className="">Hola soy Pablo</h1>
                        <h3>Estudiante de programacion</h3>
                        <div id="google_translate_element" className="google"></div>
                    </div>
                    <div className="mt-3 botonesJ">
                        <button className="btn"><a href="#Contacto" className="btn btn-primary">Contactame</a></button>
                        <button className="btn"><a href="cv.html" className="btn btn-primary" target="_blank">Ver CV</a></button>
                    </div>
                </div>
                <div className="order-md-1 col-md-7 col-lg-7 col-12">
                    <img src="./images/TICDay-10.jpg" alt="Foto perfil" className="imagen" />
                </div>
            </div>
        </section>
  )
}
