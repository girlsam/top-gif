import React from 'react';

const FavoriteButton = (props) => {

  return (
    <a
      className='social-add'
      href={props.shareUrl}
      target="_blank"
      onClick={props.onClick}
      data-cookie={props.cookieData} >
      <div className="social-text">
        <i className={props.icon}></i>
      </div>
    </a>
  )
}

// <a className="social-add" onClick={props.onClick} data-cookie={props.cookieData}><div className="social-text"><i className={add_to_fav.icon}></i></div></a>

export default FavoriteButton;
