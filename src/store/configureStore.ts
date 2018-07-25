// import { History } from 'history';
// import { routerMiddleware } from 'react-router-redux';
// import { applyMiddleware, compose, createStore } from 'redux';
import { createStore } from 'redux';
// import createSagaMiddleware from 'redux-saga';

import Reducer from './root.reducer';
// import rootSaga from './rootSaga';

export function configureStore() {
  // const sagaMiddleware = createSagaMiddleware();
  // const middlewares = [sagaMiddleware, routerMiddleware(history)];

  const store = createStore(
    Reducer,
    // window.devToolsExtension && process.env.NODE_ENV !== 'production' ?
    //   compose(
    //     applyMiddleware(...middlewares),
    //     window.devToolsExtension(),
    //   ) :
    //   applyMiddleware(...middlewares),
  );

  // sagaMiddleware.run(rootSaga);

  console.warn('store', store);
  return store;
}
