import React, { Component } from 'react';
import { connect } from 'react-redux';

import { navigateBack } from '../actions/navigation';
import Brew from '../components/Brew';

const mapStateToProps = state => ({
  brew: state.beerList.selected
});

const mapDispatchToProps = dispatch => ({
  onNavigateBack: () => dispatch(navigateBack())
});

export default connect(mapStateToProps, mapDispatchToProps)(Brew);
