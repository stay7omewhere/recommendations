import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Heart from './Heart';

const ListEntry = styled.div`
  padding 16px 0px;
  outline-offset: 8px;
  color: rgb(72, 72, 72);
  display: inline-flex;
  justify-content: space-between;
  :hover {
    cursor: pointer;
  }
  width: 100%;
`;
ListEntry.displayName = 'ListEntry';

const Divider = styled.div`
  height: 1px;
  width: 100%;
  background: rgb(0, 0, 0, 0.1);
  margin: 8px 0px;
`;
Divider.displayName = 'Divider';

const SavedListEntry = (props) => {
  const { listName, favorited, toggleHeart } = props;

  const heartStyle = {
    fill: favorited ? 'rgb(255, 90, 95)' : 'white',
    fillOpacity: '1',
    stroke: favorited ? 'rgb(255, 90, 95)' : 'rgb(72, 72, 72)',
    size: '24px',
  };

  const handleClick = (e) => {
    toggleHeart(listName);
  };

  return (
    <div>
      <Divider />
      <ListEntry onClick={handleClick}>
        {listName}
        <Heart heartStyle={heartStyle} />
      </ListEntry>
    </div>
  );
};

SavedListEntry.propTypes = {
  listName: PropTypes.string.isRequired,
  favorited: PropTypes.bool.isRequired,
};

export default SavedListEntry;
