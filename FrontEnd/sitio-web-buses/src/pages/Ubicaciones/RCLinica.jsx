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

      const directionsService = new google.maps.DirectionsService();
      const directionsRenderer = new google.maps.DirectionsRenderer({
        map: map,
        polylineOptions: {
          strokeColor: '#FF0000',
          strokeOpacity: 0.8,
          strokeWeight: 6
        }
      });

      const rutaClinicaStops = [
        { lat: 6.211745, lng: -75.594203, title: "Clínica Las Américas" },
        { lat: 6.238489, lng: -75.603002, title: "Glorieta Santa Gema" },
        { lat: 6.239123, lng: -75.590589, title: "Solo Kukos / Palace" },
        { lat: 6.237100, lng: -75.569929, title: "San Diego" },
        { lat: 6.195436, lng: -75.547296, title: "Mirador Palmas" },
        { lat: 6.171274, lng: -75.546824, title: "Palmas" },
        { lat: 6.153486, lng: -75.532917, title: "Mall Indiana / Alto de Palmas" },
        { lat: 6.156926, lng: -75.518177, title: "EIA Las Palmas" },
    ];

    rutaClinicaStops.forEach(function(stop) {
        const marker = new google.maps.Marker({
            position: { lat: stop.lat, lng: stop.lng },
            map: map,
            title: stop.title
        });
    });

    const clinicaPath = new google.maps.Polyline({
      path: rutaClinicaStops.map(stop => ({ lat: stop.lat, lng: stop.lng })),
      geodesic: true,
      strokeColor: '#FF0000',
      strokeOpacity: 1.0,
      strokeWeight: 2
    }); 
    clinicaPath.setMap(map);

    calculateAndDisplayRoute(directionsService, directionsRenderer);
    };

    const calculateAndDisplayRoute = (directionsService, directionsRenderer) => {
      const waypts = [
        { lat: 6.211745, lng: -75.594203, stopover: true },
        { lat: 6.238489, lng: -75.603002, stopover: true },
        { lat: 6.239123, lng: -75.590589, stopover: true },
        { lat: 6.237100, lng: -75.569929, stopover: true },
        { lat: 6.195436, lng: -75.547296, stopover: true },
        { lat: 6.171274, lng: -75.546824, stopover: true },
        { lat: 6.153486, lng: -75.532917, stopover: true },
        { lat: 6.156926, lng: -75.518177, stopover: true },
      ];

      directionsService.route({
        origin: { lat: 6.211745, lng: -75.594203 },
        destination: { lat:  6.156926, lng: -75.518177 },
        waypoints: waypts,
        travelMode: google.maps.TravelMode.DRIVING
      }, (response, status) => {
        if (status === google.maps.DirectionsStatus.OK) {
          directionsRenderer.setDirections(response);
        } else {
          window.alert('Directions request failed due to ' + status);
        }
      });
    };

    loadGoogleMapsScript();

    // Clean up the script tag on component unmount
    return () => {
      document.querySelectorAll('script').forEach(script => {
        if (script.src.includes('maps.googleapis.com') && script.onload) {
          script.onload = null;
        }
      });
    };
  }, []);
  return <div ref={mapRef} className="rutaClinica" />;
}
export default RCLinica;


