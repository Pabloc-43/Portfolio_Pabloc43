import React from 'react'
import Accordion from './reutilizables/Accordion';
import CertificacionesData from './data/CertificacionesData';

const titulos = CertificacionesData;

export default function Certificaciones() {
  return (
    <div>
      <div className="container">
      <div className="component  ">

        <Accordion  questionsAnswers={titulos} />
      </div>
    </div>
    </div>
  )
}
