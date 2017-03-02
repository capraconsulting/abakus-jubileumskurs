import {
  ADD_BREW,
  REMOVE_BREW
} from '../actions/beerList';

const initialState = [
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
