import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';

import HeaderButton from '../elements/HeaderButton'
import {setAlcohol, setBrewery, setBrewName, setBrewType, setImage, setRating} from '../actions/newBrew';
import NewBrew from '../components/NewBrew'

const NewBrewContainer = props => <NewBrew {...props} />

NewBrewContainer.navigationOptions = {
  title: 'New brew',
  header: ({ state, navigate }) => ({
    right: (
      <HeaderButton
        title='Add'
        onPress={() => navigate('beerList')}
      />
    ),
  }),
};

const mapStateToProps = state => ({
  ...state.newBrew,
});

const mapDispatchToProps = dispatch => ({
  onNavigateBack: () => dispatch(NavigationActions.back()),
  onAlcoholChanged: (value) => dispatch(setAlcohol(value)),
  onBreweryChanged: (value) => dispatch(setBrewery(value)),
  onBrewNameChanged: (value) => dispatch(setBrewName(value)),
  onBrewTypeChanged: (value) => dispatch(setBrewType(value)),
  onImageChanged: (value) => dispatch(setImage(value)),
  onRatingChanged: (value) => dispatch(setRating(value))
});

export default connect(mapStateToProps, mapDispatchToProps)(NewBrewContainer);
