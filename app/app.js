import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';

import BrewListContainer from './containers/BrewListContainer';
import BrewContainer from './containers/BrewContainer';
import NewBrewContainer from './containers/NewBrewContainer';
import NavigationContainer from './containers/NavigatorContainer';
import fb from './firebase';
import { firebaseBrewAdded, firebaseBrewRemoved, firebaseBrewUpdated } from './actions/brewList';

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
  brewList: { screen: BrewListContainer },
  newBrew: { screen: NewBrewContainer },
  brew: { screen: BrewContainer },
}, {
  // FIXME: endre til newList for steg 1
  initialRouteName: 'brewList', // Steg 2: vis brewList som standard
});

class App extends Component {

  componentDidMount() {
    fb.ref('/').on('child_added', obj => this.props.firebaseBrewAdded(obj.key, obj.val()));
    fb.ref('/').on('child_changed', obj => this.props.firebaseBrewUpdated(obj.key, obj.val()));
    fb.ref('/').on('child_removed', obj => this.props.firebaseBrewRemoved(obj.key, obj.val()));
  }

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

const mapStateToProps = state => ({
});

const mapDispatchToProps = {
  firebaseBrewAdded,
  firebaseBrewUpdated,
  firebaseBrewRemoved,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
