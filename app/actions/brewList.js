export const ADD_BREW = 'ADD_BREW';
export const REMOVE_BREW = 'REMOVE_BREW';

export const addBrew = brew => ({
  type: ADD_BREW,
  brew
});

export const removeBrew = brew => ({
  type: REMOVE_BREW,
  brew
});
