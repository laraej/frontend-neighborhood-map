import React from 'react';
import Map from './Map.js';
import Marker from './Marker.js';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <Map>
        <Marker title="The National Gallery" lat={ 51.508929 } lng={ -0.128299 } />
        <Marker title="Tate Modern" lat={ 51.5075939 } lng={ -0.0993544 } />
        <Marker title="British Museum" lat={ 51.5194133 } lng={ -0.1269566 } />
        <Marker title="Victoria and Albert Museum" lat={ 51.4966392 } lng={ -0.17218 } />
        <Marker title="Imperial War Museum" lat={ 51.4958308 } lng={ -0.1086615 } />
        <Marker title="Science Museum" lat={ 51.4978095 } lng={ -0.1745235 } />
        <Marker title="Natural History Museum" lat={ 51.496715 } lng={ -0.1763672 } />
        <Marker title="British Library" lat={ 51.5299717 } lng={ -0.1276759 } />
      </Map>
    );
  }
}

export default App;
