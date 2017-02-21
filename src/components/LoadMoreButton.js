import React, { Component } from 'react';

export default class LoadMoreButton extends Component {
  constructor(props) {
    super(props);

    this.state = {
      icon: ''
    }

    this.loadGifs = this.loadGifs.bind(this);
  }

  loadGifs(arr) {
    console.log('working');
    let start = this.state.endsAt;
    return arr.slice(start, 5).map((el) => {
      this.state.endsAt += 5;
      return (
        <section className="card" key={el.id}>
          <img src={el.images.fixed_height.url}/>
        </section>
      )
    });
  }

  render() {
    return (
      <div className="btn">
        <button className="btn-load-more">GIF Me More</button>
      </div>
    )
  }
}
