import React, { Component } from 'react';

let Card = function statelessFunctionComponentClass(props) {
  let img_url = props.src;
  let key = props.index;
  let twitter_share = props.link;

  return (
    <li key={key} className="card-wrapper">
      <section className="card">
        <img src={img_url}/>
        <footer>
          <span><a target="_blank" href={twitter_share}>
Share This on Twitter</a></span><span>Facebook</span>
        </footer>
      </section>
    </li>
  )
}

export default Card;
