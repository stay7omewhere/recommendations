import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const HeartDiv = styled.div`
  position: absolute;
  z-index: 1;
  right: 15px;
  top: 8px;
`;

const StyledHeart = styled.svg`
  height: 28px; 
  width: 28px; 
  display: block; 
  overflow: visible;
  fill: ${(props) => (props.favorite ? 'rgb(255, 90, 95)' : '#484848')};
  fill-opacity: ${(props) => (props.favorite ? '1' : '0.5')};
  stroke: #ffffff;
  stroke-width: 2;
  stroke-linecap: round;
  stoke-linejoin: round;
  :focus {
    outline: none;
  }
  user-select: none;
`;

const Heart = (props) => {
  const { savedList, listingSavedList } = props;
  let favorite = false;

  const handleClick = (e) => {
    console.log('clicked');
  };

  for (let i = 0; i < savedList.length; i++) {
    if (listingSavedList.includes(savedList[i].name)) {
      favorite = true;
      break;
    }
  }

  return (
    <HeartDiv>
      <StyledHeart onClick={handleClick} favorite={favorite} viewBox="0 0 24 24">
        <path d="m17.5 2.9c-2.1 0-4.1 1.3-5.4 2.8-1.6-1.6-3.8-3.2-6.2-2.7-1.5.2-2.9 1.2-3.6 2.6-2.3 4.1 1 8.3 3.9 11.1 1.4 1.3 2.8 2.5 4.3 3.6.4.3 1.1.9 1.6.9s1.2-.6 1.6-.9c3.2-2.3 6.6-5.1 8.2-8.8 1.5-3.4 0-8.6-4.4-8.6" />
      </StyledHeart>
    </HeartDiv>
  );
};

Heart.propTypes = {
  savedList: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
  })).isRequired,
  listingSavedList: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};

export default Heart;
