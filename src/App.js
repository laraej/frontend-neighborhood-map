import React from 'react';
import Map from './Map.js';
import Marker from './Marker.js';
import Sidebar from './Sidebar.js';
import Item from './Item.js';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.onError = this.onError.bind(this);
    this.onFilter = this.onFilter.bind(this);
    this.onSelect = this.onSelect.bind(this);

    this.places = [
      { title: "The National Gallery", position: { lat: 51.508929, lng: -0.128299 }, foursquare: '4ac518cdf964a520e6a520e3' },
      { title: "Tate Modern", position: { lat: 51.5075939, lng: -0.0993544 }, foursquare: '4ac518d3f964a52076a720e3' },
      { title: "British Museum", position: { lat: 51.5194133, lng: -0.1269566 }, foursquare: '4ac518d2f964a5203da720e3' },
      { title: "Victoria and Albert Museum", position: { lat: 51.4966392, lng: -0.17218 }, foursquare: '4ae2d9f8f964a5208d8f21e3' },
      { title: "Imperial War Museum", position: { lat: 51.4958308, lng: -0.1086615 }, foursquare: '4ac518d3f964a52078a720e3' },
      { title: "Science Museum", position: { lat: 51.4978095, lng: -0.1745235 }, foursquare: '4ac518cdf964a520e9a520e3' },
      { title: "Natural History Museum", position: { lat: 51.496715, lng: -0.1763672 }, foursquare: '4ac518cdf964a520e8a520e3' },
      { title: "British Library", position: { lat: 51.5299717, lng: -0.1276759 }, foursquare: '4ac518cef964a52019a620e3' }
    ];

    this.state = {
      places: this.places,
      // The marker with currently open info window or null meaning that
      // no marker has currently an open info window.
      selectedPlace: null,
      error: false
    }
  }
  onError() {
    this.setState((prevState, props) => {
      return {error: true};
    });
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
  onSelect(place) {
    this.setState((prevState, props) => {
      return { selectedPlace: place };
    });
  }
  render() {
    const markers = this.state.places.map((place) => {
      return (
        <Marker place={ place } key={ place.title } selectedPlace={ this.state.selectedPlace }
            onSelect={ this.onSelect } onError={ this.onError } />
      );
    });

    const items = this.state.places.map((place) => {
      return (
        <Item place={ place } key={ place.title } selectedPlace={ this.state.selectedPlace }
            onSelect={ this.onSelect} />
      )
    });

    const errorHandlingStyle = {
      display: this.state.error ? 'block' : 'none',
    }

    return (
      <div id="app">
        <div className="error-handling" role="alert" style={ errorHandlingStyle }>There is a problem with loading this page.</div>
        <Sidebar onFilter={ this.onFilter }>
          { items }
        </Sidebar>
        <Map center={{ lat: 51.5080883, lng: -0.1291377 }} zoom={ 14 } onError={ this.onError }>
          { markers }
        </Map>
      </div>
    );
  }
}

export default App;
