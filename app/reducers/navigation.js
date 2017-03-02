import { Navigator } from 'react-native';

import { AppNavigator } from '../app';

export default function reducer(state = null, action) {
  return AppNavigator.router.getStateForAction(action, state);
}
