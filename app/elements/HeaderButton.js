import React, { PropTypes } from 'react';
import { Button as ElementsButton } from 'react-native-elements';

import colors from '../constants/colors';

/**
 * Denne komponenten kan brukes for å lage en enkel knapp som du kan legge i headeren
 */
const HeaderButton = ({ title, color, backgroundColor, onPress }) => (
  <ElementsButton
    onPress={onPress}
    color={color}
    backgroundColor={backgroundColor}
    title={title}
  />
);

HeaderButton.propTypes = {
  title: PropTypes.string,
  color: PropTypes.string,
  backgroundColor: PropTypes.string,
  onPress: PropTypes.func
};

HeaderButton.defaultProps = {
  color: colors.DARK_BLUE,
  backgroundColor: 'transparent',
};

export default HeaderButton;
