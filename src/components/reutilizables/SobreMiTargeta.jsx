import React from 'react'

export default function SobreMiTargeta(props) {
    const {id, title, clasesIcon, content} = props.items;
  return (
    <div className='col-5 justify-content-center d-flex bg-warning m-2'>
        <div>
            <i className={clasesIcon}></i>
        </div>
        <div>
            <h5>
                <span>0{id}</span>
                {title}
            </h5>
            <p>{content}</p>
        </div>
    </div>
  )
}
