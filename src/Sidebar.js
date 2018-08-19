import React from 'react';

class Sidebar extends React.Component {
  constructor(props) {
    super(props);

    this.onFilter = this.onFilter.bind(this);
  }
  onFilter(event) {
    this.props.onFilter(event.target.value);
  }
  render() {
    return (
      <div id="sidebar">
        <input type="text" placeholder="Filter" onChange={ this.onFilter }></input>
        <ul>
          { this.props.children }
        </ul>
      </div>
    )
  }
}

export default Sidebar;
