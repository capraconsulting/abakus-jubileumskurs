import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BackAndroid, NavigationExperimental, StyleSheet, Text } from 'react-native';

import { navigateBack } from '../actions/navigation'

const { CardStack: NavigationCardStack } = NavigationExperimental;

const styles = StyleSheet.create({
  navigator: {
    flex: 1
  }
});

class NavigatorContainer extends Component {
  constructor(props, context) {
    super(props, context);

    this._renderScene = this._renderScene.bind(this);
  }

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
      <NavigationCardStack
        onNavigateBack={this.props.onNavigateBack}
        navigationState={this.props.navigationState}
        renderScene={this._renderScene}
        style={styles.navigator}
      />
    );
  }

  _renderScene(sceneProps) {
    const routeName = sceneProps.scene.route.name;
    const Component = this.props.routes[routeName]; // TODO: failure handling
    return <Component />;
  }
}

NavigatorContainer.propTypes = {
  navigationState: React.PropTypes.object.isRequired,
  onNavigateBack: React.PropTypes.func.isRequired,
  routes: React.PropTypes.objectOf(React.PropTypes.func).isRequired
};

const mapStateToProps = state => ({
  navigationState: state.navigation
});

const mapDispatchToProps = ({
  onNavigateBack: navigateBack
});

export default connect(mapStateToProps, mapDispatchToProps)(NavigatorContainer);
