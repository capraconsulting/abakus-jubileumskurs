import { combineReducers } from 'redux';

import navigationReducer from './navigation';
import beerListReducer from './beerListReducer';

export default combineReducers({
  navigation: navigationReducer,
  beerList: beerListReducer
});
