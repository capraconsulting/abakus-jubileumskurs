import React, {PropTypes} from 'react';
import {View, Text} from 'react-native';
import {FormLabel, Slider as ElementsSlider} from 'react-native-elements'

const Slider = ({label, value, onChange, min, max,}) => {
  return (
    <View>
      <FormLabel>{label}: <Text style={{fontWeight: 'bold'}}>{value}</Text></FormLabel>
      <View style={{padding: 20, flex: 1, alignItems: 'stretch', justifyContent: 'center'}}>
        <ElementsSlider
          value={value}
          onValueChange={onChange}
          minimumValue={min}
          maximumValue={max}/>
      </View>
    </View>
  );
};

Slider.propTypes = {
  label: PropTypes.string,
  value: PropTypes.number,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  min: PropTypes.number,
  max: PropTypes.number,
  required: PropTypes.bool,
  errorMessage: PropTypes.string,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func
};

export default Slider;
