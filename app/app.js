import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

import BeerListContainer from './containers/BeerListContainer';
import BrewContainer from './containers/BrewContainer';
import Navigation from './containers/NavigatorContainer';
import NewBrewContainer from './containers/NewBrewContainer';

class App extends Component {

  render() {
    return (
      <View style={styles.container}>
        <Navigation
          initialRoute='beerList'
          routes={{
            beerList: BeerListContainer,
            newBeer: NewBrewContainer,
            brew: BrewContainer
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
