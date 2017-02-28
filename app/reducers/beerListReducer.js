const initialState = {
  newBrew: {
    brewName: '',
    brewery: '',
    alcohol: '',
    brewType: '',
    rating: '',
    image: ''
  },
  brewList: [
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
  ]
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
