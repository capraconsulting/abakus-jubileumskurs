import { ADD_BREW, REMOVE_BREW, UPDATE_BREW } from '../actions/brewList';

// Initial state is loaded from Firebase on App mount
const initialState = [];

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_BREW:
      return [
        ...state,
        {
          key: action.payload.key,
          data: action.payload.brew,
        },
      ];
    case REMOVE_BREW:
      return state.filter(brew => {
        return brew.key !== action.payload.key;
      });
    case UPDATE_BREW:
      return state.map(brew => {
        if (brew.key === action.payload.key) {
          return {
            key: action.payload.key,
            data: action.payload.brew,
          };
        } else {
          return brew;
        }
      });
    default:
      return state;
  }
}
