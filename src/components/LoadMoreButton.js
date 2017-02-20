import React, { Component } from 'react';

export default class LoadMoreButton extends Component {
  constructor(props) {
    super(props);

    this.state = {
      icon: ''
    }
  }

  render() {
    return (
      <div className="btn">
        <button className="btn-load-more">GIF Me More</button>
      </div>
    )
  }
}
