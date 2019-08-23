/* eslint-disable no-underscore-dangle */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Place = (props) => {
  Place.defaultProps = {
    place: undefined,
    first: false,
    last: false,
  };

  const { place, first, last } = props;

  let percent = '100%';
  let color;
  if (place) {
    percent = (`${(place.averageReview / 5) * 100}%`);
    color = place.plusVerified ? 'rgb(145, 70, 105)' : undefined;
  }

  const PlaceDiv = styled.div({
    width: 333,
    paddingRight: last ? '0px' : '8px',
    paddingLeft: first ? '0px' : '8px',
  });
  PlaceDiv.displayName = 'PlaceDiv';

  const Image = styled.img`
    border-radius: 3px;
    width: 100%;
    height: 222;
    object-fit: fill;
  `;
  Image.displayName = 'Image';

  const Property = styled.div({
    paddingTop: '3px',
    fontSize: '.75em',
    color: color || 'rgb(118, 118, 118)',
    fontFamily: 'Nunito Sans, sans-serif',
    fontWeight: '800',
    textTransform: 'uppercase',
  });
  Property.displayName = 'Property';

  const Title = styled.div({
    fontSize: '1.05em',
    fontWeight: '600',
    color: 'rgb(72,72,72)',
  });
  Title.displayName = 'Title';

  const Price = styled.div({
    paddingTop: '3px',
    paddingBottom: '1px',
    fontSize: '.9em',
    fontWeight: '400',
    color: 'rgb(72,72,72)',
  });
  Price.displayName = 'Price';

  const Review = styled.div({
    fontSize: '.7em',
    color: 'rgb(72,72,72)',
  });
  Review.displayName = 'Review';

  const Stars = styled.span({
    color: 'rgb(216,216,216)',
    fontSize: '1.1em',
    display: 'inline-block',
    position: 'relative',
    padding: 0,
  });
  Stars.displayName = 'Stars';

  const StarsTop = styled.div({
    color: color || 'rgb(3,132,137)',
    padding: 0,
    position: 'absolute',
    zIndex: 1,
    display: 'block',
    top: 0,
    left: 0,
    overflow: 'hidden',
    width: percent,
  });

  const StarsBottom = styled.div({
    padding: 0,
    display: 'block',
    zIndex: 0,
  });

  const PlusVerified = styled.span({
    padding: '1px 3px',
    marginRight: '4px',
    color: 'white',
    display: color ? 'show' : 'none',
    backgroundColor: color,
    borderRadius: '4px',
    backgroundClip: 'padding-box',
  });
  PlusVerified.displayName = 'PlusVerified';

  const propertyRender = [];
  if (place) {
    if (place.plusVerified) {
      propertyRender.push(<PlusVerified key={place._id}>PLUS</PlusVerified>);
      propertyRender.push(<span key={place.propertyType}>Verified</span>);
    } else {
      propertyRender.push(<span key={place._id}>{place.propertyType}</span>);
    }
  }

  if (place) {
    return (
      <PlaceDiv>
        <Image src={place.url} alt="" />
        <Property>
          {propertyRender}
          <span> · </span>
          {place.city}
        </Property>
        <Title>{place.title}</Title>
        <Price>{`$${place.price}/night`}</Price>
        <Review>
          <Stars>
            <StarsTop>
              <span>★★★★★</span>
            </StarsTop>
            <StarsBottom>
              <span>★★★★★</span>
            </StarsBottom>
          </Stars>
          <span>{` ${place.totalReviews}`}</span>
        </Review>
      </PlaceDiv>
    );
  }
  return null;
};

Place.propTypes = {
  first: PropTypes.bool,
  last: PropTypes.bool,
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
