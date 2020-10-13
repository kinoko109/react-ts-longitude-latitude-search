import React from 'react';
import styled from 'styled-components';
import { AppStateTypes } from '../types';

export const GeocodeResult: React.FC<AppStateTypes> = (props) => {
  const { address, location } = props;

  return (
    <List>
      <Item>
        住所：
        {address}
      </Item>
      <Item>
        緯度
        {location.lat}
      </Item>
      <Item>
        軽度
        {location.lng}
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
