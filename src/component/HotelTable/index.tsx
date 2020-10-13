import React from 'react';
import styled from 'styled-components';
import { HotelTableProps } from './types';
import { HotelRow } from '../HotelRow';

export const HotelTable: React.FC<HotelTableProps> = (props) => {
  const { hotels } = props;

  return (
    <Wrapper>
      <Title>ホテル名</Title>
      {hotels?.map((hotel) => (
        <HotelItem key={hotel.id}>
          <HotelRow name={hotel.name} url={hotel.url} />
        </HotelItem>
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div``;

const Title = styled.h1`
  text-align: center;
`;

const HotelItem = styled.div`
  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;
