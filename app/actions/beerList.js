export const ADD_BREW = 'ADD_BREW';
export const REMOVE_BREW = 'REMOVE_BREW';
export const SET_SELECTED_BREW = 'SET_SELECTED_BREW';

export const addBrew = brew => ({
  type: ADD_BREW,
  brew
});

export const removeBrew = brew => ({
  type: REMOVE_BREW,
  brew
});

export const setSelectedBrew = brew => ({
  type: SET_SELECTED_BREW,
  brew
});
