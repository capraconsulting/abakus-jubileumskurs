import React from 'react'
import { StyleSheet, View } from 'react-native';

import List from '../elements/List';

export const BrewList = ({brewList, navigateToNewForm, navigateToBrew}) => (
  // Step 2: List ut alle brews i brewList. Bruk List-elementet fra elements/List.js
  //
  // Step 3: Legg til en onPress funksjon som får inn brew og index som parametere (brew, index)
  // og som kaller navigateToBrew() med brewName og index som parametere.

  <View style={styles.container}>
    <List
      items={brewList}
      titleKey='brewName'
      onPress={() => {}}
    />
  </View>
);

const brewPropTypes = React.PropTypes.shape({
  brewName: React.PropTypes.string.isRequired,
  brewery: React.PropTypes.string.isRequired,
  alcohol: React.PropTypes.number.isRequired,
  brewType: React.PropTypes.string.isRequired, // e.g. OTHER
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
