/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import AppWrapper from './app/index';

export default class jubileumskurs extends Component {
  render() {
    return (
      <AppWrapper />
    );
  }
}

AppRegistry.registerComponent('jubileumskurs', () => jubileumskurs);
