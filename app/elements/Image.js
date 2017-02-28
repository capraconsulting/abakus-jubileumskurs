import React, { PropTypes } from 'react';

import { Image as NativeImage, StyleSheet } from 'react-native';

const Image = ({source}) => (
    <NativeImage style={styles.image}
                 source={{uri: source}} />
);

Image.propTypes = {
  source: PropTypes.string.isRequired
};

const styles = StyleSheet.create({
  image: {
    width: 100,
    height: 100
  }
});

export default Image;
