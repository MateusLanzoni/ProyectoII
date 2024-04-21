"use client";
import React from 'react'
import './a.css'
import {
  APIProvider,
  Map,
  AdvancedMarker,
  Pin,
  InfoWindow,
} from "@vis.gl/react-google-maps"

function RSOABosque () {
  const positon = {lat: 6.2476, lng: -75.5658}
  return (
    <APIProvider apiKey="AIzaSyAqSAPSOBWQXZrrtLjy1PJSd7ud8wnjjXM">
      <div className='rutaSofaABosque'>
        <Map zoom={11} center={positon}></Map>
     </div>
    </APIProvider>
  )
}
export default RSOABosque

