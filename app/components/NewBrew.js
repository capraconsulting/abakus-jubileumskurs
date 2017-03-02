import React, {PropTypes} from 'react'
import {Text, View} from 'react-native';

import TextInput from '../elements/TextInput';
import Button from '../elements/Button';
import Slider from '../elements/Slider';
import Picker from '../elements/Picker';

import brewTypes from '../constants/brewTypes';

export const NewBrew = props => (
  <View>
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
      max={96}
      decimals={1}/>
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
  </View>
);

NewBrew.propTypes = {
  alcohol: PropTypes.number,
  brewery: PropTypes.string,
  brewName: PropTypes.string,
  brewType: PropTypes.string,
  image: PropTypes.string,
  rating: PropTypes.number,
  onAlcoholChanged: PropTypes.func.isRequired,
  onBreweryChanged: PropTypes.func.isRequired,
  onBrewNameChanged: PropTypes.func.isRequired,
  onBrewTypeChanged: PropTypes.func.isRequired,
  onImageChanged: PropTypes.func.isRequired,
  onRatingChanged: PropTypes.func.isRequired,
  onNavigateBack: PropTypes.func.isRequired,
};

export default NewBrew;
