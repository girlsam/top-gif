import React, { Component } from 'react';
import axios from 'axios';

import LoadMoreButton from './LoadMoreButton';

const GIPHY_URL='https://api.giphy.com/v1/gifs/trending?api_key=dc6zaTOxFJmzC';

export default class App extends Component {
  constructor(props) {

    super();

    this.state = {
      trendingGifs: [],
      startsAt: 0,
    }

    this.loadGifs = this.loadGifs.bind(this);

  componentDidMount(data) {
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

  render() {
    return (
      <div>
        <ul className="card-container">
          {this.state.trendingGifs.slice(0, 5).map(el => {
            return (
              <li key={el.id} className="card-wrapper">
                <section className="card">
                  <img src={el.images.fixed_height.url}/>
                </section>
              </li>
            )
          })}
        </ul>
        <div><LoadMoreButton /></div>
      </div>
    );
  }
}
