import React, { useEffect, useRef } from 'react';
import './a.css';

function RMAyorca() {
  const mapRef = useRef(null); // Reference to the div element where the map will be

  useEffect(() => {
    // Dynamically load the Google Maps script
    const loadGoogleMapsScript = () => {
      if (window.google) {
        initializeMap();
      } else {
        const script = document.createElement('script');
        script.src = `https://maps.googleapis.com/maps/api/js?key=${import.meta.env.VITE_GOOGLE_MAPS_API_KEY}`;
        script.async = true;
        script.defer = true;
        script.onload = () => initializeMap();
        document.body.appendChild(script);
      }
    };

    // Initialize the map and advanced marker
    const initializeMap = () => {
      const map = new window.google.maps.Map(mapRef.current, {
        zoom: 11,
        center: { lat: 6.2476, lng: -75.5658 },
      });

      const rutaMayorcaStops = [
        { lat: 6.162180355593321, lng: -75.6061433250502, title: "Paradero Centro Comercial Mayorca" },
        { lat: 6.170988, lng: -75.585761, title: "Viva Envigado" },
        { lat: 6.173834, lng: -75.591364, title: "Barrio Alcalá" },
        { lat: 6.175118, lng: -75.594299, title: "Esquina Carrera 42, sector Guanteros" },
        { lat: 6.178245, lng: -75.598138, title: "Carrera 33, lugar conocido como Famidrogas" },
        { lat: 6.172600, lng: -75.599190, title: "Sector Camino Verde, cerca al Hospital Manuel Uribe Ángel" },
        { lat: 6.181287, lng: -75.603945, title: "Centro Comercial City Plaza" },
        { lat: 6.191749, lng: -75.568170, title: "Mall San Lucas" },
        { lat: 6.199270, lng: -75.564675, title: "Loma Los Balsos" },
        { lat: 6.206225, lng: -75.556293, title: "Mall Indiana" },
        { lat: 6.207570, lng: -75.557106, title: "Sancho Paisa" },
        { lat: 6.211022, lng: -75.554935, title: "EIA Las Palmas" }
    ];

    rutaMayorcaStops.forEach(function(stop) {
        const marker = new google.maps.Marker({
            position: { lat: stop.lat, lng: stop.lng },
            map: map,
            title: stop.title
        });
    });
    };

    loadGoogleMapsScript();

    // Clean up the script tag on component unmount
    return () => {
      const scripts = document.querySelectorAll('script');
      for (let script of scripts) {
        if (script.src.includes('maps.googleapis.com')) {
          script.remove();
        }
      }
    };
  }, []);

  return <div ref={mapRef} className="rutaMayorca" />;
}
export default RMAyorca
