import React from 'react';
import PropTypes from 'prop-types';

const Place = (props) => {
  Place.defaultProps = {
    place: undefined,
  };

  const { place } = props;
  let percent = '80%';
  let color;
  if (place) {
    percent = (`${(place.averageReview / 5) * 100}%`);
    color = place.plusVerified ? 'rgb(145, 70, 105)' : undefined;
  }

  const placeDiv = {
    width: 316,
  };
  const imageStyle = {
    maxWidth: '100%',
    maxHeight: '100%',
  };

  const propertyStyle = {
    paddingTop: '3px',
    fontSize: '.75em',
    color: color || 'rgb(118, 118, 118)',
    fontFamily: 'Nunito Sans, sans-serif',
    fontWeight: '800',
    textTransform: 'uppercase',
  };

  const titleStyle = {
    fontSize: '1.05em',
    fontWeight: '600',
    color: 'rgb(72,72,72)',
  };

  const priceStyle = {
    paddingTop: '3px',
    paddingBottom: '1px',
    fontSize: '.9em',
    fontWeight: '400',
    color: 'rgb(72,72,72)',
  };

  const reviewsStyle = {
    fontSize: '.7em',
    color: 'rgb(72,72,72)',
  };

  const stars = {
    color: 'rgb(216,216,216)',
    fontSize: '1.1em',
    display: 'inline-block',
    position: 'relative',
    padding: 0,
  };

  const starsTop = {
    color: color || 'rgb(3,132,137)',
    padding: 0,
    position: 'absolute',
    zIndex: 1,
    display: 'block',
    top: 0,
    left: 0,
    overflow: 'hidden',
    width: percent,
  };

  const starsBottom = {
    padding: 0,
    display: 'block',
    zIndex: 0,
  };

  const plusVerifiedStyle = {
    padding: '1px 3px',
    marginRight: '4px',
    color: 'white',
    display: color ? 'show' : 'none',
    backgroundColor: color,
    borderRadius: '4px',
    backgroundClip: 'padding-box',
  };

  const propertyRender = [];
  if (place) {
    if (place.plusVerified) {
      propertyRender.push(<span key={place._id} style={plusVerifiedStyle}>PLUS</span>);
      propertyRender.push(<span key={place.propertyType}>Verified</span>);
    } else {
      propertyRender.push(<span key={place._id}>{place.propertyType}</span>);
    }
  }

  if (place) {
    return (
      <div style={placeDiv}>
        <img style={imageStyle} src={place.url} alt="" />
        <div style={propertyStyle}>
          {propertyRender}
          <span style={{ ariaHidden: true }}> · </span>
          {place.city}
        </div>
        <div style={titleStyle}>
          {place.title}
        </div>
        <div style={priceStyle}>
          {`$${place.price}/night`}
        </div>
        <div style={reviewsStyle}>
          <span style={stars}>
            <div style={starsTop}>
              <span>★</span>
              <span>★</span>
              <span>★</span>
              <span>★</span>
              <span>★</span>
            </div>
            <div style={starsBottom}>
              <span>★</span>
              <span>★</span>
              <span>★</span>
              <span>★</span>
              <span>★</span>
            </div>
          </span>
          <span>{`${place.totalReviews}`}</span>
        </div>
      </div>
    );
  }
  return null;
};

Place.propTypes = {
  place: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    plusVerified: PropTypes.bool.isRequired,
    propertyType: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    totalReviews: PropTypes.number.isRequired,
    averageReview: PropTypes.number.isRequired,
  }),
};

export default Place;
