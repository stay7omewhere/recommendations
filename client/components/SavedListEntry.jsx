import React from 'react';
import PropTypes from 'prop-types';
import Heart from './Heart';
import * as sc from '../styles/savedListEntryStyles';

const SavedListEntry = (props) => {
  const {
    listName, favorited, toggleHeart,
  } = props;

  const heartStyle = {
    fill: favorited ? 'rgb(255, 90, 95)' : 'white',
    fillOpacity: '1',
    stroke: favorited ? 'rgb(255, 90, 95)' : 'rgb(72, 72, 72)',
    size: '24px',
  };

  const handleClick = () => {
    toggleHeart(listName);
  };

  return (
    <div>
      <sc.Divider />
      <sc.ListEntry onClick={handleClick}>
        {listName}
        <Heart heartStyle={heartStyle} />
      </sc.ListEntry>
    </div>
  );
};

SavedListEntry.propTypes = {
  listName: PropTypes.string.isRequired,
  favorited: PropTypes.bool.isRequired,
  toggleHeart: PropTypes.func.isRequired,
};

export default SavedListEntry;
