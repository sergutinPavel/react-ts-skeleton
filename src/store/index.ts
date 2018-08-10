// import logger from 'redux-logger';
import { createStore, applyMiddleware } from "redux";
import { reducer } from "./root.reducer";


if (process.env.NODE_ENV !== 'production') {
  // console.log('process', process, process.env);
}

// const enhancer = ((window as any).devToolsExtension && process.env.NODE_ENV !== 'production')
//   ? (window as any).devToolsExtension()(createStore) : createStore;

const store = createStore(reducer, applyMiddleware());

export default store;
