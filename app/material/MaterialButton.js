import React, {PropTypes} from 'react';
import {Text, StyleSheet} from 'react-native';

import {MKButton, MKColor} from 'react-native-material-kit';

const MaterialButton = ({text, handleClick}) => (
  <MKButton backgroundColor={MKColor.Teal}
            onPress={handleClick}>
    <Text style={styles.buttonText}>
      {text}
    </Text>
  </MKButton>
);

MaterialButton.propTypes = {
  text: PropTypes.string,
  handleClick: PropTypes.func.isRequired
};

const styles = StyleSheet.create({
  buttonText: {
    fontWeight: 'bold'
  }
});

export default MaterialButton;
