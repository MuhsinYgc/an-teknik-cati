"use client";

import { useMemo } from "react";
import L from "leaflet";
import { MapContainer, Marker, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

type OfficeMapProps = {
  lat: number;
  lng: number;
  defaultZoom: number;
  minZoom: number;
  googleMapsUrl: string;
  className?: string;
};

function goldPinIcon() {
  return L.divIcon({
    className: "office-leaflet-marker",
    html: `<div class="office-leaflet-marker-inner" aria-hidden="true">
      <svg width="36" height="44" viewBox="0 0 36 44" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M18 0C8.611 0 1 7.611 1 17c0 12.75 17 27 17 27s17-14.25 17-27C35 7.611 27.389 0 18 0z" fill="#1a1a1a" stroke="#D4AF37" stroke-width="2"/>
        <circle cx="18" cy="17" r="6" fill="#D4AF37"/>
      </svg>
    </div>`,
    iconSize: [36, 44],
    iconAnchor: [18, 44],
    popupAnchor: [0, -40],
  });
}

export default function OfficeMap({
  lat,
  lng,
  defaultZoom,
  minZoom,
  googleMapsUrl,
  className,
}: OfficeMapProps) {
  const icon = useMemo(() => goldPinIcon(), []);

  return (
    <div
      className={
        className ??
        "absolute inset-0 z-0 grayscale contrast-[0.92] brightness-[0.92] [&_.leaflet-control-attribution]:bg-black/50 [&_.leaflet-control-attribution]:text-[10px] [&_.leaflet-control-attribution]:text-white/70"
      }
    >
      <MapContainer
        center={[lat, lng]}
        zoom={defaultZoom}
        minZoom={minZoom}
        maxZoom={19}
        scrollWheelZoom
        zoomControl
        className="h-full w-full [&_.leaflet-tile-pane]:transition-opacity"
        attributionControl
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker
          position={[lat, lng]}
          icon={icon}
          eventHandlers={{
            click: () => {
              window.open(googleMapsUrl, "_blank", "noopener,noreferrer");
            },
          }}
        />
      </MapContainer>
    </div>
  );
}
