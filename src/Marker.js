import React from 'react';

class Marker extends React.Component {
  constructor(props) {
    super(props);

    this.marker = new window.google.maps.Marker({
      position: { lat: this.props.lat, lng: this.props.lng },
      title: this.props.title
    });
  }
  componentWillMount() {
    // Make the marker visible.
    this.marker.setMap(window.map);
  }
  render() {
    // The marker is rendered by Google Maps.
    return null;
  }
}

export default Marker;
