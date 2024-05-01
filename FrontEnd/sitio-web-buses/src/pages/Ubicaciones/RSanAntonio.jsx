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

function RSanAntonio () {
  const positon = {lat: 6.2476, lng: -75.5658}
  const EIA = {lat:6.1566, lng: -75.5176}
  return (
    <APIProvider apiKey= {import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
      <div className='rutaSanAntonio'>
       <Map zoom={11} center={positon}>
          <AdvancedMarker position={EIA}></AdvancedMarker>
        </Map>
      </div>
    </APIProvider>
  )
}
export default RSanAntonio

