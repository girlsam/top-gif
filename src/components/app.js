import React, { Component } from 'react';

import Header from './Header';

const GIPHYURL='https://api.giphy.com/v1/gifs/trending?api_key=dc6zaTOxFJmzC';

export default class App extends Component {
  constructor(props) {

    super();

    this.state = {
      gifs: []
    }

    this.getData = this.getData.bind(this);
  }

  render() {
    return (
      <div>
        <Header />
      </div>
    );
  }
}
