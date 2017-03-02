import {
  ADD_BREW,
  REMOVE_BREW,
  SET_SELECTED_BREW
} from '../actions/beerList';

const initialState = {
  brews: [
    {
      brewName: 'Fatøl',
      brewery: 'Hansa',
      alcohol: 4.7,
      brewType: 'Fatøl',
      rating: 4,
      image: 'http://beerbikemunich.com/demo/slider/01.jpg'
    },
    {
      brewName: 'Pilsner',
      brewery: 'Ringnes',
      alcohol: 4.7,
      brewType: 'Pilsner',
      rating: 2,
      image: 'http://beerbikemunich.com/demo/slider/01.jpg'
    }
  ],
  selected: {
    brewName: 'Pilsner',
    brewery: 'Ringnes',
    alcohol: 4.7,
    brewType: 'Pilsner',
    rating: 2,
    image: 'http://beerbikemunich.com/demo/slider/01.jpg'
  }
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_BREW:
      return {
        ...state,
        brews: [
          ...state.brews,
          action.brew
        ]
      };
    case REMOVE_BREW:
      return {
        ...state,
        brews: [
          ...state.brews.filter(brew => {
            return brew.brewName !== action.brewName;
          }),
        ]
      };
    case SET_SELECTED_BREW:
      return {
        ...state,
        selected: action.brew
      };
    default:
      return state;
  }
}
