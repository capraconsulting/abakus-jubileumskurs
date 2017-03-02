import React, { Component } from 'react';
import { connect } from 'react-redux';

import { navigateBack } from '../actions/navigation'
import {setAlcohol, setBrewery, setBrewName, setBrewType, setImage, setRating} from '../actions/newBrew';
import NewBrew from '../components/NewBrew'

const mapStateToProps = state => ({
  ...state.newBrew
});

const mapDispatchToProps = dispatch => ({
  onNavigateBack: () => dispatch(navigateBack()),
  onAlcoholChanged: (value) => dispatch(setAlcohol(value)),
  onBreweryChanged: (value) => dispatch(setBrewery(value)),
  onBrewNameChanged: (value) => dispatch(setBrewName(value)),
  onBrewTypeChanged: (value) => dispatch(setBrewType(value)),
  onImageChanged: (value) => dispatch(setImage(value)),
  onRatingChanged: (value) => dispatch(setRating(value))
});

export default connect(mapStateToProps, mapDispatchToProps)(NewBrew);
