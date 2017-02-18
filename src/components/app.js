import React, { Component } from 'react';
import axios from 'axios';

import Header from './Header';

const GIPHY_URL='https://api.giphy.com/v1/gifs/trending?api_key=dc6zaTOxFJmzC';

export default class App extends Component {
  constructor(props) {

    super();

    this.state = {
      gifs: []
    }

  }

  getData(gifs) {
    axios.get(GIPHY_URL)
      .then(res => {
        const gifs = res.data.data;
        this.setState({ gifs });
      })
  }

  componentDidMount(gifs) {
    this.getData(gifs);
  }

  render() {
    return (
      <div>
        <Header />
        <div>
          {this.state.gifs.map(el => {
            return (
              <h6 key={el.id}><img src={el.bitly_gif_url}></img></h6>
            )
          })}
        </div>
      </div>
    );
  }
}
