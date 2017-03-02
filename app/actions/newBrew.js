export const SET_ALCOHOL = 'SET_ALCOHOL';
export const SET_BREW_NAME = 'SET_BREW_NAME';
export const SET_BREW_TYPE = 'SET_BREW_TYPE';
export const SET_BREWERY = 'SET_BREWERY';
export const SET_IMAGE = 'SET_IMAGE';
export const SET_RATING = 'SET_RATING';

export const setAlcohol = alcohol => ({
  type: SET_ALCOHOL,
  alcohol
});

export const setBrewName = brewName => ({
  type: SET_BREW_NAME,
  brewName
});

export const setBrewType = brewType => ({
  type: SET_BREW_TYPE,
  brewType
});

export const setBrewery = brewery => ({
  type: SET_BREWERY,
  brewery
});

export const setImage = image => ({
  type: SET_IMAGE,
  image
});

export const setRating = rating => ({
  type: SET_RATING,
  rating
});
