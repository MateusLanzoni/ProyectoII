import React, { useEffect, useRef } from 'react';
import './a.css';

function RCLinica() {
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

      const rutaClinicaStops = [
        { lat: 6.245913, lng: -75.603153, title: "Clínica Las Américas" },
        { lat: 6.263920, lng: -75.431600, title: "Sector Belén Rionegro" },
        { lat: 6.257140, lng: -75.439080, title: "Glorieta del Tránsito" },
        { lat: 6.256350, lng: -75.444620, title: "Puente de Cuatro Esquinas" },
        { lat: 6.254280, lng: -75.452100, title: "Supermercado Éxito Rionegro" },
        { lat: 6.252920, lng: -75.454880, title: "CC San Nicolás" },
        { lat: 6.250540, lng: -75.456730, title: "CC Sabana" },
        { lat: 6.248160, lng: -75.458670, title: "Supermercado Jumbo" },
        { lat: 6.243970, lng: -75.463220, title: "Calle Madera" },
        { lat: 6.211022, lng: -75.554935, title: "EIA Las Palmas" } // Añadir más paradas según sea necesario
    ];

    rutaClinicaStops.forEach(function(stop) {
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

  return <div ref={mapRef} className="rutaClinica" />;
}

export default RCLinica;