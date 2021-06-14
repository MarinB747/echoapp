import React from "react";
import { GoogleMap, useLoadScript } from "@react-google-maps/api";
const center = { lat: 45.490841, lng: 18.09293 };
const mapStyle = {
  width: "100vw",
  height: "100vh",
  position: "absolute",
  zIndex: "-1"
};
export function Mapa() {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_KEY
  });
  if (loadError) return "Error Loading Map";
  if (!isLoaded) return "Loading Map";
  return (
    <>
      <GoogleMap
        options={{ fullscreenControl: false, zoomControl: false }}
        mapContainerStyle={mapStyle}
        zoom={14}
        center={center}
      />
    </>
  );
}
