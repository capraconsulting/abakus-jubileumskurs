import React, { PropTypes } from 'react';

import Brew from './Brew';

const BrewList = ({brewList = []}) => (
  <div>
    {
      brewList.map((brew, index) => (
        <Brew brew={brew.data} key={index} />
      ))
    }
  </div>
);

BrewList.propTypes = {
  brewList: PropTypes.array
};

export default BrewList;
