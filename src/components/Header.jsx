import React from 'react'

export default function Header() {
    return (
<header style={{'position': 'sticky'}}>
    <nav className="navbar navbar-expand-lg navbar-light bg-light" >
      <div className="container ">
        <a className="navbar-brand" href="#"><img src="./images/Logo.png" style={{'minWidth': '60px'}} className="logo" alt="Logo" /></a>
        <button className="navbar-toggler my-4 ms-3" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse me-5" id="navbarNav">
          <ul className="navbar-nav align-items-center">
            <li className="nav-item px-2 my-2">
              <a className=" btn btn-outline-primary" href="#Inicio">Inicio</a>
            </li>
            <li className="nav-item px-2 my-2">
              <a className=" btn btn-outline-primary" href="#Habilidades">Habilidades</a>
            </li>
            <li className="nav-item px-2 my-2">
              <a className=" btn btn-outline-primary" href="#Estudios">Estudios</a>
            </li>
            <li className="nav-item px-2 my-2">
              <a className=" btn btn-outline-primary" href="#Proyectos">Proyectos</a>
            </li>
            <li className="nav-item px-2 my-2">
              <a className=" btn btn-outline-primary" href="#Contacto">Contacto</a>
            </li>
            <li className="nav-item px-2 my-2">
              <a className=" btn btn-outline-primary" href="#Redes">Redes</a>
            </li>
          </ul>
        </div>
        <a href="cv.html" target="_blanck"><img src="./images/cv.png" alt="Curriculum" className="cv mx-3" /></a>      
      </div>
    </nav>
  </header>

    )
}
