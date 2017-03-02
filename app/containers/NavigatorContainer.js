import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BackAndroid, NavigationExperimental, StyleSheet, Text } from 'react-native';

import { navigateBack, navigateFirst } from '../actions/navigation'

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

    this.props.onNavigateFirst(this.props.initialRoute);
  }

  render() {

    console.log(this.props.navigationState)

    // For first render we have not yet added the initial route
    if (this.props.navigationState.index >= 0) {
      return (
        <NavigationCardStack
          onNavigateBack={this.props.onNavigateBack}
          navigationState={this.props.navigationState}
          renderScene={this._renderScene}
          style={styles.navigator}
        />
      );
    }

    return null;
  }

  _renderScene(sceneProps) {
    const routeName = sceneProps.scene.route.name;
    const Component = this.props.routes[routeName]; // TODO: failure handling
    return <Component />;
  }
}

NavigatorContainer.propTypes = {
  initialRoute: React.PropTypes.string.isRequired,
  navigationState: React.PropTypes.object.isRequired,
  onNavigateBack: React.PropTypes.func.isRequired,
  onNavigateFirst: React.PropTypes.func.isRequired,
  routes: React.PropTypes.objectOf(React.PropTypes.func).isRequired,
};

const mapStateToProps = state => ({
  navigationState: state.navigation,
});

const mapDispatchToProps = ({
  onNavigateBack: navigateBack,
  onNavigateFirst: navigateFirst,
});

export default connect(mapStateToProps, mapDispatchToProps)(NavigatorContainer);
