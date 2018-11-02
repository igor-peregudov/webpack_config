import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import { getInitialReducers } from './common/classes/Store';
import { initStore } from './common/classes/Store';

import App from './common/containers/App/App';

import '../src/style/style.scss';


const reducers = getInitialReducers();
const store = initStore(reducers);

window.store = store;

render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);
