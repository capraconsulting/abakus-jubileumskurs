import React, { Component } from 'react';
import { connect } from 'react-redux';

import { navigateTo } from '../actions/navigation'
import BeerList from '../components/BeerList'

// TODO: move to store
const items = [
  {title: 'Rad 1'},
  {title: 'Rad 2'},
  {title: 'Rad 3'}
];

const mapStateToProps = state => ({
  items
});

const mapDispatchToProps = dispatch => ({
  navigateToNewForm: () => dispatch(navigateTo('newBeer'))
});

export default connect(mapStateToProps, mapDispatchToProps)(BeerList);
