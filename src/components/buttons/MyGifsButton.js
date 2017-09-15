import React from 'react';

const MyFaveGifs = (props) => {
  return (
    <div className="btn">
      <button className="btn-load-more" onClick={props.getGifs}>
        My Fave Gifs
      </button>
    </div>
  )
}

export default MyFaveGifs;
