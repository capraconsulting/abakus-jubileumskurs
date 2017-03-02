import { combineReducers } from 'redux';

import beerList from './beerListReducer';
import navigation from './navigation';
import newBrew from './newBrewReducer';

export default combineReducers({
  beerList,
  navigation,
  newBrew
});
