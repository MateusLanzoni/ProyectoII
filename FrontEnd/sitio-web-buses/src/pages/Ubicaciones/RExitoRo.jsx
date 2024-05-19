import React, { useEffect, useRef } from 'react';
import './a.css';

function RExitoRo() {
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

      const rutaExitoRobledoStops = [
        { lat: 6.270882, lng: -75.599620, title: "Éxito de Robledo" },
        { lat: 6.263150, lng: -75.597110, title: "Rotonda de Colombia con la 80" },
        { lat: 6.257390, lng: -75.593860, title: "Avenida Centenario" },
        { lat: 6.254320, lng: -75.590780, title: "Centro Comercial Obelisco" },
        { lat: 6.250980, lng: -75.586520, title: "Carrera 78" },
        { lat: 6.243310, lng: -75.579380, title: "Edificio Inteligente" },
        { lat: 6.250000, lng: -75.576820, title: "La Gloria de la 33" },
        { lat: 6.245910, lng: -75.574960, title: "Paradero de Exposiciones" },
        { lat: 6.237840, lng: -75.569620, title: "San Diego" },
        { lat: 6.227650, lng: -75.561230, title: "Loma El Indio" },
        { lat: 6.207570, lng: -75.557106, title: "Sancho Paisa" },
        { lat: 6.211022, lng: -75.554935, title: "EIA Las Palmas" }
    ];

    rutaExitoRobledoStops.forEach(function(stop) {
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

  return <div ref={mapRef} className="rutaExitoRo" />;
}
export default RExitoRo
