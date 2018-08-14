import * as GeneralActions from './general.actions';


export interface IGeneralState {
  expandSidebar: boolean;
  loading: boolean;
  error?: any;
}

export const initialState: IGeneralState = {
  expandSidebar: false,
  loading: false,
  error: null
};

export function reducer(state: IGeneralState = initialState, action: GeneralActions.GeneralActions): IGeneralState {
  switch (action.type) {
    case GeneralActions.ActionTypes.TOGGLE_SIDEBAR:
      return { ...state, expandSidebar: !state.expandSidebar };
    case GeneralActions.ActionTypes.EXAMPLE_ACTION:
      return state;
    default:
      return state;
  }
}

// selectors
export const getExpandSidebar = (state: IGeneralState) => state.expandSidebar;
