import React, {PropTypes} from 'react';
import {Text, View} from 'react-native';

import Card from '../elements/Card';
import Icon from '../elements/Icon';
import icons from '../constants/icons';

function renderRating(rating) {
  return [1, 2, 3, 4, 5].map((i, index) => {
    const icon = {
      ...(i <= rating ? icons.STAR : icons.STAR_O),
      color: 'yellow',
    };
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
  // FIXME: remove code before step 3
  <View>
    <Card image={brew.image}>
      <Text>Brewery: {brew.brewery}</Text>
      <Text>Brew type: {brew.brewType}</Text>
      <Text>Alcohol: {brew.alcohol.toFixed(1)} %</Text>
      <View style={{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10
      }}>
        {renderRating(brew.rating)}
      </View>
    </Card>
  </View>
);

export const brewPropType = {
  key: PropTypes.string, // ID in Firebase datastore
  alcohol: PropTypes.number,
  brewery: PropTypes.string,
  brewName: PropTypes.string,
  brewType: PropTypes.string,
  image: PropTypes.string,
  rating: PropTypes.number,
};

Brew.propTypes = {
  brew: PropTypes.shape(brewPropType),
};

export default Brew;
