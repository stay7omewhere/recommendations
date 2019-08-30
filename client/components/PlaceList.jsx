/* eslint-disable no-underscore-dangle */
import React from 'react';
import PropTypes from 'prop-types';
import Place from './Place';
import * as sc from '../styles/placeListStyles';

class PlaceList extends React.Component {
  constructor(props) {
    super(props);
    let end = false;
    if (props.places.length) {
      end = props.places.length <= 3;
    }
    this.state = {
      index: 0,
      end,
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
      <sc.PlaceListDiv>
        <sc.ButtonWrapper>
          <sc.Arrow name="prev" onClick={prev} viewBox="0 0 18 18" limit={start}>
            <path d="m13.7 16.29a1 1 0 1 1 -1.42 1.41l-8-8a1 1 0 0 1 0-1.41l8-8a1 1 0 1 1 1.42 1.41l-7.29 7.29z" fillRule="evenodd" />
          </sc.Arrow>
        </sc.ButtonWrapper>
        <sc.OuterDiv>
          <sc.InnerDiv index={index}>
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
          </sc.InnerDiv>
        </sc.OuterDiv>
        <sc.ButtonWrapper>
          <sc.Arrow name="next" onClick={next} viewBox="0 0 18 18" limit={end}>
            <path d="m4.29 1.71a1 1 0 1 1 1.42-1.41l8 8a1 1 0 0 1 0 1.41l-8 8a1 1 0 1 1 -1.42-1.41l7.29-7.29z" fillRule="evenodd" />
          </sc.Arrow>
        </sc.ButtonWrapper>
      </sc.PlaceListDiv>
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
