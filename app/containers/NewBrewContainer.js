import React, { Component } from 'react';
import { connect } from 'react-redux';

import { navigateBack } from '../actions/navigation'
import NewBrew from '../components/NewBrew'

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({
  onNavigateBack: () => dispatch(navigateBack())
});

export default connect(mapStateToProps, mapDispatchToProps)(NewBrew);
