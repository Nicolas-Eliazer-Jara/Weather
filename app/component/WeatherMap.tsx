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
    <div className=" ml-5 mt-1 rounded-2xl bg-[#faf2e6] h-[365px]">
      <MapContainer
        center={[lat, lon]}
        zoom={10}
        scrollWheelZoom={false}
        className="h-[90%] w-[90%] rounded pt-10 pl-10 shadow-2xl shadow-gray-400"
      >
        <TileLayer
          attribution='&copy; OpenStreetMap contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[lat, lon]} icon={customIcon}>
          <Popup>Ubicación del clima</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}
