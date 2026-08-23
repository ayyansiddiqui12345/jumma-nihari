import { MapContainer, TileLayer, Marker, useMapEvents } from "react-leaflet";
import { useState } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Fix Leaflet marker icons
delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png",
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png",
});

const RESTAURANT_LOCATION = [24.8964922, 67.0453184];

function LocationMarker({ onLocationSelect }) {
  const [position, setPosition] = useState(null);

  useMapEvents({
    click(e) {
      const newPosition = [e.latlng.lat, e.latlng.lng];

      setPosition(newPosition);

      onLocationSelect({
        lat: e.latlng.lat,
        lng: e.latlng.lng,
      });
    },
  });

  return position ? <Marker position={position} /> : null;
}

function DeliveryMap({ onLocationSelect }) {
  return (
    <div className="delivery-map-wrapper">

      <div className="delivery-map-header">
        <div>
          <span className="map-label">DELIVERY LOCATION</span>
          <h4>Select your location</h4>
        </div>

        <span className="map-pin-text">
          Click on the map
        </span>
      </div>

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
            attribution='&copy; OpenStreetMap contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          <Marker position={RESTAURANT_LOCATION} />

          <LocationMarker
            onLocationSelect={onLocationSelect}
          />

        </MapContainer>
      </div>

      <p className="map-help">
        📍 Tap anywhere on the map to select your delivery location.
      </p>

    </div>
  );
}

export default DeliveryMap;