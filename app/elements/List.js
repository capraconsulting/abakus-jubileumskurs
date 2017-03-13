import React, { PropTypes } from 'react';
import { List as ElementsList, ListItem } from 'react-native-elements';

/**
 * Generer en liste over elementer
 *
 * Prop `title` skal være en funksjon som gir en tekst når den kalles
 * med det aktuelle itemet.
 *
 * Eksempel:
 * <List items={myList} title={item => item.name} onPress={item => doSomething(item.name)} />
 */
const List = ({items, title, onPress}) => (
  <ElementsList>
    {
      items.map((item, key) => (
        <ListItem key={key}
                  title={title(item)}
                  onPress={() => onPress && onPress(item, key)} />
      ))
    }
  </ElementsList>
);

List.propTypes = {
  items: PropTypes.array.isRequired,
  title: PropTypes.func.isRequired,
  onPress: PropTypes.func
};

export default List;
