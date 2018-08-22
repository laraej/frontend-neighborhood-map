import React from 'react';

class Map extends React.Component {
  constructor(props) {
    super(props);

    window.mapComponent = this;

    this.state = {
      initialized: false
    }
  }
  onInit() {
    window.map = new window.google.maps.Map(document.getElementById("map"), {
      center: this.props.center,
      zoom: this.props.zoom,
      mapTypeControl: false,
      fullscreenControl: false,
      streetViewControl: false,
      clickableIcons: false
    });

    this.setState((prevState, props) => {
      return { initialized: true }
    });
  }
  componentDidMount() {
    window.gm_authFailure = this.props.onError;

    loadGoogleMaps(this.props.onError);
  }
  render() {
    return (
      <div id="map">
      { this.state.initialized ? this.props.children : null }
      </div>
    );
  }
}

function loadGoogleMaps(onError) {
  const script = document.createElement('script');

  script.type = 'text/javascript';
  script.async = true;
  script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyBoGVwCc72EFuPldJgE_oTS-Udtv0xxjTQ&callback=initGoogleMaps';
  script.onerror = onError;

  document.body.appendChild(script);
}

window.initGoogleMaps = function () {
  window.mapComponent.onInit();
}

export default Map;
