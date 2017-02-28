import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

import Navigation from './containers/NavigatorContainer';
import BeerListContainer from './containers/BeerListContainer';
import NewBeerContainer from './containers/NewBeerContainer';

class App extends Component {

  render() {
    return (
      <View style={styles.container}>
        <Navigation
          routes={{
            beerList: BeerListContainer,
            newBeer: NewBeerContainer
          }}
        />
      </View>
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
