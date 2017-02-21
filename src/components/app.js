import React, { Component } from 'react';
import axios from 'axios';

import LoadMoreButton from './LoadMoreButton';
import Card from './Card';

const GIPHY_URL='https://api.giphy.com/v1/gifs/trending?api_key=dc6zaTOxFJmzC';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      trendingGifs: [],
      startsAt: 0,
      endsAt: 5
    };

    this.handleClick = this.handleClick.bind(this);

  }

  handleClick() {
    this.setState({
      endsAt: this.state.endsAt + parseInt(5)
    })
    let start = this.state.endsAt;
    return this.state.trendingGifs.slice(start, 5).map((el) => {
      return (
        <section className="card" key={el.id}>
          <img src={el.images.fixed_height.url}/>
        </section>
      )
    });
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
        <ul className="card-container">
          {this.state.trendingGifs.slice(0, 5).map(el => {
            return (
              <li key={el.id} className="card-wrapper">
                <section className="card">
                  <img src={el.images.fixed_height.url}/>
                  <footer>
                    Test
                  </footer>
                </section>
              </li>
            )
          })}
        </ul>
        <LoadMoreButton />
      </div>
    );
  }

}
