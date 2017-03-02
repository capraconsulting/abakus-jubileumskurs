import React from 'react'
import {Text, View} from 'react-native';

import TextInput from '../elements/TextInput';
import Button from '../elements/Button';
import Slider from '../elements/Slider';
import Picker from '../elements/Picker';

import brewTypes from '../constants/brewTypes';

export const NewBrew = props => (
  <View>
    <Text>Add new brew</Text>
    <TextInput
      label="Brew name"
      value={props.brewName}
      placeholder="e.g. Fatøl"
      onTextChange={props.onBrewNameChanged}
      required={true}
      errorMessage="Required"/>
    <TextInput
      label="Brewery"
      value={props.brewery}
      placeholder="e.g. Dahls"
      onTextChange={props.onBreweryChanged}
      required={true}
      errorMessage="Required"/>
    <Slider
      label="ABV (%)"
      value={props.alcohol}
      onChange={props.onAlcoholChanged}
      min={0}
      max={96}/>
    <Picker
      label="Brew type"
      items={brewTypes}
      selectedItem={props.brewType}
      onSelect={props.onBrewTypeChanged} />
    <Slider
      label="Rating (1-5)"
      value={props.rating}
      onChange={props.onRatingChanged}
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
