import React from 'react';
import axios from 'axios';
import Place from './Place';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      places: [],
    };
  }

  componentDidMount() {
    axios('/places').then((response) => {
      this.setState({
        places: response.data,
      });
    });
  }

  render() {
    const appStyle = {
      WebkitFontSmoothing: 'antialiased',
      fontFamily: 'Montserrat, sans-serif',
      textSizeAdjust: '100%',
      lineHeight: '1.3em',
    };

    const { places } = this.state;

    return (
      <div style={appStyle}>
        <Place place={places[3]} />
      </div>
    );
  }
}

export default App;
