import React, { useEffect, useRef } from 'react';
import './a.css';

function RSOABosque() {
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

      const rutaBosquesStops = [
        { lat: 6.200410, lng: -75.575770, title: "Bahía Calle 25 Sur" },
        { lat: 6.200982, lng: -75.575090, title: "Clínica Especialidades Oftalmológicas" },
        { lat: 6.193214, lng: -75.576920, title: "Academia La Magia de Tus Bailes" },
        { lat: 6.190545, lng: -75.579895, title: "Supermercado Euro La Frontera" },
        { lat: 6.192120, lng: -75.564000, title: "San Lucas Plaza" },
        { lat: 6.197650, lng: -75.562360, title: "Complex de Los Balsos" },
        { lat: 6.205370, lng: -75.559680, title: "Restaurante Marmoleo" },
        { lat: 6.206225, lng: -75.556293, title: "Mall Indiana" },
        { lat: 6.207570, lng: -75.557106, title: "Sancho Paisa" },
        { lat: 6.211022, lng: -75.554935, title: "EIA Las Palmas" } // Añadir más paradas según sea necesario
    ];

    rutaBosquesStops.forEach(function(stop) {
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

  return <div ref={mapRef} className="rutaBosques" />;
}
export default RSOABosque

