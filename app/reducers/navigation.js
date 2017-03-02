import { NavigationExperimental } from 'react-native';

import {
  NAVIGATION_INIT,
  NAVIGATION_POP,
  NAVIGATION_PUSH
} from '../actions/navigation';

const { StateUtils: NavigationStateUtils } = NavigationExperimental;

const initialState = {
  index: -1, // dispatch navigation init to set initial route
  routes: [],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case NAVIGATION_INIT:
      return {
        index: 0,
        routes: [
          { key: 'initial', name: action.payload.routeName },
        ],
      };

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
