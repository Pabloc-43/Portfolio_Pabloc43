import React from 'react';
import SobreFoto from './images/SobreMi.png';
import SobreMiTargeta from './reutilizables/SobreMiTargeta';
import Habilidades from './data/habilidades';

const items = Habilidades;

export default function SobreMi() {
  return (
    <section className="sobre_mi container container-xs my-5">
      <div className="row d-flex justify-content-center">
        <div className="im col-lg-4 col-xs-12 ">
          <img src={SobreFoto} alt="imagen Pablo" className='Pablo'/>
        </div>
      </div>
      <div className='row justify-content-around d-flex bg-danger'>
      {items.map(x => <SobreMiTargeta key={x.id} items={x}/>)}

        {/*<SobreMiTargeta />
        <SobreMiTargeta />
        <SobreMiTargeta />
        <SobreMiTargeta />
        <SobreMiTargeta />
        <SobreMiTargeta />*/}

      </div>
    </section>
  )
}
