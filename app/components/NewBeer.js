import React from 'react'
import { Text, View } from 'react-native';

import Button from '../elements/Button';

export const BeerList = props => (
  <View>
    <Text>Add beer</Text>
    <Button
      text='Back'
      onClick={props.onNavigateBack}
    />
  </View>
);

BeerList.propTypes = {
  onNavigateBack: React.PropTypes.func.isRequired,
};

export default BeerList;
