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

function RCLinica () {
  const positon = {lat: 6.2476, lng: -75.5658}
  const EIA = {lat:6.1566, lng: -75.5176}
  return (
    <APIProvider apiKey="AIzaSyAqSAPSOBWQXZrrtLjy1PJSd7ud8wnjjXM">
      <div className='rutaClinica'>
        <Map zoom={11} center={positon}>
          <AdvancedMarker position={EIA}></AdvancedMarker>
          <AdvancedMarker position={positon}></AdvancedMarker>
       </Map>
      </div>
    </APIProvider>
  )
}
export default RCLinica
