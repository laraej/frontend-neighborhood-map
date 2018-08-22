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
    const selected = this.props.selectedPlace && this.props.selectedPlace.title === this.props.place.title;

    return (
      <li className={ selected ? 'selected' : '' }onClick={ this.onClick } tabindex={ 0 }>{ this.props.place.title }</li>
    )
  }
}

export default Item;
