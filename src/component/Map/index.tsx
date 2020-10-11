import React from 'react';
import {
  withGoogleMap,
  GoogleMap,
  Marker,
  withScriptjs,
} from 'react-google-maps';
import styled from 'styled-components';
import { InnerMapProps, MapProps } from './types';

// TODO: 定義場所を要検討
const InnerMap = withScriptjs(
  withGoogleMap<InnerMapProps>((props) => {
    const { position } = props;

    return (
      <GoogleMap defaultZoom={15} defaultCenter={position} center={position}>
        <Marker position={position} />
      </GoogleMap>
    );
  }),
);

export const Map: React.FC<MapProps> = (props) => {
  const { lat, lng } = props;

  const position = { lat, lng };

  return (
    <InnerMap
      containerElement={<Container />}
      mapElement={<MapDiv />}
      // positionにはlat,lngのオブジェクトを渡す
      position={position}
      googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
      loadingElement={<MapDiv />}
    />
  );
};

const Container = styled.div``;

const MapDiv = styled.div`
  height: 400px;
`;
