import React, { PropTypes } from 'react';
import { Button as ElementsButton } from 'react-native-elements';

import colors from '../constants/colors';
import icons from '../constants/icons';

const Button = ({text, large, icon, backgroundColor, onClick, disabled}) => (
  <ElementsButton onPress={onClick}
                  raised
                  large={large}
                  icon={icon || icons.BEER}
                  backgroundColor={backgroundColor}
                  title={text}
                  disabled={disabled}/>
);

Button.propTypes = {
  text: PropTypes.string,
  large: PropTypes.bool,
  icon: PropTypes.shape({
    name: PropTypes.string,
    type: PropTypes.string
  }),
  backgroundColor: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.bool
};

Button.defaultProps = {
  raised: true,
  large: false,
  backgroundColor: colors.DARK_BLUE
};

export default Button;
