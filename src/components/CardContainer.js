import React, { Component } from 'react';

import Card from './Card';

class CardContainer extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    const { cards } = this.props;

    return (
      <div>
        {cards.map(el =>
          <Card
            key={el.id}
            src={el.images.fixed_height.url}
            alt={el.url}
          />
        )}
      </div>
    )
  }

}

export default CardContainer;
