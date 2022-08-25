import React from 'react'

export default function Divisoria(props) {
    const {imagen} = props;
  return (
    <section className='separacion'><img src={imagen} className="w-100 h-100"></img></section>
  )
}
