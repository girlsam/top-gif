import React, { Component } from 'react';
import axios from 'axios';

import LoadMoreButton from './LoadMoreButton';
import Card from './Card';

const GIPHY_URL='https://api.giphy.com/v1/gifs/trending?api_key=dc6zaTOxFJmzC';

export default class App extends Component {
  constructor(props) {
    super(props);

    //initial state has empty array for ajax response payload
    //initial state has startAt set to 0 representing first index of gif array. Intention is to have event handle onclick which incrementally loads gif elements
    this.state = {
      trendingGifs: [],
      startAt: 0
    }

    this.renderCards = this.renderCards.bind(this);
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

  createCard(props) {
    let key = props.id;
    let source = props.images.fixed_height.url;
    let alt = props.url;
    return <Card src={source} key={key} alt={alt}/>
  }

  //render Card component dynamically, however, only render first 10 elements, allow user to load more on click -tbd
  renderCards(arr) {
    let start = this.state.startAt;
    return arr.slice(start, 10).map(this.createCard);
  }

  render() {
    //indicate gifs are loading while state is set in component mount, gifs array is empty
    if (!this.state.trendingGifs.length) {
      return (
        <div className="load-indicator">
          <svg className="load" x="0px" y="0px" viewBox="0 0 150 150">
            <circle id="loading-circle" cx="75" cy="75" r="60"/>
          </svg>
        </div>
      )
    } else {
      //gifs loaded, render cards
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
