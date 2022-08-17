import React from 'react';
import SobreFoto from './images/SobreMi.png';
import SobreMiTargeta from './reutilizables/SobreMiTargeta';
import Habilidades from './data/habilidades';

const items = Habilidades;

export default function SobreMi() {
  const clases = ['row justify-content-between d-flex bg-danger mb-3',
                  'row justify-content-around d-flex bg-danger mb-3', 
                  'row justify-content-center d-flex bg-danger']
  return (
    <section className="sobre_mi container container-xs my-5">
      <div className="row d-flex justify-content-center">
        <div className="im col-lg-4 col-xs-12 ">
          <img src={SobreFoto} alt="imagen Pablo" className='Pablo'/>
        </div>
      </div>
      {items.map((x, index) => 
      <div className={clases[index]} key={index}>
          <SobreMiTargeta  items={x[0]}/>
          <SobreMiTargeta  items={x[1]}/>
      </div>
)}

        {/*<SobreMiTargeta />
        <SobreMiTargeta />
        <SobreMiTargeta />
        <SobreMiTargeta />
        <SobreMiTargeta />
        <SobreMiTargeta />*/}

    </section>
  )
}
