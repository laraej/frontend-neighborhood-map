import React from 'react';
import Map from './Map.js';
import Marker from './Marker.js';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <Map center={{ lat: 51.5080883, lng: -0.1291377 }} zoom={ 14 }>
        <Marker title="The National Gallery" position={{ lat: 51.508929, lng: -0.128299 }} />
        <Marker title="Tate Modern" position={{ lat: 51.5075939, lng: -0.0993544 }} />
        <Marker title="British Museum" position={{ lat: 51.5194133, lng: -0.1269566 }} />
        <Marker title="Victoria and Albert Museum" position={{ lat: 51.4966392, lng: -0.17218 }} />
        <Marker title="Imperial War Museum" position={{ lat: 51.4958308, lng: -0.1086615 }} />
        <Marker title="Science Museum" position={{ lat: 51.4978095, lng: -0.1745235 }} />
        <Marker title="Natural History Museum" position={{ lat: 51.496715, lng: -0.1763672 }} />
        <Marker title="British Library" position={{ lat: 51.5299717, lng: -0.1276759 }} />
      </Map>
    );
  }
}

export default App;
