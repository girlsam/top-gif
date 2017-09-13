import React, { Component } from 'react';
import axios from 'axios';

import Card from './Card';
import LoadMoreButton from './LoadMoreButton';
import PageEnd from './PageEnd';

import { getCookie, setCookie } from './../helpers';

const GIPHY_URL='https://api.giphy.com/v1/gifs/trending?api_key=dc6zaTOxFJmzC';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      trendingGifs: [],
      startAt: 0
    }

    this.renderCards = this.renderCards.bind(this);
    this.handleLoadMoreClick = this.handleLoadMoreClick.bind(this);
    this.createCard = this.createCard.bind(this);
    this.addCookie = this.addCookie.bind(this);
  }

  componentDidMount(data) {
    axios.get(GIPHY_URL)
      .then(res => {
        let trendingGifs = res.data.data;
        let dataForCookies = [];
        trendingGifs.forEach(el => {
          let fixed_height_url = el.fixed_height_url;
          let key = el.id;
          let url = el.url
          dataForCookies.push({fixed_height_url, key, url})
        })
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
    return <Card src={source} key={key} alt={alt} onClick={this.addCookie} cookieData={source}/>
  }

  //render Card component dynamically, however, only render first 5 elements, allow user to load more on click
  renderCards(arr) {
    let start = this.state.startAt;
    return arr.slice(0, start+6).map(this.createCard);
  }

  handleLoadMoreClick() {
    this.setState({
      startAt:
      this.state.startAt + 6
    });
  }

  addCookieClick(e) {
    let cookie = e.target.dataset.cookie;
    setCookie('faves', cookie);
  }

  //create function to toggle <i> class onClick

  render() {
    //indicate gifs are loading while state is set in component mount, gifs array is empty
    if (!this.state.trendingGifs.length) {
      return <div className="spinner"></div>
    } else {
      //gifs loaded, render cards
      return (
        <main>
           <ul className="card-container">
             {this.renderCards.call(this, this.state.trendingGifs)}
           </ul>
           { this.state.startAt < 20 ? <LoadMoreButton onClick={this.handleLoadMoreClick} />
           : <PageEnd /> }
         </main>
      )
    }
  }
}
