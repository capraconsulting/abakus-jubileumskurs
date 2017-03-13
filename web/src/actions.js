export const ADD_BREW = 'brewList/ADD_BREW';
export const REMOVE_BREW = 'brewList/REMOVE_BREW';
export const UPDATE_BREW = 'brewList/UPDATE_BREW';

export const firebaseBrewAdded = (key, brew) => ({
  type: ADD_BREW,
  payload: {
    key,
    brew
  },
});

export const firebaseBrewRemoved = (key, brew) => ({
  type: REMOVE_BREW,
  payload: {
    key,
    brew,
  },
});

export const firebaseBrewUpdated = (key, brew) => ({
  type: UPDATE_BREW,
  payload: {
    key,
    brew,
  },
});
