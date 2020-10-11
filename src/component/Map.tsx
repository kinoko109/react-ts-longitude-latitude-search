import React from "react";
import { withGoogleMap, GoogleMap, Marker } from "react-google-maps";
import styled from "styled-components";

type InnerMapProps = {
  position: {
    lat: number;
    lng: number;
  };
};

const InnerMap = withGoogleMap<InnerMapProps>((props) => {
  const { position } = props;

  return (
    <GoogleMap defaultZoom={15} defaultCenter={position} center={position}>
      <Marker position={position} />
    </GoogleMap>
  );
});

type MapProps = {
  lat: number;
  lng: number;
};

export const Map: React.FC<MapProps> = (props) => {
  const { lat, lng } = props;

  const position = { lat, lng };

  return (
    <InnerMap
      containerElement={<Container />}
      mapElement={<MapDiv />}
      // positionにはlat,lngのオブジェクトを渡す
      position={position}
    />
  );
};

const Container = styled.div``;

const MapDiv = styled.div`
  height: 400px;
`;
