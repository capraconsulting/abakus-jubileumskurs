import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BackAndroid } from 'react-native';
import { addNavigationHelpers, NavigationActions } from 'react-navigation';

import { AppNavigator } from '../app'

class NavigatorContainer extends Component {
  componentDidMount() {
    BackAndroid.addEventListener('hardwareBackPress', () => {
      if (this.props.navigationState.index > 0) {
        this.props.onNavigateBack();
        return true;
      }
      return false;
    });
  }

  render() {
    return (
      <AppNavigator
        navigation={addNavigationHelpers({
          dispatch: this.props.dispatch,
          state: this.props.navigationState,
        })}
      />
    );
  }
}

const mapStateToProps = state => ({
  navigationState: state.navigation,
});

const mapDispatchToProps = dispatch => ({
  onNavigateBack: () => dispatch(NavigationActions.back()),
  dispatch,
});

export default connect(mapStateToProps, mapDispatchToProps)(NavigatorContainer);
