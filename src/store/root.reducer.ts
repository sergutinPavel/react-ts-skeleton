// import { routerReducer, RouterState } from 'react-router-redux';
import { combineReducers } from 'redux';
// import recycleState from 'redux-recycle';

// import appReducer, { initialState as appInitialState, AppState } from './app/reducer';
// import booksReducer, { initialState as booksInitialsState, BooksState } from './books/reducer';
// import authReducer, { AuthState } from './auth/reducer';
import generalReducer, { IGeneralState } from './general/general.reducer';


export interface IGlobalState {
  // auth: any;
  general: IGeneralState;
  // router: RouterState;
}

// export default combineReducers<GlobalState>({
//   auth: authReducer,
//   app: recycleState(appReducer, [LOGOUT], appInitialState),
//   books: recycleState(booksReducer, [LOGOUT], booksInitialsState),
//   router: routerReducer,
// });

export default combineReducers<IGlobalState>({
  // auth: authReducer,
  general: generalReducer,
  // router: routerReducer
});
