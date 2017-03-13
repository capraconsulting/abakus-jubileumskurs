import React, {PropTypes} from 'react';
import {View, Text, Picker as NativePicker} from 'react-native';
import {FormLabel} from 'react-native-elements';
import Colors from '../constants/colors';

const Item = NativePicker.Item;

const renderItems = (items, labelAs) => {
  return items.map((item, index) => {
    const label = typeof item === "string" ? item : item[labelAs];
    return <Item label={label} value={item} key={index}/>
  });
};

/**
 * Denne komponenten lar deg lage en dropdown-liste
 */
const Picker = ({items, label, labelAs, selectedItem, onSelect}) => {
  return (
    <View>
      <FormLabel>{label}</FormLabel>
      <NativePicker
        style={{marginLeft: 12, marginRight: 20, borderBottomColor: Colors.BLACK}}
        selectedValue={selectedItem}
        onValueChange={onSelect}>
        {renderItems(items, labelAs)}
      </NativePicker>
    </View>
  );
};

Picker.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.oneOfType([
      PropTypes.object,
      PropTypes.string
    ]).isRequired
  ).isRequired,
  label: PropTypes.string,
  labelAs: PropTypes.string,
  onSelect: PropTypes.func,
  selectedItem: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string
  ])
};

Picker.defaultProps = {
  labelAs: 'label'
};

export default Picker;
