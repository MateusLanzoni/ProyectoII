import React, { useEffect, useRef } from 'react';
import './a.css';

function RSanAntonio() {
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

      const rutaSanAntonioStops = [
        { lat: 6.251470, lng: -75.563090, title: "Parque San Antonio" },
        { lat: 6.248700, lng: -75.564320, title: "Torres de Bomboná" },
        { lat: 6.246630, lng: -75.560740, title: "Parque de La Milagrosa" },
        { lat: 6.234520, lng: -75.561780, title: "La Isla" },
        { lat: 6.207570, lng: -75.557106, title: "Sancho Paisa" },
        { lat: 6.211022, lng: -75.554935, title: "EIA Las Palmas" } // Añadir más paradas según sea necesario
    ];

    rutaSanAntonioStops.forEach(function(stop) {
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

  return <div ref={mapRef} className="rutaSanAntonio" />;
}
export default RSanAntonio

