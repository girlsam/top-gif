import React, { Component } from 'react';

import Header from './Header';

const GIPHYURL='https://api.giphy.com/v1/gifs/trending';

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
      </div>
    );
  }
}
