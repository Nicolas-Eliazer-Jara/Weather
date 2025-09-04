"use client";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

const customIcon = new L.Icon({
  iconUrl: "/leaflet/marker-icon.png",
  iconSize: [30, 30],
  iconAnchor: [15, 30],
  shadowSize: [41, 41],
});

export default function WeatherMap({ lat, lon }: { lat: number; lon: number }) {
  return (
    <div className="flex items-center justify-center w-full h-[320px] lg:h-[350px] rounded-2xl mt-4 bg-white shadow-md p-2">
      <MapContainer
        center={[lat, lon]}
        zoom={10}
        scrollWheelZoom={false}
        className="h-full w-full rounded-2xl shadow-inner"
      >
        <TileLayer
          attribution="&copy; OpenStreetMap contributors"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[lat, lon]} icon={customIcon}>
          <Popup>Ubicación del clima</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}
