import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import PlaceList from './PlaceList';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.places = [];
    this.state = {
      places: [],
      index: 0,
    };
    this.nextPlace = this.nextPlace.bind(this);
    this.prevPlace = this.prevPlace.bind(this);
  }

  componentDidMount() {
    axios('/api/nearbyPlaces/1').then((response) => {
      this.places = response.data;
      this.setState({
        places: response.data.slice(0, 3),
      });
    });
  }

  nextPlace() {
    this.setState((state) => {
      const index = state.index + 1;
      const places = this.places.slice(index, index + 3);
      return {
        index,
        places,
      };
    });
  }

  prevPlace() {
    this.setState((state) => {
      const index = state.index - 1;
      const places = this.places.slice(index, index + 3);
      return {
        index,
        places,
      };
    });
  }

  render() {
    const AppDiv = styled.div({
      WebkitFontSmoothing: 'antialiased',
      fontFamily: 'Montserrat, sans-serif',
      textSizeAdjust: '100%',
      lineHeight: '1.3em',
    });

    const { places } = this.state;

    return (
      <AppDiv>
        <PlaceList places={places} />
      </AppDiv>
    );
  }
}

export default App;
