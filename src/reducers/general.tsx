import { IGeneralStoreState } from "../types/general";
import { GeneralActions } from "../actions/general";
import * as generalTypes from "../constants/general"


export function GeneralReducer(state: IGeneralStoreState, action: GeneralActions): IGeneralStoreState {
  switch (action.type) {
    case generalTypes.INCREMENT_COUNTER:
      return { ...state, counter: state.counter + action.payload };
    default:
      return state;
  }
}
