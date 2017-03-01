import React from 'react'
import { Text, View } from 'react-native';

import TextInput from '../elements/TextInput';
import Button from '../elements/Button';

export const NewBrew = props => (
  <View>
    <Text>Add new brew</Text>
    <TextInput
      label="Brew name"
      value={''}
      placeholder="e.g. Fatøl"
      required={true}
      errorMessage="Required"/>
    <TextInput
      label="Brewery"
      value={''}
      placeholder="e.g. Dahls"
      required={true}
      errorMessage="Required"/>
    <Button text='Add beer'
            onClick={props.onNavigateBack}/>
  </View>
);


NewBrew.propTypes = {
  onNavigateBack: React.PropTypes.func.isRequired,
};

export default NewBrew;
