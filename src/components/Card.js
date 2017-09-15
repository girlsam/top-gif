import React from 'react';

import ShareButtons from './buttons/ShareButtons';

const Card = (props) => {

  return (
    <li className="card-wrapper">
      <section className="card">
        <img src={props.src} alt={props.altText}/>
        <ShareButtons onClick={props.onClick} cookieData={props.cookieData}/>
      </section>
    </li>
  )
}

export default Card;
