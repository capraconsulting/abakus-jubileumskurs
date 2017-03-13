import React, { PropTypes } from 'react';
import { List as ElementsList, ListItem } from 'react-native-elements';

const List = ({items, titleKey, onPress}) => (
  <ElementsList>
    {
      items.map((item, key) => (
        <ListItem key={key}
                  title={item[titleKey]}
                  onPress={() => onPress && onPress(item, key)} />
      ))
    }
  </ElementsList>
);

List.propTypes = {
  items: PropTypes.array.isRequired,
  titleKey: PropTypes.string.isRequired,
  onPress: PropTypes.func
};

List.defaultProps = {
  items: []
};

export default List;
