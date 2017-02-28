import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
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
        <View style={styles.container}>
          <Card title={'Selected beer'} />
          <Button text={'Add beer'}
                  onClick={() => {}} />
          <List items={items} />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    marginTop: 25
  }
});

export default App;
