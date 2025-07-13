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
    <div className="flex items-center justify-center shadow-[inset_3px_3px_5px_2px_rgba(181,191,198,1)] w-[100%] h-[320px] sm:h-[308px] rounded-2xl  sm:mt-3  lg:mt-3  ">
      <MapContainer
        center={[lat, lon]}
        zoom={10}
        scrollWheelZoom={false}
        className="h-[92%] w-[97%] rounded-2xl shadow-[inset_3px_3px_5px_rgba(181,191,198,1)] text-[#6E7F8D]"
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
