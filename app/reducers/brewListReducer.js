import {
  ADD_BREW,
  REMOVE_BREW
} from '../actions/brewList';

import {OTHER} from '../constants/brewTypes';

const initialState = [
  {
    brewName: 'Fatøl',
    brewery: 'Hansa',
    alcohol: 4.7,
    brewType: OTHER,
    rating: 4,
    image: 'https://pbs.twimg.com/media/CzW9RBZXUAAK43q.jpg'
  },
  {
    brewName: 'Pilsner',
    brewery: 'Ringnes',
    alcohol: 4.7,
    brewType: OTHER,
    rating: 2,
    image: 'https://pbs.twimg.com/media/CzW9RBZXUAAK43q.jpg'
  }
];

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_BREW:
      return [
        ...state,
        action.brew
      ];
    case REMOVE_BREW:
      return [
        ...state.brews.filter(brew => {
          return brew.brewName !== action.brewName;
        })
      ];
    default:
      return state;
  }
}
