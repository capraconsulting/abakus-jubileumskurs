import React, { PropTypes } from 'react';
import { List as ElementsList, ListItem } from 'react-native-elements';

const List = ({items}) => (
  <ElementsList>
    {
      items.map((item, i) => (
        <ListItem key={i}
                  title={item.title} />
      ))
    }
  </ElementsList>
);

List.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired
    })
  )
};

List.defaultProps = {
  items: []
};

export default List;
