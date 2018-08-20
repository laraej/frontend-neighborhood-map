import React from 'react';
import $ from 'jquery';

class Marker extends React.Component {
  constructor(props) {
    super(props);

    this.marker = new window.google.maps.Marker({
      position: this.props.place.position,
      title: this.props.place.title
    });

    this.infoWindow = new window.google.maps.InfoWindow({
      content: '<strong>' + this.props.place.title + '</strong><br><br>' +
          '<em>Loading information...</em>'
    });

    this.loadInfo();

    this.marker.addListener('click', () => {
      this.props.onSelect(this.props.place);
    });

    this.infoWindow.addListener('closeclick', () => {
      this.props.onSelect(null);
    });
  }
  loadInfo() {
    $.getJSON('https://api.foursquare.com/v2/venues/' + this.props.place.foursquare
        + '?v=20180323&client_id=1INTJ2JHYE4RWH2NUAT4RPUFMI1AV1TIP453EZLBV3OGD2YY&'
        + 'client_secret=3UX1DUYOBC0JCFYJXXSVRLKN5G2KT4AKMLHSSFORCSETRFVX',
      (data) => {
        const venue = data.response.venue;

        const address = venue.location.address + '<br>' + venue.location.postalCode + '<br><br>';

        var hours = '';

        for (const timeframe of venue.hours.timeframes) {
          hours += timeframe.days + '<br>'
          for (const open of timeframe.open)
            hours += open.renderedTime + '<br>';
          hours += '<br>';
        }

        this.infoWindow.setContent('<strong>' + this.props.place.title + '</strong><br><br>' +
            address + hours + '<small>Information by Foursquare</small>');
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
