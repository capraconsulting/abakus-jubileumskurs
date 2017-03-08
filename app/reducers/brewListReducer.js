import { ADD_BREW } from '../actions/brewList';

const initialState = [];

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_BREW:
      return [
        ...state,
        action.brew
      ];
    default:
      return state;
  }
}
