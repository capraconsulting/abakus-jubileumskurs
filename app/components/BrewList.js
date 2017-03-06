import React from 'react'
import { StyleSheet, View } from 'react-native';

import Button from '../elements/Button';
import Card from '../elements/Card';
import List from '../elements/List';
import Icon from '../elements/Icon';
import Image from '../elements/Image';

export const BrewList = ({brewList, navigateToNewForm, navigateToBrew}) => (
  <View style={styles.container}>
    // Steg 2: Legg inn en liste med brews.
    // navigateToBrew(brewName, index) kan brukes som onPress metode for elementene i listen
  </View>
);

const brewPropTypes = React.PropTypes.shape({
  brewName: React.PropTypes.string.isRequired,
  brewery: React.PropTypes.string.isRequired,
  alcohol: React.PropTypes.number.isRequired,
  brewType: React.PropTypes.string.isRequired,
  rating: React.PropTypes.number.isRequired,
  image: React.PropTypes.string,
});

BrewList.propTypes = {
  brewList: React.PropTypes.arrayOf(brewPropTypes).isRequired,
  navigateToNewForm: React.PropTypes.func.isRequired,
  navigateToBrew: React.PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20
  }
});

export default BrewList;
