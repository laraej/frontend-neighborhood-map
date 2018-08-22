import React from 'react';

class Sidebar extends React.Component {
  constructor(props) {
    super(props);

    this.onSelect = this.onSelect.bind(this);
    this.onFilter = this.onFilter.bind(this);
    this.onHamburger = this.onHamburger.bind(this);

    this.state = {
      sidebarOpen: false
    }
  }
  onHamburger(event) {
    this.setState((prevState, props) => {
      return {sidebarOpen: !this.state.sidebarOpen};
    });
  }
  onSelect(event) {
    this.setState((prevState, props) => {
      return {sidebarOpen: false}
    });

    this.props.onSelect(event);
  }
  onFilter(event) {
    this.props.onFilter(event.target.value);
  }
  render() {
    const items = this.props.children.map((item) => {
      return React.cloneElement(item, { onSelect: this.onSelect });
    });

    if (this.state.sidebarOpen) {
      return (
        <nav id="sidebar" className="sidenav-open">
          <span className="menu-bars"><i className="fas fa-bars" onClick={ this.onHamburger } aria-hidden="true"></i></span>
          <h2 className="app-title">London Museums Map</h2>
          <h3 className="filter-title">Filter museums by name</h3>
          <input className="filter" type="text" placeholder="Museum name ..." onChange={ this.onFilter } tabIndex={ 0 }></input>
          <ul className="museum-list">
            { items }
          </ul>
        </nav>
      )
    }
    else {
      return (
        <nav className="sidenav-closed">
          <span className="menu-bars"><i className="fas fa-bars" onClick={ this.onHamburger } aria-hidden="true"></i></span>
        </nav>
      )
    }
  }
}

export default Sidebar;
