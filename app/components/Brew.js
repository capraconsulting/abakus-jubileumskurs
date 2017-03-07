import React, {PropTypes} from 'react';
import {Text, View} from 'react-native';

import Card from '../elements/Card';
import Icon from '../elements/Icon';
import icons from '../constants/icons';
import {BrewType} from "../constants/brewTypes";

function renderRating(rating) {
  return [1, 2, 3, 4, 5].map((i, index) => {
    const icon = i <= rating ? icons.STAR : icons.STAR_O;
    icon.color = 'yellow';
    return (
      <View style={{width: 50, height: 50}} key={index}>
        <Icon icon={icon}/>
      </View>
    );
  });
}

export const Brew = ({brew}) => (
  // Steg 3:
  // Fyll inn View-elementet med et Card element som viser et bilde (brew.image), brewName, brewery, brewType,
  // alcohol og rating. Du kan bruke hjelpe-funksjonen renderRating(rating) for å representere rating som stjerner
  // PS: Wrap renderRating med et View stylet med flex for å få stjernene til å vises i en rad.
  <View>

  </View>
);

Brew.propTypes = {
  brew: PropTypes.shape({
    alcohol: PropTypes.number,
    brewery: PropTypes.string,
    brewName: PropTypes.string,
    brewType: PropTypes.string,
    image: PropTypes.string,
    rating: PropTypes.number
  })
};

export default Brew;
