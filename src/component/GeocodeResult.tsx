import React from "react";
import styled from "styled-components";

const GeocodeResult = ({ address, lat, lng }) => (
  <List>
    <li>住所：{address}</li>
    <li>緯度{lat}</li>
    <li>軽度{lng}</li>
  </List>
);

const List = styled.ul`
  width: 60%;
  margin: 20px auto 0;
  text-align: left;
`

export default GeocodeResult;
