import React, { PropTypes } from 'react';

const Stars = ({rating}) => {

  const stars = new Array(rating).fill(null)

  return (
    <span className="brew-rating">
      {
        new Array(rating).fill(null).map((a, b) => <i key={b} className="fa fa-star"/>)
      }
    </span>
  )
};

const Image = ({src, rating}) => {
  return (
    <div className="brew-image">
      <img src={src || 'https://pbs.twimg.com/media/CzW9RBZXUAAK43q.jpg'} />
      {
        rating > 0 && <Stars rating={rating} />
      }
    </div>
  );
};

Image.propTypes = {
  src: PropTypes.string,
  rating: PropTypes.number
};

Image.defaultProps = {
  rating: 0
};

export default Image;
