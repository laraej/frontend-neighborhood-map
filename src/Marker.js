import React from 'react';

class Marker extends React.Component {
  constructor(props) {
    super(props);

    this.marker = new window.google.maps.Marker({
      position: this.props.position,
      title: this.props.title
    });

    this.infoWindow = new window.google.maps.InfoWindow({
      content: '<strong>' + this.props.title + '</strong>',
    });

    this.marker.addListener('click', () => {
      this.props.onOpenInfoWindow(this);
    });

    this.infoWindow.addListener('closeclick', () => {
      this.props.onOpenInfoWindow(null);
    });
  }
  componentWillMount() {
    // Make the marker visible.
    this.marker.setMap(window.map);
  }
  render() {
    // If this marker's info window should be open, let's open it. Otherwise let's close it.
    if (this.props.openInfoWindow === this)
      this.infoWindow.open(window.map, this.marker);
    else
      this.infoWindow.close();

    // The marker itself is handled by Google Maps.
    return null;
  }
}

export default Marker;
