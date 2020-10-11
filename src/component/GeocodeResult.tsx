import React from 'react';
import styled from 'styled-components';

type GeocodeResultProps = {
  address: string;
  lat: number;
  lng: number;
};

export const GeocodeResult: React.FC<GeocodeResultProps> = (props) => {
  const { address, lat, lng } = props;

  return (
    <List>
      <Item>
        住所：
        {address}
      </Item>
      <Item>
        緯度
        {lat}
      </Item>
      <Item>
        軽度
        {lng}
      </Item>
    </List>
  );
};

const List = styled.ul`
  width: 60%;
  margin: 20px auto 0;
  text-align: left;
`;

const Item = styled.li``;
