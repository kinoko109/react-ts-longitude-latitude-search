import React, { Component } from 'react';
import styled from 'styled-components';

export default class SearchForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      place: '東京',
    }
  }

  /**
   * @desc 入力された文字列をstateにセット
   * @param {String} place - inputに入力される文字列
   */
  handlePlace(place) {
    this.setState({ place });
  }

  /**
   * @desc submit時の制御
   * @param {event object} event - イベントオブジェクト
   */
  handleSubmit(event) {
    event.preventDefault();
    this.props.handleSubmit(this.state.place);
  }

  render() {
    return(
      <form onSubmit={event => this.handleSubmit(event)}>
        <InputText 
          value={this.state.place}
          onChange={event => this.handlePlace(event.target.value)}
        />
        <InputSubmit 
          value="検索"
        />
      </form>
    );
  }
}

const InputText = styled.input.attrs({
  type: 'text',
})`
  border-radius: 5px;
  border: 1px solid #ccc;
  font-size: 16px;
  height: 30px;
  padding: 5px 10px;
  width: 200px;
`;

const InputSubmit = styled.input.attrs({
  type: 'submit',
})`
  border-radius: 5px;
  height: 30px;
  margin-left: 20px;
  width: 100px;
`;
