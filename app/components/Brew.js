import React, {PropTypes} from 'react';
import {Text, View} from 'react-native';

import Card from '../elements/Card';
import Icon from '../elements/Icon';
import icons from '../constants/icons';
import {BrewType} from "../constants/brewTypes";

function renderRating(rating) {
  return [1, 2, 3, 4, 5].map((i, index) => {
    const icon = i <= Math.ceil(rating) ? icons.STAR : icons.STAR_O;
    icon.color = 'yellow';
    return (
      <View style={{width: 50, height: 50}} key={index}>
        <Icon icon={icon}/>
      </View>
    );
  });
}

export const Brew = ({brew}) => (
  <View>
    {/*
    steg 3:
    vis informasjon om en brew - se propTypes for input
    hint: bruk Card og Text. View kan benyttes med flex for å få stjerner
    */}
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
