import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import App from './App';

ReactDOM.render(
    <Router history={createBrowserHistory({})}>
        <App />
    </Router>,
    document.getElementById('root') as HTMLElement,
);
