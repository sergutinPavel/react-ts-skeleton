import * as GeneralActions from './general.actions';

export interface IGeneralState {
  counter: number;
  loading: boolean;
  error?: any;
}

export const initialState: IGeneralState = {
  counter: 0,
  loading: false,
  error: null
};

export default function reducer(state: IGeneralState = initialState, action: GeneralActions.IActions): IGeneralState {
  switch (action.type) {
    case GeneralActions.INCREASE_COUNTER:
      return {
        ...state,
        counter: state.counter + action.payload
      };
    case GeneralActions.RESET_COUNTER:
      return { ...state, counter: 0 };
    default:
      return state;
  }
}
