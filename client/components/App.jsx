/* eslint-disable no-underscore-dangle */
import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import PlaceList from './PlaceList';
import SavedList from './SavedList';

const AppDiv = styled.div`
  -webkit-font-smoothing: antialiased;
  font-family: Montserrat, sans-serif;
  line-height: 1.3em;
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
`;
AppDiv.displayName = 'AppDiv';

const StyledTitle = styled.h1`
  padding: 15px 42px;
  width: 1031px;
  color: rgb(72, 72, 72);
  font-size: 1.5em;
`;
StyledTitle.displayName = 'StyledTitle';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      places: [],
      savedList: [],
      currentPlace: {},
      expanded: false,
    };
    this.closeList = this.closeList.bind(this);
    this.renderList = this.renderList.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.toggleExpanded = this.toggleExpanded.bind(this);
    this.toggleHeart = this.toggleHeart.bind(this);
  }

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyDown);
    const splitUrl = document.URL.split('/');
    const index = splitUrl.indexOf('listing');
    const id = splitUrl[index + 1];
    axios(`/api/nearbyPlaces/${id}`).then((response) => response.data).then((places) => {
      axios('/api/savedList').then((reponse) => {
        const savedList = reponse.data;
        this.setState({
          places,
          savedList,
        });
      });
    });
  }

  handleKeyDown(e) {
    if (e.key === 'Escape') {
      this.closeList();
    }
  }

  closeList() {
    this.setState({
      currentPlace: {},
      expanded: false,
    });
  }

  toggleExpanded() {
    this.setState((prevState) => ({
      expanded: !prevState.expanded,
    }));
  }

  toggleHeart(listName) {
    this.setState((prevState) => {
      let currentPlace = {};
      const places = prevState.places.map((place) => {
        if (prevState.currentPlace._id === place._id) {
          const placeCopy = { ...place };
          const savedListCopy = placeCopy.savedList.slice();
          const index = savedListCopy.indexOf(listName);
          if (index >= 0) {
            savedListCopy.splice(index, 1);
          } else {
            savedListCopy.push(listName);
          }
          placeCopy.savedList = savedListCopy;
          currentPlace = placeCopy;
          return placeCopy;
        }
        return place;
      });
      return {
        places,
        currentPlace,
      };
    });
  }

  renderList(place) {
    this.setState({
      currentPlace: place,
    });
  }


  render() {
    const {
      places, savedList, currentPlace, expanded,
    } = this.state;
    const {
      closeList, renderList, toggleExpanded, toggleHeart,
    } = this;
    return (
      <AppDiv>
        <SavedList
          toggleHeart={toggleHeart}
          expanded={expanded}
          toggleExpanded={toggleExpanded}
          savedList={savedList}
          currentPlace={currentPlace}
          closeList={closeList}
        />
        <StyledTitle>More places to stay</StyledTitle>
        <PlaceList renderList={renderList} savedList={savedList} places={places} />
      </AppDiv>
    );
  }
}

export default App;
