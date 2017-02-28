import React, { Component } from 'react';
import { connect } from 'react-redux';

import { navigateBack } from '../actions/navigation'
import NewBeer from '../components/NewBeer'

const mapDispatchToProps = dispatch => ({
  onNavigateBack: () => dispatch(navigateBack())
});

export default connect(null, mapDispatchToProps)(NewBeer);
