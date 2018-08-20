import React from 'react';

class Marker extends React.Component {
  constructor(props) {
    super(props);

    this.marker = new window.google.maps.Marker({
      position: this.props.place.position,
      title: this.props.place.title
    });

    this.infoWindow = new window.google.maps.InfoWindow({
      content: '<strong>' + this.props.place.title + '</strong>',
    });

    this.marker.addListener('click', () => {
      this.props.onSelect(this.props.place);
    });

    this.infoWindow.addListener('closeclick', () => {
      this.props.onSelect(null);
    });
  }
  componentWillMount() {
    // Make the marker visible.
    this.marker.setMap(window.map);
  }
  componentWillUnmount() {
    // Make the marker invisible.
    this.marker.setMap(null);
  }
  render() {
    // If this marker's info window should be open, let's open it. Otherwise let's close it.
    if (this.props.selectedPlace && this.props.selectedPlace.title === this.props.place.title) {
      this.marker.setAnimation(window.google.maps.Animation.BOUNCE);
      this.infoWindow.open(window.map, this.marker);
    }
    else {
      this.marker.setAnimation(null);
      this.infoWindow.close();
    }

    // The marker itself is handled by Google Maps.
    return null;
  }
}

export default Marker;
