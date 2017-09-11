import React, { Component } from 'react';

import ShareButtons from './Social';

const Card = (props) => {
  let img_url = props.src;
  let altText = props.alt

  return (
    <li className="card-wrapper">
      <section className="card">
        <img src={img_url} alt={altText}/>
        <ShareButtons gif_url={img_url} onClick={props.onClick}/>
      </section>
    </li>
  )
}

export default Card;
