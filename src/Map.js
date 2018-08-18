import React from 'react';

class Map extends React.Component {
  componentDidMount() {
    loadGoogleMaps();
  }
  render() {
    return (
      <div id="map" />
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
}

export default Map;
