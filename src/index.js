import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { Provider } from 'react-redux';
import configureStore from './store';

injectTapEventPlugin();

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
      <App store={store} />
    </Provider>,
   document.getElementById('root'));

registerServiceWorker();
