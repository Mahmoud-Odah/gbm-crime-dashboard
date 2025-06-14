"use client";

import React, { useEffect, useState } from "react";
import { MapContainer, Marker, Popup, useMap } from "react-leaflet";
import { Icon } from "leaflet";
import { crimeData, CrimeData } from "@/lib/data";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTheme } from "next-themes";
import "leaflet/dist/leaflet.css";

const createCustomIcon = (
  severity: "low" | "medium" | "high" | "critical",
  theme: string = "light"
) => {
  const colors = {
    low: theme === "dark" ? "#10B981" : "#059669",
    medium: theme === "dark" ? "#F59E0B" : "#D97706",
    high: theme === "dark" ? "#EF4444" : "#DC2626",
    critical: theme === "dark" ? "#7C2D12" : "#991B1B",
  };

  const color = colors[severity] || "#6B7280";

  return new Icon({
    iconUrl: `data:image/svg+xml;base64,${btoa(`
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="8" fill="${color}" stroke="#ffffff" stroke-width="2"/>
        <circle cx="12" cy="12" r="4" fill="#ffffff"/>
      </svg>
    `)}`,
    iconSize: [24, 24],
    iconAnchor: [12, 12],
    popupAnchor: [0, -12],
  });
};

function MapThemeUpdater() {
  const map = useMap();

  useEffect(() => {
    const lightTileUrl = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";

    const newTileLayer = new (window as any).L.TileLayer(lightTileUrl, {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    });

    map.eachLayer((layer: any) => {
      if (layer instanceof (window as any).L.TileLayer) {
        map.removeLayer(layer);
      }
    });

    map.addLayer(newTileLayer);
  }, [map]);

  return null;
}

export function CrimeMap() {
  const { t } = useLanguage();
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="w-full h-[430px] bg-muted rounded-lg flex items-center justify-center">
        <div className="text-muted-foreground">Loading map...</div>
      </div>
    );
  }

  return (
    <div className="w-full h-[430px] rounded-lg overflow-hidden border">
      <MapContainer
        center={[24.5, 55.5]}
        zoom={7}
        style={{ height: "100%", width: "100%" }}
        className="transition-all duration-300"
      >
        <MapThemeUpdater />
        {crimeData.map((crime: CrimeData) => (
          <Marker
            key={crime.id}
            position={[crime.lat, crime.lng]}
            icon={createCustomIcon(crime.severity, theme)}
          >
            <Popup>
              <div className="space-y-2">
                <div className="font-semibold">
                  {t[crime.type as keyof typeof t] || crime.type}
                </div>
                <div className="text-sm">
                  <div>
                    <strong>{t.emirate || "Emirate"}:</strong>{" "}
                    {t[
                      crime.emirate
                        .toLowerCase()
                        .replace(/\s+/g, "") as keyof typeof t
                    ] || crime.emirate}
                  </div>
                  <div>
                    <strong>{t.severity || "Severity"}:</strong>{" "}
                    <span
                      className={`font-medium ${
                        crime.severity === "critical"
                          ? "text-red-700"
                          : crime.severity === "high"
                          ? "text-red-600"
                          : crime.severity === "medium"
                          ? "text-yellow-600"
                          : "text-green-600"
                      }`}
                    >
                      {t[crime.severity as keyof typeof t]}
                    </span>
                  </div>
                  <div>
                    <strong>{t.date || "Date"}:</strong>{" "}
                    {new Date(crime.date).toLocaleDateString()}
                  </div>
                  <div>
                    <strong>{t.responseTime || "Response Time"}:</strong>{" "}
                    {crime.responseTime} {t.minutes}
                  </div>
                  <div>
                    <strong>{t.status || "Status"}:</strong>{" "}
                    {crime.cleared
                      ? t.cleared || "Cleared"
                      : t.pending || "Pending"}
                  </div>
                </div>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}
