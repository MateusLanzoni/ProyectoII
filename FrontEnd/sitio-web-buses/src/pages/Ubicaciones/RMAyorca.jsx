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

function RMAyorca () {
  const positon = {lat: 6.2476, lng: -75.5658}
  return (
    <APIProvider apiKey= {import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
      <div className='rutaMayorca'>
       <Map zoom={11} center={positon}></Map>
     </div>
    </APIProvider>
  )
}
export default RMAyorca
