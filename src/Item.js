import React from 'react';

class Item extends React.Component {
  constructor(props) {
    super(props);

    this.onClick = this.onClick.bind(this);
    this.onKeyUp = this.onKeyUp.bind(this);
  }
  onClick() {
    this.props.onSelect(this.props.place);
  }
  onKeyUp(event) {
    if (event.key === 'Enter')
      this.props.onSelect(this.props.place);
  }
  render() {
    const selected = this.props.selectedPlace && this.props.selectedPlace.title === this.props.place.title;

    return (
      <li className={ selected ? 'selected' : '' } onClick={ this.onClick }
          tabIndex={ 0 } onKeyUp={ this.onKeyUp }>{ this.props.place.title }</li>
    )
  }
}

export default Item;
