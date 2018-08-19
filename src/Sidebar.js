import React from 'react';

class Sidebar extends React.Component {
  render() {
    return (
      <div id="sidebar">
        <ul>
          { this.props.children }
        </ul>
      </div>
    )
  }
}

export default Sidebar;
