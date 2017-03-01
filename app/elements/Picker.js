import React, {PropTypes} from 'react';
import {View, Text, Picker as NativePicker} from 'react-native';
import {FormLabel} from 'react-native-elements';
import Colors from '../constants/colors';

const Item = NativePicker.Item;

const renderItems = (items) => {
  return items.map((item, index) => {
    return <Item label={item.label} value={item} key={index}/>
  });
};

const Picker = ({label, items, selectedItem, onSelect}) => {
  return (
    <View>
      <FormLabel>{label}</FormLabel>
      <NativePicker
        style={{marginLeft: 12, marginRight: 20, borderBottomColor: Colors.BLACK}}
        selectedValue={selectedItem}
        onValueChange={onSelect}>
        {renderItems(items)}
      </NativePicker>
    </View>
  );
};

Picker.propTypes = {
  label: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired
    })
  ),
  selectedItem: PropTypes.shape(
    PropTypes.shape({
      label: PropTypes.string.isRequired
    })
  ),
  onSelect: PropTypes.func
};

export default Picker;
