import React from 'react';

import ShareButton from './buttons/ShareButton';
import FavoriteButton from './buttons/FavoriteButton';

const ShareButtonContainer = (props) => {
  let tw_share = {
    name: 'twitter',
    url: `https://twitter.com/intent/tweet?hashtags=giphy,topgif&text=Check%20This%20TopGif!&tw_p=tweetbutton&url=${props.gifUrl}`,
    icon: 'fa fa-twitter'
  }

  let fb_share = {
    name: 'facebook',
    url: `https://www.facebook.com/sharer?/s=100&p[url]=${props.gifUrl}`,
    icon: 'fa fa-facebook'
  }

  let add_to_fav = {
    name: 'cookie',
    icon: 'fa fa-heart-o'
  }

  return (
    <footer className="social-container">
      <ShareButton
        socialClassName='social-twitter'
        shareUrl={tw_share.url}
        icon={tw_share.icon}
      />
      <FavoriteButton
        cookieData={props.cookieData}
        icon={add_to_fav.icon}
        onClick={props.onClick}
      />
      <ShareButton
        socialClassName='social-facebook'
        shareUrl={fb_share.url}
        icon={fb_share.icon}
      />

    </footer>
  )
}

// ShareButtonContainer.PropTypes {
//   onClick: PropTypes.func.isRequired,
//   cookieData: PropsTypes.objec
// }

export default ShareButtonContainer;
