import React, {useState} from "react";
import {
  GoogleMap,
   withScriptjs,
    withGoogleMap,
     Marker,
    InfoWindow}
 from "react-google-maps";
import * as parkData from "./data/skateboard-parks.json";
import mapStyles from "./mapStyles";

function Map() {
  const [selectedPark, setSelectedPark] = useState(null); //hooks state
  return (
    <GoogleMap
       defaultZoom={10}
       defaultCenter={{lat:45.420422, lng: -75.692429}}
       defaultOptions={{styles: mapStyles}}
    >
      {parkData.features.map((park) => ( //map over all parks for markers
          <Marker
             key={park.properties.PARK_ID} 
             position={{
               lat: park.geometry.coordinates[1],
               lng: park.geometry.coordinates[0]
              }}
              onClick={()=>{
                setSelectedPark(park);
              }}
              icon={{
                url: '/skateboarding.svg',
                scaledSize: new window.google.maps.Size(25, 25)
              }}
               />
      ))}

      {selectedPark && ( //if there is selected park we want to show info
        <InfoWindow
        position={{
          lat: selectedPark.geometry.coordinates[1],
          lng: selectedPark.geometry.coordinates[0]
         }}
         onCloseClick={()=>{
           setSelectedPark(null);
         }}
         >
           <div>
             <h2>{selectedPark.properties.NAME}</h2>
             <p>{selectedPark.properties.DESCRIPTIO}</p>
           </div>
           </InfoWindow>
      )}
    </GoogleMap>
  );
  }

  const WrappedMap = withScriptjs(withGoogleMap(Map)); // pass map that you are going to render on the screen

  export default function App() {
    return (
      <div style={{width: '100vw',height: '100vh'}}>
        <WrappedMap
         googleMapURL = {`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyDSiHSy5W40gQJqhQhpYS0MuPHpWwg_GMw`}
         loadingElement = {<div style={{height: "100%"}} />}
         containerElement = {<div style={{height: "100%"}} />}
         mapElement = {<div style={{height: "100%"}} />}
         />
      </div>
    )
  }


