import React, {PropTypes} from 'react'
import {Text, View} from 'react-native';

import TextInput from '../elements/TextInput';
import Button from '../elements/Button';
import Slider from '../elements/Slider';
import Picker from '../elements/Picker';

import {brewTypes, BrewType} from '../constants/brewTypes';

function validateNewBrew(brew) {
  const brewNameValid = brew.brewName && brew.brewName.trim().length > 0;
  const breweryValid = brew.brewery && brew.brewery.trim().length > 0;
  return !!brewNameValid && !!breweryValid;
}

export const NewBrew = props => {

  const {brewName, brewery, alcohol, brewType, rating} = props;
  const {onBrewNameChanged, onBreweryChanged, onAlcoholChanged, onBrewTypeChanged, onRatingChanged} = props;
  const {onSaveBrew, navigation} = props;

  const onAddBrewClick = () => {
    const newBrew = {
      brewName,
      brewery,
      alcohol,
      brewType,
      rating,
    };

    onSaveBrew(newBrew);
    navigation.goBack();
  };

  return (
    <View>
      <TextInput
        label="Brew name"
        value={brewName}
        placeholder="e.g. Dahls Pils"
        onTextChange={onBrewNameChanged}
        required={true}
        errorMessage="Required"/>
      <TextInput
        label="Brewery"
        value={brewery}
        placeholder="e.g. E.C Dahls Bryggeri"
        onTextChange={onBreweryChanged}
        required={true}
        errorMessage="Required"/>
      <Slider
        label="ABV (%)"
        value={alcohol}
        onChange={onAlcoholChanged}
        min={0}
        max={96}
        decimals={1}/>
      <Picker
        items={brewTypes}
        label="Brew type"
        labelAs={'name'}
        selectedItem={brewType}
        onSelect={onBrewTypeChanged}/>
      <Slider
        label="Rating (1-5)"
        value={rating}
        onChange={onRatingChanged}
        min={1}
        max={5}/>

      <Button styles={{marginTop: 20}}
              text='Add brew'
              onClick={onAddBrewClick}
              disabled={!validateNewBrew({brewName, brewery})}/>
    </View>
  );
};

NewBrew.propTypes = {
  alcohol: PropTypes.number,
  brewery: PropTypes.string,
  brewName: PropTypes.string,
  brewType: PropTypes.instanceOf(BrewType),
  image: PropTypes.string,
  rating: PropTypes.number,
  onAlcoholChanged: PropTypes.func.isRequired,
  onBreweryChanged: PropTypes.func.isRequired,
  onBrewNameChanged: PropTypes.func.isRequired,
  onBrewTypeChanged: PropTypes.func.isRequired,
  onImageChanged: PropTypes.func.isRequired,
  onRatingChanged: PropTypes.func.isRequired,
  onNavigateBack: PropTypes.func.isRequired,
  onSaveBrew: PropTypes.func.isRequired,
  navigation: PropTypes.any
};

export default NewBrew;
