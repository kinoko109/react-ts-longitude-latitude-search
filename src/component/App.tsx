import React, { Component } from "react";
import styled from "styled-components";
import axios from "axios";

import { API_KEY, GEOCODE_URL, errorMessage } from "../const";
import SearchForm from "./SearchForm";
import GeocodeResult from "./GeocodeResult";
import Map from "./Map";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      address: "",
      errorMessage: "",
      lat: 0,
      lng: 0,
    };
  }

  /**
   * @desc エラー用の結果表示
   * @param {String} errorMessage - エラーメッセージ
   */
  showErrorMessage(errorMessage) {
    this.setState({
      address: "",
      errorMessage: errorMessage,
      lat: "0",
      lng: "0",
    });
  }

  handlePlaceSubmit(place) {
    axios
      .get(GEOCODE_URL, { params: { address: place, key: API_KEY } })
      // 成功時
      .then((response) => {
        console.log(response);
        const { data } = response;
        const [resultData] = data.results;
        switch (data.status) {
          case "OK": {
            const location = resultData.geometry.location;
            this.setState({
              address: resultData.formatted_address,
              lat: location.lat,
              lng: location.lng,
            });
            break;
          }
          case "ZERO_RESULTS": {
            this.showErrorMessage(errorMessage[0]);
            break;
          }
          default: {
            this.showErrorMessage(errorMessage[1]);
          }
        }
      })
      .catch(() => {
        this.showErrorMessage(errorMessage[2]);
      });
  }

  render() {
    return (
      <Wrapper>
        <h1>緯度経度検索</h1>
        <SearchForm handleSubmit={(place) => this.handlePlaceSubmit(place)} />
        <GeocodeResult address={this.state.address || this.state.errorMessage} lat={this.state.lat} lng={this.state.lng} />
        <Map lat={this.state.lat} lng={this.state.lng} />
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  text-align: center;
`;

export default App;
