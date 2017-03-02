import React, { PropTypes } from 'react';
import { List as ElementsList, ListItem } from 'react-native-elements';

const List = ({items, titleKey, onClick}) => (
  <ElementsList>
    {
      items.map((item, i) => (
        <ListItem key={i}
                  title={item[titleKey]}
                  onClick={onClick} />
      ))
    }
  </ElementsList>
);

List.propTypes = {
  items: PropTypes.array,
  titleKey: PropTypes.string,
  onClick: PropTypes.func
};

List.defaultProps = {
  items: []
};

export default List;
