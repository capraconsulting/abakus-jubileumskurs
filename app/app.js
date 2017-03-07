import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {StackNavigator} from 'react-navigation';

import BrewListContainer from './containers/BrewListContainer';
import BrewContainer from './containers/BrewContainer';
import NewBrewContainer from './containers/NewBrewContainer';
import NavigationContainer from './containers/NavigatorContainer';

/**
 * We are using React Navigation to handle navigation in the app
 * https://reactnavigation.org/
 *
 * The object passed to StackNavigator is the list of routes
 * this application provides.
 *
 * TODO: should probably be in a seperate file
 */
export const AppNavigator = StackNavigator({
    brewList: {screen: BrewListContainer},
    newBrew: {screen: NewBrewContainer},
    brew: {screen: BrewContainer},
  },
  {
    initialRouteName: 'newBrew', // Steg 2: Vis brewList som standard
  }
);

class App extends Component {

  render() {
    return (
      <View style={styles.container}>
        <NavigationContainer />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  }
});

export default App;
