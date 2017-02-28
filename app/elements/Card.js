import React, { PropTypes } from 'react';
import { StyleSheet, View } from 'react-native';
import { Card as ElementsCard } from 'react-native-elements';

const Card = ({children}) => (
  <View style={styles.card}>
    <ElementsCard>
      {children}
    </ElementsCard>
  </View>
);

Card.proptypes = {
  children: PropTypes.element
};

const styles = StyleSheet.create({
  card: {
    marginBottom: 10
  }
});

export default Card;
