import React, { PropTypes } from 'react';
import { Button as ElementsButton } from 'react-native-elements';

import colors from '../constants/colors';
import icons from '../constants/icons';

/**
 * Denne komponenten gir deg en enkel knapp
 */
const Button = ({ text, large, icon, backgroundColor, onPress, disabled }) => (
  <ElementsButton onPress={onPress}
                  raised
                  large={large}
                  icon={icon || icons.BEER}
                  backgroundColor={backgroundColor}
                  title={text}
                  disabled={disabled}/>
);

Button.propTypes = {
  text: PropTypes.string.isRequired,
  large: PropTypes.bool,
  icon: PropTypes.shape({
    name: PropTypes.string,
    type: PropTypes.string
  }),
  backgroundColor: PropTypes.string,
  onPress: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  raised: PropTypes.bool
};

Button.defaultProps = {
  raised: true,
  large: false,
  backgroundColor: colors.DARK_BLUE
};

export default Button;
