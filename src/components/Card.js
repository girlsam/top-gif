import React from 'react';
import PropTypes from 'prop-types'

import ShareButtonContainer from './ShareButtonContainer';

const Card = (props) => {
  let img_url = props.src;
  let altText = props.alt

  return (
    <li className="card-wrapper">
      <section className="card">
        <img src={props.src} alt={props.alt}/>
        <ShareButtonContainer gifUrl={props.src}/>
      </section>
    </li>
  )
}

Card.PropTypes = {
  alt: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired
}

export default Card;
