import React from 'react'
import { Text, StyleSheet, View } from 'react-native';

import { brewWithKeyPropType } from './Brew';
import List from '../elements/List';

export const BrewList = ({brewList, navigateToNewForm, navigateToBrew}) => (
  // Step 1: List ut alle brews i brewList. Bruk List-elementet fra elements/List.js
  //
  // Step 2: Legg til en onPress funksjon som får inn brew som parameter
  // og som kaller navigateToBrew() med brew.brewName og brew.key som parametere.

  <View style={styles.container}>
    <Text>Her skal du legge en liste over ølene</Text>
  </View>
);

BrewList.propTypes = {
  // Se `brewWithKeyPropType` i `Brew.js` for hvordan elementene i brewList ser ut
  brewList: React.PropTypes.arrayOf(
    React.PropTypes.shape(
      brewWithKeyPropType
    )
  ).isRequired,
  navigateToNewForm: React.PropTypes.func.isRequired,
  navigateToBrew: React.PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20
  }
});

export default BrewList;
