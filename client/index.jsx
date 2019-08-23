import React from 'react';
import ReactDOM from 'react-dom';
import WebFont from 'webfontloader';
import App from './components/App';

WebFont.load({
  google: {
    families: ['Nunito Sans:400,500,600,700,800,900', 'Montserrat:400,500,600,700,800'],
  },
});

const appStyle = {
  webkitFontSmoothing: 'antialiased',
  fontFamily: 'Montserrat, sans-serif',
  color: 'rgb(118, 118, 118)',
  textTransform: 'uppercase',
  textSizeAdjustment: '100%',
};

ReactDOM.render(<App style={appStyle} />, document.querySelector('#app'));
