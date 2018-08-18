import React from 'react';

class Map extends React.Component {
  constructor(props) {
    super(props);

    window.mapComponent = this;

    this.state = {
      initialized: false,
      // The marker with currently open info window or null meaning that
      // no marker has currently an open info window.
      openInfoWindow: null
    }

    this.onOpenInfoWindow = this.onOpenInfoWindow.bind(this);
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
  onOpenInfoWindow(marker) {
    this.setState((prevState, props) => {
      return { openInfoWindow: marker };
    });
  }
  componentDidMount() {
    loadGoogleMaps();
  }
  render() {
    const markers = this.props.children.map((marker) => {
      return React.cloneElement(marker, {
        openInfoWindow: this.state.openInfoWindow,
        onOpenInfoWindow: this.onOpenInfoWindow
      });
    });

    return (
      <div id="map">
      { this.state.initialized ? markers : null }
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
  window.mapComponent.onInit();
}

export default Map;
