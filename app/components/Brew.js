import React, { PropTypes } from 'react';
import { View } from 'react-native';

import Card from '../elements/Card';
import Image from '../elements/Image';

export const Brew = ({brew}) => (
  <View>
    <Card title={brew.brewName}>
      <Image />
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
