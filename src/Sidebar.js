import React from 'react';

class Sidebar extends React.Component {
  constructor(props) {
    super(props);

    this.onFilter = this.onFilter.bind(this);
    this.onHamburger = this.onHamburger.bind(this);

    this.state = {
      sidebarOpen: false
    }
  }
  onHamburger(event) {
    this.setState((prevState, props) => {
      return {sidebarOpen: !this.state.sidebarOpen};
    })
  }
  onFilter(event) {
    this.props.onFilter(event.target.value);
  }
  render() {

    if (this.state.sidebarOpen) {
      return (
        <div id="sidebar" className="sidenav-open">
          <span className="menu-bars"><i className="fas fa-bars" onClick={ this.onHamburger } aria-hidden="true"></i></span>
          <h2 className="app-title">London Museums Map</h2>
          <h3 className="filter-title">Filter museums by name</h3>
          <input className="filter" type="text" placeholder="Museum name ..." onChange={ this.onFilter }></input>
          <ul className="museum-list">
            { this.props.children }
          </ul>
        </div>
      )
    }
    else {
      return (
        <div className="sidenav-closed">
          <span className="menu-bars"><i className="fas fa-bars" onClick={ this.onHamburger } aria-hidden="true"></i></span>
        </div>
      )
    }
  }
}

export default Sidebar;
