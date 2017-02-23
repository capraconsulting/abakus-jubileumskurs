import React, { Component } from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';

import store from './store';
import MaterialButton from './material/MaterialButton';

class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <View style={{alignItems: 'center'}}>
          <MaterialButton text={'Hei'}
                          handleClick={() => {}} />
        </View>
      </Provider>
    );
  }
}

export default App;
