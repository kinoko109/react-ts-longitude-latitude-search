import React, { useState} from 'react';
import styled from 'styled-components';

type SearchFormProps = {
  onSubmit: (address: string) => void;
}

export const SearchForm: React.FC<SearchFormProps> = (props) => {
  const {onSubmit} = props;

  const [address, setAddress] = useState<string>("東京");

  /**
   * @desc 入力された文字列をstateにセット
   * @param {String} place - inputに入力される文字列
   */
  const handlePlace = (place: string) => {
    setAddress(place);
  }

  /**
   * @desc submit時の制御
   * @param {event object} event - formイベントオブジェクト
   */
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit(address);
  }

    return(
      <form onSubmit={event => handleSubmit(event)}>
        <InputText
          value={address}
          onChange={event => handlePlace(event.target.value)}
        />
        <InputSubmit
          value="検索"
        />
      </form>
    );
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