import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Heart from './Heart';

const ListEntry = styled.div`
  padding: 24px 0px;
  border-top: 1px solid rgba(0, 0, 0, .1);
  color: rgb(72, 72, 72);
  display: inline-flex;
  justify-content: space-between;
`;

const SavedListEntry = (props) => {
  const { listName, favorited } = props;

  const heartStyle = {
    fill: favorited ? 'rgb(255, 90, 95)' : 'white',
    fillOpacity: '1',
    stroke: favorited ? 'rgb(255, 90, 95)' : 'rgb(72, 72, 72)',
    size: '24px',
  };

  return (
    <ListEntry>
      {listName}
      <Heart heartStyle={heartStyle} />
    </ListEntry>
  );
};

SavedListEntry.propTypes = {
  listName: PropTypes.string.isRequired,
  favorited: PropTypes.bool.isRequired,
};

export default SavedListEntry;
