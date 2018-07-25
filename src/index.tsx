import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createBrowserHistory } from 'history';
import { configureStore } from "./store/configureStore";
import App from './App';

const store = configureStore();


ReactDOM.render(
  <Provider store={store}>
    <Router history={createBrowserHistory({})}>
      <App/>
    </Router>
  </Provider>,
  document.getElementById('root') as HTMLElement,
);
