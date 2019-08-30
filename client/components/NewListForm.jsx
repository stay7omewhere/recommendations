/* eslint-disable no-underscore-dangle */
import React, { useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import * as sc from '../styles/newListFormStyles';
import { PlacesContext } from '../context/PlacesContext';
import { CurrentPlaceContext } from '../context/CurrentPlaceContext';
import { SavedListContext } from '../context/SavedListContext';

const NewListForm = (props) => {
  const [inputValue, setInputValue] = useState('');
  const [places, setPlaces] = useContext(PlacesContext);
  const [currentPlace, setCurrentPlace] = useContext(CurrentPlaceContext);
  const [savedList, setSavedList] = useContext(SavedListContext);
  const { showForm, toggleShowForm } = props;

  let listInputRef;

  useEffect(() => {
    listInputRef.focus();
    setInputValue('');
  }, [showForm]);

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const createList = () => {
    const newSavedList = [{ _id: (Math.random() * 1000000).toString(), name: inputValue },
      ...savedList];
    let newCurrentPlace = {};
    const newPlaces = places.map((place) => {
      if (currentPlace._id === place._id) {
        const placeCopy = { ...place };
        placeCopy.savedList = [inputValue, ...placeCopy.savedList];
        newCurrentPlace = placeCopy;
        return placeCopy;
      }
      return place;
    });
    setPlaces(newPlaces);
    setCurrentPlace(newCurrentPlace);
    setSavedList(newSavedList);
    toggleShowForm();
    setInputValue('');
  };

  const createButtonColor = 'white';
  const createBackgroundColor = 'rgb(0, 132, 137)';
  const cancelButtonColor = 'rgb(0, 132, 137)';
  const cancelBackgroundColor = 'white';

  return (
    <sc.StyledListForm showForm={showForm}>
      Name
      <sc.ListInput
        spellcheck="false"
        ref={(ref) => { listInputRef = ref; }}
        onChange={handleChange}
        value={inputValue}
        type="text"
        placeholder="Name your list"
      />
      <sc.ListFormButtonWrapper>
        <sc.StyledListFormButton
          color={cancelButtonColor}
          backgroundColor={cancelBackgroundColor}
          onClick={toggleShowForm}
        >
          cancel
        </sc.StyledListFormButton>
        <sc.StyledListFormButton
          color={createButtonColor}
          backgroundColor={inputValue === '' ? 'rgba(0, 132, 137, 0.3)' : createBackgroundColor}
          onClick={createList}
          disabled={inputValue === ''}
          createButton
        >
          create
        </sc.StyledListFormButton>
      </sc.ListFormButtonWrapper>
    </sc.StyledListForm>
  );
};

NewListForm.propTypes = {
  showForm: PropTypes.bool.isRequired,
  toggleShowForm: PropTypes.func.isRequired,
};

export default NewListForm;
