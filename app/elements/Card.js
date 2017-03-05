import React, {PropTypes} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {Card as ElementsCard} from 'react-native-elements';

const Card = ({image, children}) => (
  <ElementsCard wrapperStyle={styles.card}
                image={{uri: 'https://pbs.twimg.com/media/CzW9RBZXUAAK43q.jpg'}}
                imageStyle={styles.image}>
    {children}
  </ElementsCard>
);

Card.propTypes = {
  image: PropTypes.object,
  children: PropTypes.arrayOf(PropTypes.element)
};

const styles = StyleSheet.create({
  card: {
    minHeight: 250,
    marginBottom: 10
  },
  image: {flex: null}
});

export default Card;
