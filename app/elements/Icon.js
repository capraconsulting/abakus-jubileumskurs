import React, { PropTypes } from 'react';

import { Icon as ElementsIcon } from 'react-native-elements';

import icons from '../constants/icons';

/**
 * Denne komponenten benyttes av Brew for å rendre et stjerne-ikon
 */
const Icon = ({icon}) => (
  <ElementsIcon {...icon} />
);

Icon.propTypes = {
  icon: PropTypes.shape({
    name: PropTypes.string,
    type: PropTypes.string
  })
};

Icon.defaultProps = {
  icon: icons.BEER
};

export default Icon;
