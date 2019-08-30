/* eslint-disable react/prop-types */
import React, { useState, createContext } from 'react';

export const SavedListContext = createContext();

export const SavedListProvider = (props) => {
  const [savedList, setSavedList] = useState([]);
  const { children } = props;
  return (
    <SavedListContext.Provider value={[savedList, setSavedList]}>
      {children}
    </SavedListContext.Provider>
  );
};

export const SavedListConsumer = SavedListContext.Consumer;
