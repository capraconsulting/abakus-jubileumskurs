import { combineReducers } from 'redux';

import brewList from './brewListReducer';
import navigation from './navigation';
import newBrew from './newBrewReducer';

export default combineReducers({
  brewList,
  navigation,
  newBrew
});
