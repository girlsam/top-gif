import React, { Component } from 'react';

export default class ShareButtons extends Component {

  render() {
    let tw_share = {
      name: 'twitter',
      url: 'https://twitter.com/intent/tweet?hashtags=giphy,topgif&text=Check%20This%20TopGif!&tw_p=tweetbutton&url=https://top-gif.firebaseapp.com',
      icon: 'fa fa-twitter'
    }

    let fb_share = {
      name: 'facebook',
      url: 'https://www.facebook.com/sharer?/s=100&p[url]=https://top-gif.firebaseapp.com',
      icon: 'fa fa-facebook'
    }

  return (
    <footer className="social-container">
      <a className="social-twitter" href={tw_share.url} target="_blank"><div className="social-text"><i className={tw_share.icon}></i></div></a>
      <a className="social-facebook" href={fb_share.url} target="_blank"><div className="social-text"><i className={fb_share.icon}></i></div></a>
    </footer>
    )
  }
}
