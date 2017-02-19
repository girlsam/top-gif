import React, { Component } from 'react';
import axios from 'axios';

import Header from './Header';

const GIPHY_URL='https://api.giphy.com/v1/gifs/trending?api_key=dc6zaTOxFJmzC';

export default class App extends Component {
  constructor(props) {

    super();

    this.state = {
      trendingGifs: [],
      startsAt: 0,
    }

    this.loadGifs = this.loadGifs.bind(this);

  }

  componentWillMount(data) {
    axios.get(GIPHY_URL)
      .then(res => {
        let trendingGifs = res.data.data;
        this.setState({ trendingGifs });
        let loadedGifs = this.state.loadGifs(this.state.trendingGifs);
      })
      .catch(err => {
        console.log(err);
      });
  }

  loadGifs(arr) {
    let size = 5;
    return arr.slice(0, size).map((el) => {
      console.log('working');
      this.state.startsAt += 5;
      return (
        <section className="gif-card" key={el.id}>
          <img src={el.images.fixed_height.url}/>
        </section>
      )
    });
  }

  render() {
    return (
      <div>
        <Header />
        <div className="card-container">
          {this.state.loadedGifs}
        </div>
      </div>
    );
  }
}
