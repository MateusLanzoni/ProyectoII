import React, { useEffect, useRef } from 'react';
import './a.css';

function RutaPredeterminada() {
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

    // Initialize the map and add markers
    const initializeMap = () => {
      const map = new window.google.maps.Map(mapRef.current, {
        zoom: 11,
        center: { lat: 6.200982, lng: -75.575090 }, // A central point for the map
      });

      // Marker colors for each route
      const colors = {
        clinica: 'http://maps.google.com/mapfiles/ms/icons/red-dot.png',
        mayorca: 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png',
        sanAntonio: 'http://maps.google.com/mapfiles/ms/icons/green-dot.png',
        rionegro: 'http://maps.google.com/mapfiles/ms/icons/yellow-dot.png',
        exitoRobledo: 'http://maps.google.com/mapfiles/ms/icons/purple-dot.png',
        bosques: 'http://maps.google.com/mapfiles/ms/icons/orange-dot.png' // Adding orange for the Bosques route
      };

      // All stops from all routes, with specific color for each route
      const allStops = [

        // Ruta Rionegro
        { lat: 6.178285, lng: -75.367920, title: "Sector Belén Rionegro", route: "rionegro" },//
        { lat: 6.160497, lng: -75.369010, title: "Glorieta del Tránsito", route: "rionegro" },
        { lat: 6.152817, lng: -75.369027, title: "Puente de Cuatro Esquinas", route: "rionegro" },
        { lat: 6.149092, lng: -75.378082, title: "Supermercado Éxito Rionegro", route: "rionegro" },
        { lat: 6.146634, lng: -75.379318, title: "CC San Nicolás", route: "rionegro" },
        { lat: 6.142199, lng: -75.380496, title: "Supermercado Jumbo", route: "rionegro" },
        { lat: 6.138285, lng: -75.384879, title: "Mall El Antojo", route: "rionegro" },
        { lat: 6.131672, lng: -75.399217, title: "Colegio Horizontes", route: "rionegro" },
        { lat: 6.124781, lng: -75.421564, title: "Complex de Llanogrande", route: "rionegro" },
        { lat: 6.142842, lng: -75.432941, title: "Glorieta el Tablazo", route: "rionegro" },
        { lat: 6.152020, lng: -75.435617, title: "Hospital San Vicente", route: "rionegro" },
        { lat: 6.176733, lng: -75.436511, title: "Glorieta Aeropuerto JMC", route: "rionegro" },
        { lat: 6.177627, lng: -75.448598, title: "Glorieta Sanjonia", route: "rionegro" },
        { lat: 6.171337, lng: -75.478401, title: "Peaje Variante Palmas", route: "rionegro" },
        { lat: 6.211022, lng: -75.554935, title: "EIA Las Palmas", route: "clinica" },

        // Ruta Mayorca
        { lat: 6.162508, lng: -75.6052413, title: "Paradero Centro Comercial Mayorca", route: "mayorca" },
        { lat: 6.177702, lng: -75.595260, title: "Viva Envigado", route: "mayorca" },
        { lat: 6.173689, lng: -75.596990, title: "Barrio Alcalá", route: "mayorca" },
        { lat: 6.168286, lng: -75.588198, title: "Esquina Carrera 42, sector Guanteros", route: "mayorca" },
        { lat: 6.164881, lng: -75.583104, title: "Carrera 33, lugar conocido como Famidrogas", route: "mayorca" },
        { lat: 6.160037, lng: -75.579685, title: "Sector Camino Verde, cerca al Hospital Manuel Uribe Ángel", route: "mayorca" },
        { lat: 6.164158, lng: -75.574841, title: "Centro Comercial City Plaza", route: "mayorca" },
        { lat: 6.180823, lng: -75.568105, title: "Mall San Lucas", route: "mayorca" },
        { lat: 6.186966, lng: -75.561448, title: "Loma Los Balsos", route: "mayorca" },
        { lat: 6.185159, lng: -75.553037, title: "Glorieta Parque Roa", route: "mayorca" },
        { lat: 6.153486, lng: -75.532917, title: "Mall Indiana / Alto de Palmas", route: "mayorca" },
    
        // Ruta Clínica
        { lat: 6.245913, lng: -75.603153, title: "Clínica Las Américas", route: "clinica" },
        { lat: 6.263920, lng: -75.431600, title: "Sector Belén Rionegro", route: "clinica" },
        { lat: 6.257140, lng: -75.439080, title: "Glorieta del Tránsito", route: "clinica" },
        { lat: 6.256350, lng: -75.444620, title: "Puente de Cuatro Esquinas", route: "clinica" },
        { lat: 6.254280, lng: -75.452100, title: "Supermercado Éxito Rionegro", route: "clinica" },
        { lat: 6.252920, lng: -75.454880, title: "CC San Nicolás", route: "clinica" },
        { lat: 6.250540, lng: -75.456730, title: "CC Sabana", route: "clinica" },
        { lat: 6.248160, lng: -75.458670, title: "Supermercado Jumbo", route: "clinica" },
        { lat: 6.243970, lng: -75.463220, title: "Calle Madera", route: "clinica" },
        { lat: 6.211022, lng: -75.554935, title: "EIA Las Palmas", route: "clinica" },
    
        // Ruta San Antonio
        { lat: 6.251470, lng: -75.563090, title: "Parque San Antonio", route: "sanAntonio" },
        { lat: 6.248700, lng: -75.564320, title: "Torres de Bomboná", route: "sanAntonio" },
        { lat: 6.246630, lng: -75.560740, title: "Parque de La Milagrosa", route: "sanAntonio" },
        { lat: 6.234520, lng: -75.561780, title: "La Isla", route: "sanAntonio" },
    
        // Ruta Éxito Robledo
        { lat: 6.270882, lng: -75.599620, title: "Éxito de Robledo", route: "exitoRobledo" },
        { lat: 6.263150, lng: -75.597110, title: "Rotonda de Colombia con la 80", route: "exitoRobledo" },
        { lat: 6.257390, lng: -75.593860, title: "Avenida Centenario", route: "exitoRobledo" },
        { lat: 6.254320, lng: -75.590780, title: "Centro Comercial Obelisco", route: "exitoRobledo" },
        { lat: 6.250980, lng: -75.586520, title: "Carrera 78", route: "exitoRobledo" },
        { lat: 6.243310, lng: -75.579380, title: "Edificio Inteligente", route: "exitoRobledo" },
        { lat: 6.250000, lng: -75.576820, title: "La Gloria de la 33", route: "exitoRobledo" },
        { lat: 6.245910, lng: -75.574960, title: "Paradero de Exposiciones", route: "exitoRobledo" },
        { lat: 6.237840, lng: -75.569620, title: "San Diego", route: "exitoRobledo" },
        { lat: 6.227650, lng: -75.561230, title: "Loma El Indio", route: "exitoRobledo" },
    
        // Ruta Bosques
        { lat: 6.200410, lng: -75.575770, title: "Bahía Calle 25 Sur", route: "bosques" },
        { lat: 6.200982, lng: -75.575090, title: "Clínica Especialidades Oftalmológicas", route: "bosques" },
        { lat: 6.193214, lng: -75.576920, title: "Academia La Magia de Tus Bailes", route: "bosques" },
        { lat: 6.190545, lng: -75.579895, title: "Supermercado Euro La Frontera", route: "bosques" },
        { lat: 6.192120, lng: -75.564000, title: "San Lucas Plaza", route: "bosques" },
        { lat: 6.197650, lng: -75.562360, title: "Complex de Los Balsos", route: "bosques" },
        { lat: 6.205370, lng: -75.559680, title: "Restaurante Marmoleo", route: "bosques" },
        { lat: 6.206225, lng: -75.556293, title: "Mall Indiana", route: "bosques" },
        { lat: 6.207570, lng: -75.557106, title: "Sancho Paisa", route: "bosques" },
        { lat: 6.211022, lng: -75.554935, title: "EIA Las Palmas", route: "bosques" }
    ];


      // Add markers to the map
      allStops.forEach(function(stop) {
        const marker = new google.maps.Marker({
          position: { lat: stop.lat, lng: stop.lng },
          map: map,
          icon: colors[stop.route],
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

  return <div ref={mapRef} className="rutaPredeterminada"/>;
}

export default RutaPredeterminada;
