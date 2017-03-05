import React, {Component} from 'react';
import {connect} from 'react-redux';
import {NavigationActions} from 'react-navigation';

import Brew from '../components/Brew';

const BrewContainer = props => <Brew {...props} />;

BrewContainer.navigationOptions = {
  title: ({state}) => state.params.brewName
};

const mapStateToProps = (state, ownProps) => ({
  brew: state.brewList[ownProps.navigation.state.params.index],
});

const mapDispatchToProps = ({
  onNavigateBack: NavigationActions.back,
});

export default connect(mapStateToProps, mapDispatchToProps)(BrewContainer);
