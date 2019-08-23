import React from 'react';
import Place from './Place';

const PlaceList = (props) => {
  const { places } = props;

  const placeListStyle = {
    display: 'inline-flex',
    flexDirection: 'row',
  };
  return (
    <div style={placeListStyle}>
      {places.map((place) => <Place place={place} />)}
    </div>
  );
};

export default PlaceList;
