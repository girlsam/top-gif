import React, { Component } from 'react';
import axios from 'axios';

import Header from './Header';

const GIPHY_URL='https://api.giphy.com/v1/gifs/trending?api_key=dc6zaTOxFJmzC';

export default class App extends Component {
  constructor(props) {

    super();

    this.state = {
      trendingGifs: []
    }

  }

  getData(data) {

  }

  componentDidMount(data) {
    axios.get(GIPHY_URL)
      .then(res => {
        let trendingGifs = res.data.data;
        this.setState({ trendingGifs });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <div>
        <Header />
        <div className="card-container">
          {this.state.trendingGifs.map(el => {
            return (
              <section className="gif-card" key={el.id}>
                <img src={el.images.fixed_height.url}/>
              </section>
            )
          })}
        </div>
      </div>
    );
  }
}
