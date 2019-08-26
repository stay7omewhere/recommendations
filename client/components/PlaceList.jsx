/* eslint-disable no-underscore-dangle */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Place from './Place';

const PlaceList = (props) => {
  const { places } = props;

  const PlaceListDiv = styled.div({
    display: 'inline-flex',
    flexDirection: 'row',
  });

  return (
    <PlaceListDiv>
      {places.map((place, i) => {
        let first = false;
        let last = false;
        if (i === 0) {
          first = true;
        } else if (i === places.length - 1) {
          last = true;
        }
        return (
          <Place
            first={first}
            last={last}
            key={place._id}
            place={place}
          />
        );
      })}
    </PlaceListDiv>
  );
};

PlaceList.propTypes = {
  places: PropTypes.arrayOf(PropTypes.shape({
    _id: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    plusVerified: PropTypes.bool.isRequired,
    propertyType: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    totalReviews: PropTypes.number.isRequired,
    averageReview: PropTypes.number.isRequired,
  })).isRequired,
};

export default PlaceList;
