import React, { Component } from 'react';

import ShareButtons from './Social';

const Card = (props) => {
  let img_url = props.src;
  let key = props.index;

  return (
    <li key={key} className="card-wrapper">
      <section className="card">
        <img src={img_url}/>
        <ShareButtons />
      </section>
    </li>
  )
}

export default Card;
