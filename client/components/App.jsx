import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import PlaceList from './PlaceList';

const AppDiv = styled.div`
  -webkit-font-smoothing: antialiased;
  font-family: Montserrat, sans-serif;
  line-height: 1.3em;
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const StyledTitle = styled.h1`
  padding: 15px 42px;
  width: 1031px;
  color: rgb(72, 72, 72);
  font-size: 1.5em;
`;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      places: [],
      savedList: [],
    };
  }

  componentDidMount() {
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

  render() {
    const { places, savedList } = this.state;
    return (
      <AppDiv>
        <StyledTitle>More places to stay</StyledTitle>
        <PlaceList savedList={savedList} places={places} />
      </AppDiv>
    );
  }
}

export default App;
