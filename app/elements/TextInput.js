import React, {PropTypes} from 'react';
import {View} from 'react-native';
import {FormLabel, FormInput, FormValidationMessage} from 'react-native-elements'

const TextInput = ({label, value, placeholder, onTextChange, required, errorMessage, onFocus, onBlur}) => (
  <View>
    <FormLabel>{label}</FormLabel>
    <FormInput placeholder={placeholder}
               value={value}
               onChangeText={onTextChange}
               onFocus={onFocus}
               onBlur={onBlur}
               inputStyle={{color: 'black'}}
               returnKeyType="next"/>
    {
      required && (value || '').trim() === '' ?
        <FormValidationMessage>{errorMessage}</FormValidationMessage> :
        null
    }
  </View>
);

TextInput.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  onTextChange: PropTypes.func,
  required: PropTypes.bool,
  errorMessage: PropTypes.string,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func
};

export default TextInput;
