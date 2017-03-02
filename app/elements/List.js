import React, { PropTypes } from 'react';
import { List as ElementsList, ListItem } from 'react-native-elements';

const List = ({items, titleKey, onPress}) => (
  <ElementsList>
    {
      items.map((item, i) => (
        <ListItem key={i}
                  title={item[titleKey]}
                  onPress={() => onPress(i)} />
      ))
    }
  </ElementsList>
);

List.propTypes = {
  items: PropTypes.array,
  titleKey: PropTypes.string,
  onPress: PropTypes.func
};

List.defaultProps = {
  items: []
};

export default List;
