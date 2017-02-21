import React, { Component } from 'react';

class Card extends Component {
  render() {
    return (
      <li key={this.props.id} className="card-wrapper">
        <section className="card">
          <img src={this.props.images.fixed_height.url}/>
          <footer>
            Test
          </footer>
        </section>
      </li>
    )
  }
}
