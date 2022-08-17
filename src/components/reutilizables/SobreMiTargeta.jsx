import React from 'react'

export default function SobreMiTargeta(props) {
    const {id, title, clasesIcon, content, claseCSS} = props.items;
  return (
    <div className={claseCSS}>
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
