import React, {PropTypes} from 'react'
import {Text, ScrollView, View, Image, TouchableOpacity} from 'react-native';

import TextInput from '../elements/TextInput';
import Button from '../elements/Button';
import Slider from '../elements/Slider';
import Picker from '../elements/Picker';

import {brewTypes} from '../constants/brewTypes';

function validateNewBrew(brew) {
  const brewNameValid = brew.brewName && brew.brewName.trim().length > 0;
  const breweryValid = brew.brewery && brew.brewery.trim().length > 0;
  return !!brewNameValid && !!breweryValid;
}

export const NewBrew = props => {

  const {brewName, brewery, alcohol, brewType, rating} = props;
  const {onBrewNameChanged, onBreweryChanged, onAlcoholChanged, onBrewTypeChanged, onRatingChanged} = props;

  const onAddBrewClick = () => {
    const newBrew = {
      brewName,
      brewery,
      alcohol,
      brewType,
      rating
    };

    // Steg 2: kall props.onSaveBrew(newBrew);
    // Steg 2: kall props.navigation.goBack(); for å gå tilbake til listevisning etter øl er lagt til

    alert(`${newBrew.brewName} saved!`);
  };

  return (
    // Steg 1: Her kan man legge inn de forskjellige input-elementene som trengs for å legge til en ny brew
    // Tips: Bruk komponentene TextInput, Slider, Picker og Button fra / elements-mappen
    <ScrollView>
    </ScrollView>
  );
};

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
  onSaveBrew: PropTypes.func.isRequired,
  navigation: PropTypes.any,
  onPickImagePressed: React.PropTypes.func.isRequired
};

export default NewBrew;
