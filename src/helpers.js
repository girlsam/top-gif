// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//
// let first_arr = arr.filter((item, index) => {
//   return
// })

//function that takes arr and index
//set index at 0
//while index < 24
//set index+5
//return 5 elements

//show 'load more' button when index < 24
//hide 'load more' button when index = 24

// {this.state.trendingGifs.map(el => {
//   return (
//     <section className="gif-card" key={el.id}>
//       <img src={el.images.fixed_height.url}/>
//     </section>
//   )
// })}

renderGifs = (gifs) => {
  if (!gifs.length) {
    return [];
  } else {
    return gifs.map((el, i) => {
      <Card key={i} src={el} />
    });
  }
}

import React, { Component } from 'react';
import axios from 'axios';

import LoadMoreButton from './LoadMoreButton';
import Card from './Card';

const GIPHY_URL='https://api.giphy.com/v1/gifs/trending?api_key=dc6zaTOxFJmzC';

function renderGifs(gifs) {
  if (!gifs.length) {
    return [];
  } else {
    return gifs.map((el, i) => {
      console.log(gifs);
      <Card key={i} src={el} />
    });
  }
}

const GifCard = (props, {gifs}) => {
    return (
      <li key={this.props.key} className="card-wrapper">
        <section className="card">
          <img src={this.props.src}/>
          <footer>
            Test
          </footer>
        </section>
      </li>
    )
  }

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      trendingGifs: [],
    };

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

  render() {
    const gifs = renderGifs(this.state.trendingGifs);

    return (
      <div>
        <ul className="card-container">
          <GifCard />
          {gifs}
        </ul>

      </div>
    );
  }

}

export default class Card extends Component {
  render(props) {

    return (
      <li key={this.props.key} className="card-wrapper">
        <section className="card">
          <img src={this.props.src}/>
          <footer>
            Test
          </footer>
        </section>
      </li>
    )
  }

}

// handleClick() {
//   this.setState({
//     endsAt: this.state.endsAt + parseInt(5)
//   })
//   let start = this.state.endsAt;
//   return this.state.trendingGifs.slice(start, 5).map((el) => {
//     return (
//       <section className="card" key={el.id}>
//         <img src={el.images.fixed_height.url}/>
//       </section>
//     )
//   });
// }
