import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store';
import Amplify from 'aws-amplify';
import config from './aws-exports';

import App from './components/App';

Amplify.configure(config);

const store = configureStore();

const Root = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(<Root />, document.getElementById('root'));
