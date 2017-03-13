import React, {PropTypes} from 'react';
import {View, Text} from 'react-native';
import {FormLabel, Slider as ElementsSlider} from 'react-native-elements'

/**
 * Denne komponenten gir deg en slider som kan brukes for å dra mellom ulike verdier
 */
const Slider = ({label, value, onChange, min, max, decimals = 0, step}) => {
  return (
    <View>
      <FormLabel>{label}: <Text style={{fontWeight: 'bold'}}>{value.toFixed(decimals)}</Text></FormLabel>
      <View style={{padding: 20, flex: 1, alignItems: 'stretch', justifyContent: 'center'}}>
        <ElementsSlider
          value={value}
          onValueChange={onChange}
          minimumValue={min}
          maximumValue={max}
          step={step}/>
      </View>
    </View>
  );
};

Slider.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  decimals: PropTypes.number, // Number of decimals to use
  step: PropTypes.number.isRequired
};

export default Slider;
