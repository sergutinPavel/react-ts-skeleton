export const SOME_REQUEST = 'SOME_REQUEST';
export const SOME_REQUEST_SUCCESS = 'SOME_REQUEST_SUCCESS';
export const SOME_REQUEST_FAILURE = 'SOME_REQUEST_FAILURE';
export const INCREASE_COUNTER = 'INCREASE_COUNTER';
export const RESET_COUNTER = 'RESET_COUNTER';

export interface ISomeRequest {
  type: 'SOME_REQUEST';
  payload: number;
}
export const SomeRequestAction = (payload: number): ISomeRequest => ({
  type: SOME_REQUEST,
  payload,
});

export interface ISomeRequestSuccess {
  type: 'SOME_REQUEST_SUCCESS';
  payload: any;
}
export const SomeRequestSuccessAction = (payload: any): ISomeRequestSuccess => ({
  type: SOME_REQUEST_SUCCESS,
  payload,
});

export interface ISomeRequestFailure {
  type: 'SOME_REQUEST_FAILURE';
  payload: any;
}
export const SomeRequestFailureAction = (payload: any): ISomeRequestFailure => ({
  type: SOME_REQUEST_FAILURE,
  payload,
});

export interface IIncreaseCounter {
  type: 'INCREASE_COUNTER';
  payload: number
}
export const IncreaseCounterAction = (payload: any): IIncreaseCounter => ({
  type: INCREASE_COUNTER,
  payload,
});

export interface IResetCounter {
  type: 'RESET_COUNTER';
  payload: number
}
export const ResetCounterAction = (payload: any): IResetCounter => ({
  type: RESET_COUNTER,
  payload,
});

export type IActions =
  ISomeRequest
  | ISomeRequestSuccess
  | ISomeRequestFailure
  | IIncreaseCounter
  | IResetCounter;
