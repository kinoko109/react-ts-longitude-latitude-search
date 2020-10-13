import React from 'react';
import styled from 'styled-components';
import { HotelRowProps } from './types';

export const HotelRow: React.FC<HotelRowProps> = (props) => {
  const { name, url } = props;
  return (
    <Item>
      <Link href={url}>{name}</Link>
    </Item>
  );
};

const Item = styled.div``;

const Link = styled.a``;
