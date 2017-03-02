import React, { Component } from 'react';
import { connect } from 'react-redux';

import { navigateTo } from '../actions/navigation'
import BeerList from '../components/BeerList'

const mapStateToProps = state => ({
  beerList: state.beerList
});

const mapDispatchToProps = dispatch => ({
  navigateToNewForm: () => dispatch(navigateTo('newBeer'))
});

export default connect(mapStateToProps, mapDispatchToProps)(BeerList);
