import React from 'react'

export default function CertificadoInfo(props) {
  const {Img} = props
  console.log(Img)
  return (
    <div className='mt-5 pt-5 ' style={{'width' : '120%'}}>
              <div className="illustration">
<img
  className="w-100"
  src={Img}
  alt="illustration with woman"
/>
</div>
    </div>
  )
}
