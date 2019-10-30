/* eslint-disable no-undef */
import React from "react";
import { compose, withProps } from "recompose";
import {withScriptjs, withGoogleMap, GoogleMap } from "react-google-maps";

const { MarkerWithLabel } = require("react-google-maps/lib/components/addons/MarkerWithLabel");

const MapWithAMarkerWithLabel = compose(
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyDSiHSy5W40gQJqhQhpYS0MuPHpWwg_GMw",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap
)(props => 
  <GoogleMap
    defaultZoom = {8}
    defaultCenter = {{ lat: -34.397, lng: 150.644 }}
  >
    {props.markers.map(marker => (
      <MarkerWithLabel
        key={marker.photo_id}
        position={{ lat: marker.latitude, lng: marker.longitude }}
        labelAnchor={new google.maps.Point(0, 0)}
        labelStyle={{backgroundColor: "yellow", fontSize: "32px", padding: "16px"}}
        >
        <div>Hello there!</div>
      </MarkerWithLabel>
    ))}
  </GoogleMap>

  );

  class App extends React.PureComponent {
    componentWillMount() {
      this.setState({ markers: [] })
    }
  
    componentDidMount() {
      const url = [
        // Length issue
        `https://gist.githubusercontent.com`,
        `/farrrr/dfda7dd7fccfec5474d3`,
        `/raw/758852bbc1979f6c4522ab4e92d1c92cba8fb0dc/data.json`
      ].join("")
  
      fetch(url)
        .then(res => res.json())
        .then(data => {
          this.setState({ markers: data.photos });
        });
    }
  
    render() {
      console.log("markers", this.state.markers);
      return (
        <MapWithAMarkerWithLabel markers={this.state.markers} />
      )
    }
  }
  
  export default App;
