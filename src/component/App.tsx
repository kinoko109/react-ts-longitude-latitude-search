import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { API_KEY, GEOCODE_URL, errorMessage } from '../const';
import { AppStateTypes } from './types';
import { Map } from './Map';
import { SearchForm } from './SearchForm';
import { GeocodeResult } from './GeocodeResult';

export const App = () => {
  const [appState, setAppState] = useState<AppStateTypes>({
    address: '',
    lat: 0,
    lng: 0,
  });
  const [errorState, setErrorState] = useState<string>('');

  /**
   * @desc エラー用の結果表示
   * @param {String} errorText - エラーメッセージ
   */
  const showErrorMessage = (errorText: string) => {
    setErrorState(errorText);
  };

  /**
   * @desc submit押下時の挙動
   * @param {String} place - 住所
   */
  const handlePlaceSubmit = (place: string) => {
    axios
      .get(GEOCODE_URL, { params: { address: place, key: API_KEY } })
      // 成功時
      .then((response) => {
        const { data } = response;
        const [resultData] = data.results;

        switch (data.status) {
          case 'OK': {
            const { location } = resultData.geometry;

            setAppState({
              address: resultData.formatted_address,
              lat: location.lat,
              lng: location.lng,
            });
            break;
          }
          case 'ZERO_RESULTS': {
            showErrorMessage(errorMessage[0]);
            break;
          }
          default: {
            showErrorMessage(errorMessage[1]);
          }
        }
      })
      .catch(() => {
        showErrorMessage(errorMessage[2]);
      });
  };

  return (
    <Wrapper>
      <h1>緯度経度検索</h1>
      <SearchForm onSubmit={(place) => handlePlaceSubmit(place)} />
      <GeocodeResult
        address={appState.address || errorState}
        lat={appState.lat}
        lng={appState.lng}
      />
      <Map lat={appState.lat} lng={appState.lng} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  text-align: center;
`;
