/* eslint-disable no-underscore-dangle */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import SavedListEntry from './SavedListEntry';
import MiniPlace from './MiniPlace';
import NewListForm from './NewListForm';
import * as sc from '../styles/savedListStyles';

const SavedList = (props) => {
  const [showForm, setShowForm] = useState(false);

  let exitButtonRef;
  const {
    currentPlace, savedList, closeList, expanded, toggleExpanded, toggleHeart, addToList,
  } = props;

  useEffect(() => {
    exitButtonRef.focus();
  }, [Object.keys(currentPlace).length]);

  const handleClick = (e) => {
    if (e.target.id === 'StyledSavedList') {
      setShowForm(false);
      closeList();
    }
  };

  const toggleShowForm = () => {
    setShowForm(!showForm);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Escape') {
      setShowForm(false);
      closeList();
    }
  };

  const closeModal = () => {
    setShowForm(false);
    closeList();
  };


  let renderSavedList = null;
  if (Object.keys(currentPlace).length && savedList.length) {
    renderSavedList = savedList.map((list) => {
      let favorited = false;
      if (currentPlace.savedList.includes(list.name)) {
        favorited = true;
      }
      return (
        <SavedListEntry
          toggleHeart={toggleHeart}
          key={list._id}
          favorited={favorited}
          listName={list.name}
        />
      );
    });
  }

  return (
    <sc.StyledSavedList id="StyledSavedList" currentPlace={currentPlace} onClick={handleClick}>
      <sc.MainForm>
        <div>
          <sc.ExitButton onKeyDown={handleKeyDown} ref={(ref) => { exitButtonRef = ref; }} id="ExitButton" onClick={closeModal}>
            <sc.Exit viewBox="0 0 24 24" focusable="false">
              <path d="m23.25 24c-.19 0-.38-.07-.53-.22l-10.72-10.72-10.72 10.72c-.29.29-.77.29-1.06 0s-.29-.77 0-1.06l10.72-10.72-10.72-10.72c-.29-.29-.29-.77 0-1.06s.77-.29 1.06 0l10.72 10.72 10.72-10.72c.29-.29.77-.29 1.06 0s .29.77 0 1.06l-10.72 10.72 10.72 10.72c.29.29.29.77 0 1.06-.15.15-.34.22-.53.22" fillRule="evenodd" />
            </sc.Exit>
          </sc.ExitButton>
          <sc.SavedListTitle>
          Save to list
          </sc.SavedListTitle>
          <sc.ScrollableList>
            <sc.NewList>
              <sc.NewListText
                showForm={showForm}
                id="CreateNewList"
                onClick={toggleShowForm}
              >
                Create New List
              </sc.NewListText>
              <NewListForm
                addToList={addToList}
                toggleShowForm={toggleShowForm}
                showForm={showForm}
              />
            </sc.NewList>
            <sc.StyledList>
              {renderSavedList}
            </sc.StyledList>
          </sc.ScrollableList>
        </div>
        <MiniPlace
          toggleExpanded={toggleExpanded}
          expanded={expanded}
          place={currentPlace}
        />
      </sc.MainForm>
    </sc.StyledSavedList>
  );
};

SavedList.propTypes = {
  currentPlace: PropTypes.shape({
    _id: PropTypes.string,
    url: PropTypes.string,
    plusVerified: PropTypes.bool,
    propertyType: PropTypes.string,
    title: PropTypes.string,
    city: PropTypes.string,
    price: PropTypes.number,
    totalReviews: PropTypes.number,
    averageReview: PropTypes.number,
    savedList: PropTypes.arrayOf(PropTypes.string.isRequired),
  }).isRequired,
  savedList: PropTypes.arrayOf(PropTypes.shape({
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  })).isRequired,
  closeList: PropTypes.func.isRequired,
  expanded: PropTypes.bool.isRequired,
  toggleExpanded: PropTypes.func.isRequired,
  toggleHeart: PropTypes.func.isRequired,
  addToList: PropTypes.func.isRequired,
};

export default SavedList;
