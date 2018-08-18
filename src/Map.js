import React from 'react';

class Map extends React.Component {
  constructor(props) {
    super(props);

    window.mapComponent = this;

    this.state = {
      ready: false
    }
  }
  onReady() {
    this.setState((prevState, props) => {
      return { ready: true }
    });
  }
  componentDidMount() {
    loadGoogleMaps();
  }
  render() {
    const markers = this.state.ready ? this.props.children : null;

    return (
      <div id="map">
      { markers }
      </div>
    );
  }
}

function loadGoogleMaps() {
  const script = document.createElement('script');

  script.type = 'text/javascript';
  script.async = true;
  script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyBoGVwCc72EFuPldJgE_oTS-Udtv0xxjTQ&callback=initGoogleMaps';

  document.body.appendChild(script);
}

window.initGoogleMaps = function () {
  window.map = new window.google.maps.Map(document.getElementById("map"), {
    center: { lat: 51.5080883, lng: -0.1291377 },
    zoom: 14
  });

  // Tell the React component it is ready.
  window.mapComponent.onReady();
}

export default Map;
