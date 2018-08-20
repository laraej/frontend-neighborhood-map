import React from 'react';
import Map from './Map.js';
import Marker from './Marker.js';
import Sidebar from './Sidebar.js';
import Item from './Item.js';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.onFilter = this.onFilter.bind(this);

    this.places = [
      { title: "The National Gallery", position: { lat: 51.508929, lng: -0.128299 } },
      { title: "Tate Modern", position: { lat: 51.5075939, lng: -0.0993544 } },
      { title: "British Museum", position: { lat: 51.5194133, lng: -0.1269566 } },
      { title: "Victoria and Albert Museum", position: { lat: 51.4966392, lng: -0.17218 } },
      { title: "Imperial War Museum", position: { lat: 51.4958308, lng: -0.1086615 } },
      { title: "Science Museum", position: { lat: 51.4978095, lng: -0.1745235 } },
      { title: "Natural History Museum", position: { lat: 51.496715, lng: -0.1763672 } },
      { title: "British Library", position: { lat: 51.5299717, lng: -0.1276759 } }
    ];

    this.state = {
      places: this.places
    }
  }
  onFilter(text) {
    if (text.length === 0) {
      this.setState((prevState, props) => {
        return {places: this.places}
      });
    }
    else {
      const places = this.places.filter((place) => place.title.toLowerCase().indexOf(text.toLowerCase()) >= 0);

      this.setState((prevState, props) => {
        return {places: places}
      });
    }
  }
  render() {
    const markers = this.state.places.map((place) => {
      return (
        <Marker place={ place } key={ place.title } />
      );
    });

    const items = this.state.places.map((place) => {
      return (
        <Item place={ place } key={ place.title } />
      )
    });

    return (
      <div id="app">
        <Sidebar onFilter={ this.onFilter }>
          { items }
        </Sidebar>
        <Map center={{ lat: 51.5080883, lng: -0.1291377 }} zoom={ 14 }>
          { markers }
        </Map>
      </div>
    );
  }
}

export default App;
