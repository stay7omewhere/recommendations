/* eslint-disable no-underscore-dangle */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Place from './Place';

const PlaceListDiv = styled.div`
  display: inline-flex;
  align-items: flex-start;
`;
PlaceListDiv.displayName = 'PlaceListDiv';

const OuterDiv = styled.div`
  display: inline-flex;
  overflow: hidden;
  width: 1031px;
`;
OuterDiv.displayName = 'OuterDiv';

const InnerDiv = styled.div`
  display: inline-flex;
  transition: transform ease 0.5s;
  transform: translateX(-${(props) => props.index * 349}px);
`;
InnerDiv.displayName = 'InnerDiv';

const ButtonWrapper = styled.div`
  height: 222px;
  width:22px;
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  padding: 0px 10px;
  user-select: none;
`;
ButtonWrapper.displayName = 'ButtonWrapper';

const Arrow = styled.svg`
  height: 22px; 
  width: 22px; 
  fill: rgb(118, 118, 118);
  :hover {
    cursor: pointer;
  }
  :focus {
    outline: 0;
  }
  display: ${(props) => (props.limit ? 'none' : 'show')}
`;
Arrow.displayName = 'Arrow';


class PlaceList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      end: props.places.length <= 3,
      start: true,
    };
    this.prev = this.prev.bind(this);
    this.next = this.next.bind(this);
  }

  next() {
    this.setState((prevState, props) => {
      let { index, end } = prevState;
      const { places } = props;
      index += 1;
      if (index >= places.length - 3) {
        end = true;
      }
      return {
        index,
        end,
        start: false,
      };
    });
  }

  prev() {
    this.setState((prevState) => {
      let { index, start } = prevState;
      index -= 1;
      if (index <= 0) {
        start = true;
      }
      return {
        index,
        end: false,
        start,
      };
    });
  }

  render() {
    const { places, savedList, renderList } = this.props;
    const { index, start, end } = this.state;
    const { next, prev } = this;

    return (
      <PlaceListDiv>
        <ButtonWrapper>
          <Arrow name="prev" onClick={prev} viewBox="0 0 18 18" limit={start}>
            <path d="m13.7 16.29a1 1 0 1 1 -1.42 1.41l-8-8a1 1 0 0 1 0-1.41l8-8a1 1 0 1 1 1.42 1.41l-7.29 7.29z" fillRule="evenodd" />
          </Arrow>
        </ButtonWrapper>
        <OuterDiv>
          <InnerDiv index={index}>
            {places.map((place, i) => {
              let first = false;
              let last = false;
              if (i === 0) {
                first = true;
              } else if (i === places.length - 1) {
                last = true;
              }
              return (
                <Place
                  renderList={renderList}
                  savedList={savedList}
                  first={first}
                  last={last}
                  key={place._id}
                  place={place}
                />
              );
            })}
          </InnerDiv>
        </OuterDiv>
        <ButtonWrapper>
          <Arrow name="next" onClick={next} viewBox="0 0 18 18" limit={end}>
            <path d="m4.29 1.71a1 1 0 1 1 1.42-1.41l8 8a1 1 0 0 1 0 1.41l-8 8a1 1 0 1 1 -1.42-1.41l7.29-7.29z" fillRule="evenodd" />
          </Arrow>
        </ButtonWrapper>
      </PlaceListDiv>
    );
  }
}

PlaceList.propTypes = {
  savedList: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
  })).isRequired,
  places: PropTypes.arrayOf(PropTypes.shape({
    _id: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    plusVerified: PropTypes.bool.isRequired,
    propertyType: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    totalReviews: PropTypes.number.isRequired,
    averageReview: PropTypes.number.isRequired,
  })).isRequired,
  renderList: PropTypes.func.isRequired,
};

export default PlaceList;
