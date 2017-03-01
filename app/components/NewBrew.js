import React from 'react'
import {Text, View} from 'react-native';

import TextInput from '../elements/TextInput';
import Button from '../elements/Button';
import Slider from '../elements/Slider';
import Picker from '../elements/Picker';

const brewTypes = [
  {label: 'Ale'},
  {label: 'Brown Ale'},
  {label: 'IPA'},
  {label: 'Lager'},
  {label: 'Pale Ale'},
  {label: 'Porter'},
  {label: 'Stout'},
  {label: 'Other'}
];

export const NewBrew = props => (
  <View>
    <Text>Add new brew</Text>
    <TextInput
      label="Brew name"
      value={''}
      placeholder="e.g. Fatøl"
      onTextChange={() => {}}
      required={true}
      errorMessage="Required"/>
    <TextInput
      label="Brewery"
      value={''}
      placeholder="e.g. Dahls"
      onTextChange={() => {}}
      required={true}
      errorMessage="Required"/>
    <Slider
      label="ABV (%)"
      value={4.5}
      onChange={() => {}}
      min={0}
      max={96}/>
    <Picker
      label="Brew type"
      items={brewTypes}
      selectedItem={undefined}
      onSelect={() => {}} />
    <Slider
      label="Rating (1-5)"
      value={3}
      onChange={() => {}}
      min={1}
      max={5}/>

    <Button styles={{marginTop: 20}}
            text='Add beer'
            onClick={props.onNavigateBack}/>
  </View>
);

NewBrew.propTypes = {
  onNavigateBack: React.PropTypes.func.isRequired,
};

export default NewBrew;
