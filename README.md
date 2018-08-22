# Neighbourhood App: London Museums Map

London Museums Map is a single-page application developed using React, featuring a map of London and a set of museums. List view and map markers identify 8 museums located in central London. The app also includes a filter function that filters the map markers and list items to locations matching the text input.

## App functionality

On the sidebar there is a filter option that uses an input field to filter both the list view and the map markers.

The list view and the markers update accordingly in real time. Selecting a location via list item or map marker causes the map marker to bounce to indicate that the location has been selected and associated info window opens above the map marker showing address and opening time of the museum. The address and opening time data is provided by Foursquare.

In case of error (e.g. in a situation where a third party API does not return the expected result) a message is displayed notifying the user that the data can't be loaded.

## Install

1. First clone this repository on Github:
  * Under the repository name, click Clone or download.
  * In the Clone with HTTPs section, click to copy the clone URL for the repository.

2. On terminal go to directory where you want to have the clone and run:
  git clone [the clone URL]

3. Install the app on terminal with 'npm install'.

## Run

Run the app on termial with 'npm start'. 

To stop running press Ctrl-C on the terminal.

## Demo

You can view the app here:

## Technical specification

### APIs used

#### External APIs

* Google Maps API
* Foursquare Places API

#### Browser APIs

* Fetch API
* Service Worker Cache API

### React components

* App
* Sidebar
* Item (in Sidebar)
* Map
* Marker

## Support

If you have any problems or questions, please open an issue on this repository.
