import { NavigationExperimental } from 'react-native';

import {
  NAVIGATION_POP,
  NAVIGATION_PUSH
} from '../actions/navigation'

const { StateUtils: NavigationStateUtils } = NavigationExperimental;

const initialState = {
  index: 0, // initial focused route
  routes: [
    { key: 'initial', name: 'beerList' }
  ],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case NAVIGATION_POP:
      return NavigationStateUtils.pop(state);

    case NAVIGATION_PUSH:
      const route = {
        key: 'Route-' + Date.now(),
        name: action.payload.routeName
      };
      return NavigationStateUtils.push(state, route);

    default:
      return state;
  }
}
