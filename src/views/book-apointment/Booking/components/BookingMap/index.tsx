import { GoogleMap, LoadScript, MarkerF } from "@react-google-maps/api";
import React, { FC } from "react";

interface Props {}

const BookingMap: FC<Props> = () => {
  const mapStyles = {
    height: "498px",
    width: "100%",
  };

  const defaultCenter = {
    lat: 40.712776,
    lng: -74.005974,
  };

  const markers = [
    { lat: 40.813776, lng: -74.005974 },
    { lat: 40.912876, lng: -74.006074 },
    { lat: 40.612976, lng: -74.006174 },
  ];

  return (
    <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}>
      <GoogleMap mapContainerStyle={mapStyles} zoom={10} center={defaultCenter}>
        {markers.map((marker, index) => (
          <MarkerF key={index} position={marker} />
        ))}
      </GoogleMap>
    </LoadScript>
  );
};

export { BookingMap };
