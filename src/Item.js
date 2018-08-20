import React from 'react';

class Item extends React.Component {
  constructor(props) {
    super(props);

    this.onClick = this.onClick.bind(this);
  }
  onClick() {
    this.props.onSelect(this.props.place);
  }
  render() {
    return (
      <li onClick={ this.onClick }>{ this.props.place.title }</li>
    )
  }
}

export default Item;
