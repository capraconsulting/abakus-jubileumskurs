import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';

import HeaderButton from '../elements/HeaderButton'
import BeerList from '../components/BeerList'

const BeerListContainer = props => <BeerList {...props} />;

BeerListContainer.navigationOptions = {
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
  beerList: state.beerList
});

const mapDispatchToProps = dispatch => ({
  navigateToNewForm: () => dispatch(NavigationActions.navigate({ routeName: 'newBrew' })),
  navigateToBrew: index => dispatch(NavigationActions.navigate({ routeName: 'brew', params: { index }}))
});

export default connect(mapStateToProps, mapDispatchToProps)(BeerListContainer);
