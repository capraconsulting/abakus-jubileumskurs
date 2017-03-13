import React, { Component } from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';

import store from './store';
import App from './app';

class AppWrapper extends Component {

  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}

ReactDOM.render(
  <AppWrapper />,
  document.getElementById('root')
);
