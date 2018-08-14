// import logger from 'redux-logger/dist/redux-logger.js';
import { combineReducers } from 'redux';

import * as generalState from './general/general.reducer';


export interface IRootState {
  // router: RouterState;
  // auth: any;
  general: generalState.IGeneralState;
}

// export default combineReducers<GlobalState>({
//   auth: authReducer,
//   app: recycleState(appReducer, [LOGOUT], appInitialState),
//   books: recycleState(booksReducer, [LOGOUT], booksInitialsState),
//   router: routerReducer,
// });

export const reducer = combineReducers<IRootState>({
  // router: routerReducer
  // auth: authReducer,
  general: generalState.reducer,
});
