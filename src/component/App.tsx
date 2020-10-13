import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { API_KEY, GEOCODE_URL, errorMessage } from '../const';
import { AppStateTypes, ErrorMessageTypes } from './types';
import { Map } from './Map';
import { SearchForm } from './SearchForm';
import { GeocodeResult } from './GeocodeResult';
import { HotelTable } from './HotelTable';

export const App = () => {
  const [appState, setAppState] = useState<AppStateTypes>({
    address: '',
    location: {
      lat: 0,
      lng: 0,
    },
  });

  const [hotels, setHotels] = useState([
    {
      id: 1,
      name: 'hoge',
      url: 'https://www.google.com/',
    },
    {
      id: 2,
      name: 'fuga',
      url: 'https://www.google.com/',
    },
  ]);

  console.log(setHotels([]));

  // TODO: 型にErrorMessageTypesを定義したいが、errorStateがundefinedになる可能性があるため要検討
  const [errorState, setErrorState] = useState<string>('');

  /**
   * @desc エラー用の結果表示
   * @param {String} errorText - エラーメッセージ
   */
  const showErrorMessage = (errorText: ErrorMessageTypes) => {
    setErrorState(errorText);
  };

  /**
   * @desc submit押下時の挙動
   * @param {String} place - 住所
   */
  // TODO: 別ファイルに定義したい
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
              location,
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
      <h1>ホテル検索</h1>
      <SearchForm onSubmit={(place) => handlePlaceSubmit(place)} />
      <FlexDiv>
        <MapArea>
          <Map position={appState.location} />
        </MapArea>
        <GeocodeResultArea>
          <GeocodeResult
            address={appState.address || errorState}
            location={appState.location}
          />
          <HotelTable hotels={hotels} />
        </GeocodeResultArea>
      </FlexDiv>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  text-align: center;
`;

const FlexDiv = styled.div`
  display: flex;
`;

const MapArea = styled.div`
  width: 50%;
`;

const GeocodeResultArea = styled(FlexDiv)`
  flex-direction: column;
  width: 50%;
`;
