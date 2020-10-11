import { errorMessage } from '../../const';

export type AppStateTypes = {
  address: string;
  lat: number;
  lng: number;
};

type ErrorMessage = typeof errorMessage[keyof typeof errorMessage];

export type ErrorMessageTypes = ErrorMessage;
