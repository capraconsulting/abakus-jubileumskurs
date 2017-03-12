import React from 'react'
import { StyleSheet, View } from 'react-native';

import { brewPropType } from './Brew';
import List from '../elements/List';

export const BrewList = ({brewList, navigateToNewForm, navigateToBrew}) => (
  // Step 2: List ut alle brews i brewList. Bruk List-elementet fra elements/List.js
  //
  // Step 3: Legg til en onPress funksjon som får inn brew som parameter
  // og som kaller navigateToBrew() med brew.brewName og brew.key som parametere.

  <View style={styles.container}>
    <List
      items={brewList}
      titleKey='brewName'
      onPress={brew => navigateToBrew(brew.brewName, brew.key)}
    />
  </View>
);

BrewList.propTypes = {
  // Se `brewPropType` i `Brew.js` for hvordan elementene i brewList ser ut
  brewList: React.PropTypes.arrayOf(
    React.PropTypes.shape(
      brewPropType
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
