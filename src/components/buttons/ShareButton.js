import React from 'react';

const ShareButton = (props) => {

  return (
    <a
      className={props.socialClassName}
      href={props.shareUrl}
      target="_blank" >
      <div className="social-text">
        <i className={props.icon}></i>
      </div>
    </a>
  )
}

export default ShareButton;
