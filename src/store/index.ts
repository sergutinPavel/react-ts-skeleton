// import logger from 'redux-logger';
import { createStore, applyMiddleware } from "redux";
import { reducer } from "./root.reducer";


const store = createStore(reducer, applyMiddleware());

export default store;
