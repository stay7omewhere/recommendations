/* eslint-disable no-underscore-dangle */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Heart from './Heart';

const PlaceDiv = styled.div`
  width: 333;
  padding-right: ${(props) => (props.last ? '0px' : '8px')};
  padding-left: ${(props) => (props.first ? '0px' : '8px')};
  position: relative;
  :hover {
    cursor: pointer;
  }
`;
PlaceDiv.displayName = 'PlaceDiv';

const Image = styled.img`
  border-radius: 3px;
  width: 100%;
  height: 222;
  object-fit: fill;
  user-select: none;
`;
Image.displayName = 'Image';

const Property = styled.div({
  paddingTop: '8px',
  paddingBottom: '2px',
  fontSize: '.75em',
  color: (props) => (props.color ? props.color : 'rgb(118,118,118)'),
  fontWeight: '700',
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
  color: (props) => (props.color ? props.color : 'rgb(3,132,137)'),
  padding: 0,
  position: 'absolute',
  zIndex: 1,
  display: 'block',
  top: 0,
  left: 0,
  overflow: 'hidden',
  width: (props) => props.percent,
});
StarsTop.displayName = 'StarsTop';

const StarsBottom = styled.div({
  padding: 0,
  display: 'block',
  zIndex: 0,
});
StarsBottom.displayName = 'StarsBottom';

const PlusVerified = styled.span({
  padding: '2px 4px',
  marginRight: '4px',
  color: 'white',
  display: (props) => (props.color ? 'show' : 'none'),
  backgroundColor: (props) => props.color,
  borderRadius: '4px',
  backgroundClip: 'padding-box',
});
PlusVerified.displayName = 'PlusVerified';

const HeartWrapper = styled.div`
  position: absolute;
  z-index: 1;
  right: 15px;
  top: 8px;
`;


const Place = (props) => {
  Place.defaultProps = {
    place: undefined,
    first: false,
    last: false,
  };

  const {
    place, first, last, renderList,
  } = props;

  let percent = '100%';
  let color;
  if (place) {
    percent = (`${(place.averageReview / 5) * 100}%`);
    color = place.plusVerified ? 'rgb(145, 70, 105)' : undefined;
  }

  const propertyRender = [];
  if (place) {
    if (place.plusVerified) {
      propertyRender.push(<PlusVerified color={color} key={place.plusVerified}>PLUS</PlusVerified>);
      propertyRender.push(<span key={place._id}>Verified</span>);
    } else {
      propertyRender.push(<span key={place._id}>{place.propertyType}</span>);
    }
  }

  const favorited = !!place.savedList.length;
  const heartStyle = {
    fill: favorited ? 'rgb(255, 90, 95)' : 'rgb(72, 72, 72)',
    fillOpacity: favorited ? '1' : '0.5',
    stroke: '#fff',
    size: '28px',
  };

  if (place) {
    return (
      <PlaceDiv first={first} last={last}>
        <HeartWrapper onClick={() => renderList(place)}>
          <Heart heartStyle={heartStyle} />
        </HeartWrapper>
        <Image src={place.url} alt="" />
        <Property color={color}>
          {propertyRender}
          <span> · </span>
          {place.city}
        </Property>
        <Title>{place.title}</Title>
        <Price>{`$${place.price}/night`}</Price>
        <Review>
          <Stars>
            <StarsTop color={color} percent={percent}>
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
    savedList: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  }),
  renderList: PropTypes.func.isRequired,
};

export default Place;
