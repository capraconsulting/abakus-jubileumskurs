import React, { PropTypes } from 'react';

import Image from './Image';

const Brew = ({ brew }) => (
  <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
    <div className="panel panel-default">
      <div className="panel-body">
        <Image src={brew.image} rating={brew.rating} />
        <div className="row">
          <div className="col-xs-7 overflow-ellipsis">
            <h1 className="brew-name">{brew.brewName || 'Ukjent'}</h1>
          </div>
          <div className="col-xs-5 text-right">
            <h1 className="brew-type">{brew.brewType || 'Ukjent'}</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-7 overflow-ellipsis">
            <h2 className="brewery">{brew.brewery || 'Ukjent'}</h2>
          </div>
          <div className="col-xs-5">
            <h2 className="alcohol text-right">{brew.alcohol ? brew.alcohol.toFixed(1) : '?'}%</h2>
          </div>
        </div>
      </div>
    </div>
  </div>
);

Brew.propTypes = {
  brew: PropTypes.object.isRequired
};

export default Brew;
