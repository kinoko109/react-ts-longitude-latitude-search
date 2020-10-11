import React, {Component, useState} from "react";
import styled from "styled-components";
import axios from "axios";

import { API_KEY, GEOCODE_URL, errorMessage } from "../const";

import { GeocodeResult } from "./GeocodeResult";
import { Map } from "./Map";
import { SearchForm } from "./SearchForm";

type AppTypes = {
  address: string,
  errorMessage: string,
  lat: number,
  lng: number,
}

export const App = () => {
  const [appState, setAppState] = useState<AppTypes>({ address: "", errorMessage: "", lat: 0, lng: 0});
  // const [error, setError] = useState();

  /**
   * @desc エラー用の結果表示
   * @param {String} errorMessage - エラーメッセージ
   */
  const showErrorMessage = (errorMessage: string) => {
    setAppState({
      address: "",
      errorMessage: errorMessage,
      lat: 0,
      lng: 0,
    });
  }

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
          case "OK": {
            const location = resultData.geometry.location;

            setAppState({
              address: resultData.formatted_address,
              errorMessage: "",
              lat: location.lat,
              lng: location.lng,
            });
            break;
          }
          case "ZERO_RESULTS": {
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
  }

    return (
      <Wrapper>
        <h1>緯度経度検索</h1>
        <SearchForm onSubmit={(place) => handlePlaceSubmit(place)} />
        <GeocodeResult
          address={appState.address || appState.errorMessage}
          lat={appState.lat}
          lng={appState.lng}
        />
        <Map lat={appState.lat} lng={appState.lng} />
      </Wrapper>
    );
}

const Wrapper = styled.div`
  text-align: center;
`;
