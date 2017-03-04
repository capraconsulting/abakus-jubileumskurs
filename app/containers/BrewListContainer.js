import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';

import HeaderButton from '../elements/HeaderButton'
import BrewList from '../components/BrewList'

const BrewListContainer = props => <BrewList {...props} />;

BrewListContainer.navigationOptions = {
  title: 'Brew list',
  header: ({ state, navigate }) => ({
    right: (
      <HeaderButton
        title='Add new brew'
        onPress={() => navigate('newBrew')}
      />
    ),
  }),
};

const mapStateToProps = state => ({
  brewList: state.brewList
});

const mapDispatchToProps = dispatch => ({
  navigateToNewForm: () => dispatch(NavigationActions.navigate({ routeName: 'newBrew' })),
  navigateToBrew: index => dispatch(NavigationActions.navigate({ routeName: 'brew', params: { index }}))
});

export default connect(mapStateToProps, mapDispatchToProps)(BrewListContainer);
