import React, { PropTypes } from 'react';

import { Image as NativeImage, StyleSheet } from 'react-native';

const Image = ({source}) => (
    <NativeImage style={styles.image}
                 source={{uri: source}} />
);

Image.propTypes = {
  source: PropTypes.string.isRequired
};

Image.defaultProps = {
  source: 'https://pbs.twimg.com/media/CzW9RBZXUAAK43q.jpg'
};

const styles = StyleSheet.create({
  image: {
    width: 100,
    height: 100
  }
});

export default Image;
