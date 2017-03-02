import React from 'react'
import { View } from 'react-native';

import Button from '../elements/Button';
import Card from '../elements/Card';
import List from '../elements/List';
import Icon from '../elements/Icon';
import Image from '../elements/Image';

export const BeerList = ({beerList, navigateToNewForm}) => (
  <View>
    <Button
      text='Add beer'
      onClick={navigateToNewForm}
    />
    <List
      items={beerList.brews}
      titleKey='brewName'
      onClick={() => {}}
    />
  </View>
);

BeerList.propTypes = {
  beerList: React.PropTypes.object.isRequired,
  navigateToNewForm: React.PropTypes.func.isRequired,
};

export default BeerList;
