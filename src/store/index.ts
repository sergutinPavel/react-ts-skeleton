// import logger from 'redux-logger';
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import { createEpicMiddleware } from 'redux-observable';
import { reducer } from "./root.reducer";
import { rootEffects } from "./root.effects";


const epicMiddleware = createEpicMiddleware();
const configureStore = (history: History) => {
  const store = createStore(
    reducer,
    composeWithDevTools(
      applyMiddleware(
        epicMiddleware
      )
    )
  );
  epicMiddleware.run((rootEffects as any));

  return store;
};

// const store = createStore(reducer, applyMiddleware());
const Store = configureStore(history);

export default Store;
