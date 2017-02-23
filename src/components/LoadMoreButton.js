import React, { Component } from 'react';

const LoadMoreButton = (props) => {
  return (
    <div className="btn">
      <button className="btn-load-more" onClick={props.onClick}>GIF Me More</button>
    </div>
  )
}

export default LoadMoreButton;
