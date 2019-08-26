import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import SavedListEntry from './SavedListEntry';

const StyledSavedList = styled.div`
  display: ${(props) => (Object.keys(props.currentPlace).length ? 'flex' : 'none')}
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  background: rgba(255, 255, 255, 0.6);
  justify-content: center;
  align-items: center;
`;
StyledSavedList.displayName = 'StyledSavedList';

const MainForm = styled.div`
  box-sizing: border-box;
  padding: 32px 32px;
  background: white;
  height: 724px;
  width: 568px;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 10px 0px;
`;
MainForm.displayName = 'MainForm';

const Exit = styled.svg`
  height: 16px; 
  width: 16px; 
  display: block; 
  fill: rgb(118, 118, 118);
  user-select: none;
`;
Exit.displayName = 'Exit';

const ExitButton = styled.button`
  display: inline-block;
  background: white;
  border: 0;
  border-radius: 1000px;
  padding: 8px 8px;
  margin: -8px;
`;
ExitButton.displayName = 'ExitButton';

const SavedListTitle = styled.h1`
  color: #484848;
  font-size: 1.5em;
  font-family: Nunito Sans, san-serff;
  font-weight: 800;
  padding-top: 20px
  padding-bottom: 5px;
`;
SavedListTitle.displayName = 'SavedListTitle';

const NewList = styled.div`
  padding: 24px 0px;
  color: #008489;
  font-weight: 600;
`;
NewList.displayName = 'NewList';

const StyledList = styled.div`
  display: inline-flex;
  flex-direction: column;
  width: 100%;
`;
StyledList.displayName = 'StyledList';


const SavedList = (props) => {
  const { currentPlace, savedList, closeList } = props;
  let renderSavedList = null;
  if (Object.keys(currentPlace).length) {
    renderSavedList = savedList.map((list) => {
      let favorited = false;
      if (currentPlace.savedList.includes(list.name)) {
        favorited = true;
      }
      return <SavedListEntry favorited={favorited} listName={list.name} />;
    });
  }

  return (
    <StyledSavedList tabIndex="0" currentPlace={currentPlace}>
      <MainForm>
        <ExitButton onClick={closeList}>
          <Exit viewBox="0 0 24 24" focusable="false">
            <path d="m23.25 24c-.19 0-.38-.07-.53-.22l-10.72-10.72-10.72 10.72c-.29.29-.77.29-1.06 0s-.29-.77 0-1.06l10.72-10.72-10.72-10.72c-.29-.29-.29-.77 0-1.06s.77-.29 1.06 0l10.72 10.72 10.72-10.72c.29-.29.77-.29 1.06 0s .29.77 0 1.06l-10.72 10.72 10.72 10.72c.29.29.29.77 0 1.06-.15.15-.34.22-.53.22" fillRule="evenodd" />
          </Exit>
        </ExitButton>
        <SavedListTitle>
          Save to list
        </SavedListTitle>
        <NewList>
          Create New List
        </NewList>
        <StyledList>
          {renderSavedList}
        </StyledList>
      </MainForm>
    </StyledSavedList>
  );
};

SavedList.propTypes = {
  currentPlace: PropTypes.shape({
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
  }).isRequired,
  savedList: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
  })).isRequired,
  closeList: PropTypes.func.isRequired,
};

export default SavedList;
