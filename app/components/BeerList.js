import React from 'react'
import { View } from 'react-native';

import Button from '../elements/Button';
import Card from '../elements/Card';
import List from '../elements/List';
import Icon from '../elements/Icon';
import Image from '../elements/Image';

export const BeerList = props => (
  <View>
    <Card title='Selected beer' />
    <Icon />
    <Button
      text='Add beer'
      onClick={props.navigateToNewForm}
    />
    <List items={props.items} />
    <Image source='http://beerbikemunich.com/demo/slider/01.jpg' />
  </View>
);

BeerList.propTypes = {
  items: React.PropTypes.array.isRequired,
  navigateToNewForm: React.PropTypes.func.isRequired,
};

export default BeerList;
