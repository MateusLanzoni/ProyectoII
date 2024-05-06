import React from 'react';
import './a.css';
import {
  APIProvider,
  Map,
  AdvancedMarker,
  Pin,
  InfoWindow,
} from "@vis.gl/react-google-maps";


function RCLinica() {
  let positon = {lat: 6.2476, lng: -75.5658};
  let EIA = {lat: 6.1566, lng: -75.5176};

  function initMap() {
    const myLatLng = { lat: 6.2476, lng: -75.5658 };
    const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: myLatLng,
    });
    new google.maps.Marker({
    position: myLatLng,
    map,
    title: "Hello World!",
    });
  }



  return (
    <APIProvider apiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
      <div className='rutaClinica'>
        {initMap()}
      </div>
    </APIProvider>
  );
}

export default RCLinica;
