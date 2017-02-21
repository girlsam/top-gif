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
      startAt: 0
    }

    this.renderCards = this.renderCards.bind(this);
    this.handleClick = this.handleClick.bind(this);
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

  handleClick() {
    console.log('help');
    //e.preventDefault();
    // let newStart = this.state.StartAt + 5;
    // this.setState({startAt: newStart }, () => {
    //   this.onClick({renderCards});
    // })
  }

  createCard(props) {
    let key = props.id;
    let source = props.images.fixed_height.url;
    let tw_share = `http://twitter.com/share?text=Get%20This%20TopGif&url=${props.bitly_gif_url}`;
    return <Card src={source} key={key} href={`${tw_share}`}/>
  }

  renderCards(arr) {
    let start = this.state.startAt;
    return arr.slice(start, 5).map(this.createCard);
  }

  render() {
    if (!this.state.trendingGifs.length) {
      return <div>Uh oh, something went wrong!</div>
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
