import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvents,
} from "react-leaflet";

import { useState } from "react";

import L from "leaflet";

import "leaflet/dist/leaflet.css";

/* =========================================
   FIX LEAFLET MARKER ICONS
========================================= */

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png",

  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png",

  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png",
});

/* =========================================
   RESTAURANT LOCATION
========================================= */

const RESTAURANT_LOCATION = [
  24.8964922,
  67.0453184,
];

/* =========================================
   CUSTOMER LOCATION MARKER
========================================= */

function LocationMarker({ onLocationSelect }) {
  const [position, setPosition] = useState(null);

  useMapEvents({
    click(event) {
      const newPosition = [
        event.latlng.lat,
        event.latlng.lng,
      ];

      setPosition(newPosition);

      onLocationSelect({
        lat: event.latlng.lat,
        lng: event.latlng.lng,
      });
    },
  });

  return position ? (
    <Marker position={position}>
      <Popup>
        <strong>Your Delivery Location</strong>
        <br />
        Selected location
      </Popup>
    </Marker>
  ) : null;
}

/* =========================================
   DELIVERY MAP
========================================= */

function DeliveryMap({
  onLocationSelect,
}) {
  return (
    <div className="delivery-map-wrapper">

      {/* HEADER */}

      <div className="delivery-map-header">

        <div>

          <span className="map-label">
            DELIVERY LOCATION
          </span>

          <h4>
            Select your location
          </h4>

        </div>

        <span className="map-pin-text">
          Click on the map
        </span>

      </div>

      {/* MAP */}

      <div className="delivery-map">

        <MapContainer
          center={RESTAURANT_LOCATION}
          zoom={13}
          scrollWheelZoom={true}
          style={{
            height: "280px",
            width: "100%",
          }}
        >

          <TileLayer
            attribution="&copy; OpenStreetMap contributors"
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {/* RESTAURANT */}

          <Marker
            position={RESTAURANT_LOCATION}
          >

            <Popup>
              <strong>
                Jumma Gujjar Nihari
              </strong>

              <br />

              Restaurant Location
            </Popup>

          </Marker>

          {/* CUSTOMER */}

          <LocationMarker
            onLocationSelect={
              onLocationSelect
            }
          />

        </MapContainer>

      </div>

      <p className="map-help">
        📍 Click on the map to select your
        exact delivery location.
      </p>

    </div>
  );
}

export default DeliveryMap;