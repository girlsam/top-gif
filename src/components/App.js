import React, { Component } from 'react';
import axios from 'axios';

import LoadMoreButton from './buttons/LoadMoreButton';
//import Card from './Card';
import CardContainer from './CardContainer';

import PageEnd from './PageEnd';

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

    this.handleClick = this.handleClick.bind(this);

  }

  componentWillMount(data) {
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
    this.setState({
      startAt:
      this.state.startAt + 5
    });
  }

  render() {
    //indicate gifs are loading while state is set in component mount, gifs array is empty

    if (!this.state.trendingGifs.length) {
      return <div className="spinner"></div>
    } else {
      //gifs loaded, render cards
      return (
        <main>
          <CardContainer
            cards={this.state.trendingGifs}
          />
         </main>
      )
    }
  }
}
