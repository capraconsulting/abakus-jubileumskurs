import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';

import Brew from '../components/Brew';

const BrewContainer = props => <Brew {...props} />;

BrewContainer.navigationOptions = {
  // TODO: how to inject the actual brew name here?
  title: 'Brew',
};

const mapStateToProps = (state, ownProps) => ({
  brew: state.beerList[ownProps.navigation.state.params.index],
});

const mapDispatchToProps = ({
  onNavigateBack: NavigationActions.back,
});

export default connect(mapStateToProps, mapDispatchToProps)(BrewContainer);
