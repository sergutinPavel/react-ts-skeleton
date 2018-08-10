import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createBrowserHistory } from 'history';
import store from './store'
import App from './App';


ReactDOM.render(
  <Provider store={store}>
    <Router history={createBrowserHistory({})}>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root') as HTMLElement,
);
