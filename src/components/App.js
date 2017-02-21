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
      startAt: 1
    }

    this.renderCards = this.renderCards.bind(this);
    //this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount(data) {
    axios.get(GIPHY_URL)
      .then(res => {
        let trendingGifs = res.data.data;
        this.setState({ trendingGifs });
      })
      .catch(err => {
        console.log('Error', err);
      });
  }

  // handleClick() {
  //   //display 5 more gif cards
  // }

  createCard(props) {
    let key = props.id;
    let source = props.images.fixed_height.url;
    return <Card src={source} key={key} />
  }

  renderCards(arr) {
    let start = this.state.startAt;
    return arr.slice(start, 10).map(this.createCard);
  }

  render() {
    if (!this.state.trendingGifs.length) {
      return <div className="loading">Loading...</div>
    } else {
      return (
        <main>
           <ul className="card-container">
             {this.renderCards.call(this, this.state.trendingGifs)}
           </ul>
           { this.state.startAt < 20 ? <LoadMoreButton onClick={this.handleClick} /> : null }
         </main>
      )
    }
  }
}
