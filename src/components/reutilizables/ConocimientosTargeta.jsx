import React from 'react';


export default function ConocimientosTargeta({props}) {
  console.log(props);
  const {title, descripcion, imagen, claseCSS} = props;
  return (
    <div className={claseCSS}>
    <div className="card h-100">
      <div className="d-flex justify-content-center py-4">
        <img src={imagen} className="card-img-top hb" alt="..." />
      </div>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{descripcion}</p>
      </div>
    </div>
  </div>
  )
}
