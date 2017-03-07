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
  <View>
    <Card title={brew.brewName}>
      <Text>Brewery: {brew.brewery}</Text>
      <Text>Brew type: {brew.brewType}</Text>
      <Text>Alcohol: {brew.alcohol.toFixed(1)}%</Text>
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
