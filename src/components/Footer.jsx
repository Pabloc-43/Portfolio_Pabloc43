import React from 'react'

export default function Footer() {
  return (
    <footer className="footer-area mt-5" id="Redes">
  <div className="container">
    <div className="row">
      <div className="site-logo text-center py-4">
        <a href="#">
          <img src="./images/Logo.png" alt="logo" className="ffoot" />
        </a>
      </div>
      <div className="social text-center">
        <div className="btnn mb-4">
          <span>
            <h4 className="pt-1">Contáctame</h4>
          </span>
          <div className="dot" />
        </div>
        <div className="redes-container">
          <a href="https://github.com/Pabloc-43" target="_blank" className="git">
            <i className="fab fa-github fa-3x" />
          </a>
          <a href="https://wa.me/59896241417" target="_blank" className="wpp">
            <i className="fab fa-whatsapp fa-3x" />
          </a>
          <a
            href="https://www.linkedin.com/in/pablo-camejo-rodriguez-37a60a212/"
            target="_blank"
            className="lnk"
          >
            <i className="fab fa-linkedin fa-3x" />
          </a>
        </div>
      </div>
      <div className="copyrights text-center">
        <p className="para">Construido Por Pablo Camejo 2022.</p>
      </div>
    </div>
  </div>
</footer>

  )
}
