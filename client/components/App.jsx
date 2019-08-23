import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import PlaceList from './PlaceList';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      places: [],
    };
  }

  componentDidMount() {
    axios('/api/nearbyPlaces/1').then((response) => {
      this.setState({
        places: response.data,
      });
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
