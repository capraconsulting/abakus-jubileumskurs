import React, { PropTypes } from 'react';
import { Text } from 'react-native';
import { Card as ElementsCard } from 'react-native-elements';

const Card = ({title, image, text}) => (
  <ElementsCard title={title}
    image={image}>
    <Text>{text}</Text>
  </ElementsCard>
);

Card.proptypes = {
  title: PropTypes.string,
  image: PropTypes.string,
  text: PropTypes.string
};

Card.defaultProps = {
  image: 'https://www.ntbinfo.no/data/images/00854/bc248b7c-3c7f-4343-b86e-ba72f3ec5a7a-w_400_h_250.png'
};

export default Card;
