import React from 'react';

const ShareButtons = (props) => {
  let tw_share = {
    name: 'twitter',
    url: `https://twitter.com/intent/tweet?hashtags=giphy,topgif&text=Check%20This%20TopGif!&tw_p=tweetbutton&url=${props.gif_url}`,
    icon: 'fa fa-twitter'
  }

  let fb_share = {
    name: 'facebook',
    url: `https://www.facebook.com/sharer?/s=100&p[url]=${props.gif_url}`,
    icon: 'fa fa-facebook'
  }

  let add_to_fav = {
    name: 'cookie',
    icon: 'fa fa-heart-o'
  }

  return (
    <footer className="social-container">
      <a className="social-twitter" href={tw_share.url} target="_blank"><div className="social-text"><i className={tw_share.icon}></i></div></a>
      <a className="social-add" onClick={props.onClick} data-cookie={props.cookieData}><div className="social-text"><i className={add_to_fav.icon}></i></div></a>
      <a className="social-facebook" href={fb_share.url} target="_blank"><div className="social-text"><i className={fb_share.icon}></i></div></a>
    </footer>
  )
}

export default ShareButtons;
