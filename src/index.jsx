/**
 * Created by pawel on 02/04/2017.
 */
import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import store from 'storeConfig/store';
import App from 'containers/App';


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app'),
);
