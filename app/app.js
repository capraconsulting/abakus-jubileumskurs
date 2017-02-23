import React, { Component } from 'react';
import {Text, View} from 'react-native';
import {Provider} from 'react-redux';

import store from './store';

class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <View>
          <Text>Hei</Text>
        </View>
      </Provider>
    );
  }
}

export default App;
