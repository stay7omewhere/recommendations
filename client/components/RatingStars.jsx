import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Stars = styled.span({
  color: 'rgb(216,216,216)',
  fontSize: (props) => props.fontSize,
  display: 'inline-block',
  position: 'relative',
  padding: 0,
});
Stars.displayName = 'Stars';

const StarsTop = styled.div({
  color: (props) => (props.color ? props.color : 'rgb(3,132,137)'),
  padding: 0,
  position: 'absolute',
  zIndex: 1,
  display: 'block',
  top: 0,
  left: 0,
  overflow: 'hidden',
  width: (props) => props.percent,
});
StarsTop.displayName = 'StarsTop';

const StarsBottom = styled.div({
  padding: 0,
  display: 'block',
  zIndex: 0,
});
StarsBottom.displayName = 'StarsBottom';

const RatingStars = (props) => {
  const { color, percent, size } = props;
  return (
    <Stars>
      <StarsTop size={size} color={color} percent={percent}>
        <span>★★★★★</span>
      </StarsTop>
      <StarsBottom>
        <span>★★★★★</span>
      </StarsBottom>
    </Stars>
  );
};

RatingStars.defaultProps = {
  color: undefined,
};

RatingStars.propTypes = {
  color: PropTypes.string,
  percent: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
};

export default RatingStars;
