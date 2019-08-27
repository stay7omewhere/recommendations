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
    };
    this.closeList = this.closeList.bind(this);
    this.renderList = this.renderList.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyDown);
    axios('/api/nearbyPlaces/1').then((response) => response.data).then((places) => {
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
    });
  }

  renderList(place) {
    this.setState({
      currentPlace: place,
    });
  }

  render() {
    const { places, savedList, currentPlace } = this.state;
    const { closeList, renderList } = this;
    return (
      <AppDiv>
        <SavedList savedList={savedList} currentPlace={currentPlace} closeList={closeList} />
        <StyledTitle>More places to stay</StyledTitle>
        <PlaceList renderList={renderList} savedList={savedList} places={places} />
      </AppDiv>
    );
  }
}

export default App;
