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

function RRionegro () {
  const positon = {lat: 6.1416, lng: -75.4126}
  return (
    <APIProvider apiKey= "AIzaSyAqSAPSOBWQXZrrtLjy1PJSd7ud8wnjjXM">
      <div className='rutaRionegro'>
        <Map zoom={12} center={positon}></Map>
      </div>
    </APIProvider>
  )
}
export default RRionegro
