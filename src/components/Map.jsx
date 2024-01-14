// import { useNavigate, useSearchParams } from "react-router-dom";
// import styles from "./Map.module.css";
// import {
//   MapContainer,
//   TileLayer,
//   Marker,
//   Popup,
//   useMap,
//   useMapEvents,
// } from "react-leaflet";
// import { useEffect, useState } from "react";
// import { useCities } from "../context/CitiesContext";
// import PropTypes from "prop-types";
// import { useGeolocation } from "../hooks/useGeolocation";
// import { useUrlPosition } from "../hooks/useUrlPosition";

// function Map() {
//   const { cities } = useCities();
//   const [mapPosition, setMapPosition] = useState([40, 0]);
//   const [searchParams] = useSearchParams();
//   const {
//     isLoading: isLoadingPosition,
//     position: geolocationPosition,
//     getPosition,
//   } = useGeolocation();
//   const [mapLat, mapLng] = useUrlPosition();

//   const mapLat = searchParams.get("lat");
//   const mapLng = searchParams.get("lng");

//   useEffect(
//     function () {
//       if (mapLat && mapLng) setMapPosition([mapLat, mapLng]);
//     },
//     [mapLat, mapLng]
//   );

//   useEffect(
//     function () {
//       if (geolocationPosition)
//         setMapPosition([geolocationPosition.lat, geolocationPosition.lng]);
//     },
//     [geolocationPosition]
//   );
//   return (
//     <>
//       <div className={styles.mapContainer}>
//         {!geolocationPosition && (
//           <button type="position" onClick={getPosition}>
//             {isLoadingPosition ? "Loading..." : "Use your position"}
//           </button>
//         )}
//         <MapContainer
//           center={mapPosition}
//           zoom={13}
//           scrollWheelZoom={true}
//           className={styles.map}
//         >
//           {/*added the fr/hot myself , it is not part of the documentation */}
//           <TileLayer
//             attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//             url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
//           />
//           {cities.map((city) => (
//             <Marker
//               position={[city.position.lat, city.position.lng]}
//               key={city.id}
//             >
//               <Popup>
//                 <span>{city.emoji}</span>
//                 <span>{city.cityName}</span>
//               </Popup>
//             </Marker>
//           ))}
//           <ChangeCenter position={mapPosition} />
//           <DetectClick />
//         </MapContainer>
//       </div>
//     </>
//   );
// }

// // function ChangeCenter({ position }) {
// //   const map = useMap();
// //   map.setView(position);
// //   return null;
// // }

// function ChangeCenter({ position }) {
//   const map = useMap();

//   // Check if position is not undefined and contains valid coordinates
//   if (
//     position &&
//     position.length === 2 &&
//     !isNaN(position[0]) &&
//     !isNaN(position[1])
//   ) {
//     map.setView(position);
//   }

//   return null;
// }

// function DetectClick() {
//   //WHAT THIS useNavigate does it that it redirect the page to the place u want it to go to
//   const navigate = useNavigate();

//   useMapEvents({
//     click: (e) => {
//       navigate(`form?lat=${e.latlng.lat}&lng=${e.latlng.lng}`);
//     },
//   });
// }

// ChangeCenter.propTypes = {
//   position: PropTypes.arrayOf(PropTypes.number),
// };

// export default Map;


import { useNavigate } from "react-router-dom";
import styles from "./Map.module.css";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMap,
  useMapEvents,
} from "react-leaflet";
import { useEffect, useState } from "react";
import { useCities } from "../context/CitiesContext";
import PropTypes from "prop-types";
import { useGeolocation } from "../hooks/useGeolocation";
import { useUrlPosition } from "../hooks/useUrlPosition";

function Map() {
  const { cities } = useCities();
  const [mapPosition, setMapPosition] = useState([40, 0]);
  const {
    isLoading: isLoadingPosition,
    position: geolocationPosition,
    getPosition,
  } = useGeolocation();

  const [mapLat, mapLng] = useUrlPosition();

  useEffect(() => {
    if (mapLat && mapLng) setMapPosition([mapLat, mapLng]);
  }, [mapLat, mapLng]);

  useEffect(() => {
    if (geolocationPosition)
      setMapPosition([geolocationPosition.lat, geolocationPosition.lng]);
  }, [geolocationPosition]);

  return (
    <>
      <div className={styles.mapContainer}>
        {!geolocationPosition && (
          <button type="position" onClick={getPosition}>
            {isLoadingPosition ? "Loading..." : "Use your position"}
          </button>
        )}
        <MapContainer
          center={mapPosition}
          zoom={13}
          scrollWheelZoom={true}
          className={styles.map}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
          />
          {cities.map((city) => (
            <Marker
              position={[city.position.lat, city.position.lng]}
              key={city.id}
            >
              <Popup>
                <span>{city.emoji}</span>
                <span>{city.cityName}</span>
              </Popup>
            </Marker>
          ))}
          <ChangeCenter position={mapPosition} />
          <DetectClick />
        </MapContainer>
      </div>
    </>
  );
}

function ChangeCenter({ position }) {
  const map = useMap();

  if (
    position &&
    position.length === 2 &&
    !isNaN(Number(position[0])) &&
    !isNaN(Number(position[1]))
  ) {
    map.setView(position);
  }

  return null;
}

function DetectClick() {
  const navigate = useNavigate();

  useMapEvents({
    click: (e) => {
      navigate(`form?lat=${e.latlng.lat}&lng=${e.latlng.lng}`);
    },
  });

  return null;
}

ChangeCenter.propTypes = {
  position: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.number, PropTypes.string])
  ),
};

export default Map;
