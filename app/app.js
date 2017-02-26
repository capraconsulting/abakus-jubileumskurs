import React, { Component } from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import store from './store';

import Button from './elements/Button';
import Card from './elements/Card';
import List from './elements/List';

const items = [
  {title: 'Rad 1'},
  {title: 'Rad 2'},
  {title: 'Rad 3'}
];

class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <View style={{flexGrow: 1, marginTop: 25}}>
          <Button text={'Hei'}
                  onClick={() => {}} />
          <List items={items} />
        </View>
      </Provider>
    );
  }
}

export default App;
