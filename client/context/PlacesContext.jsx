/* eslint-disable react/prop-types */
import React, { useState, createContext } from 'react';

export const PlacesContext = createContext();

export const PlacesProvider = (props) => {
  const [places, setPlaces] = useState([]);
  const { children } = props;
  return (
    <PlacesContext.Provider value={[places, setPlaces]}>
      {children}
    </PlacesContext.Provider>
  );
};

export const PlacesConsumer = PlacesContext.Consumer;
