import React from 'react';

class Item extends React.Component {
  render() {
    return (
      <li>{ this.props.place.title }</li>
    )
  }
}

export default Item;
