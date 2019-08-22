import React from 'react';
import PropTypes from 'prop-types';

const Place = (props) => {
  Place.defaultProps = {
    place: undefined,
  };

  const { place } = props;

  const imageStyle = {
    width: 316,
  };

  const propertyStyle = {
    fontSize: '.7em',
    color: 'rgb(118, 118, 118)',
    fontWeight: '700',
    textTransform: 'uppercase',
  };

  const titleStyle = {
    fontSize: '1em',
    fontWeight: '600',
    color: 'rgb(72,72,72)',
  };

  const priceStyle = {
    fontSize: '.9em',
    fontFamily: 'Nunito Sans',
    fontWeight: '500',
    color: 'rgb(72,72,72)',
  };

  const reviewStyle = {
    fontSize: '2em',
  };

  if (place) {
    console.log(place);
    return (
      <div>
        <img
          style={imageStyle}
          src={place.url}
          alt=""
        />
        <div
          style={propertyStyle}
        >
          {place.propertyType}
          <span style={{ ariaHidden: true }}> · </span>
          {place.city}
        </div>
        <div style={titleStyle}>
          {place.title}
        </div>
        <div style={priceStyle}>
          {`$${place.price}/night`}
        </div>
        <div style={reviewStyle}>
          {`${place.totalReviews} , ${place.averageReview}`}
        </div>
      </div>
    );
  }
  return null;
};

Place.propTypes = {
  place: PropTypes.shape({
    url: PropTypes.string.isRequired,
    propertyType: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    totalReviews: PropTypes.number.isRequired,
    averageReview: PropTypes.number.isRequired,
  }),
};

export default Place;
