import React from 'react';
import { AppRegistry } from 'react-native';
import App from './src/App';
import PropTypes from 'prop-types'; 

const whatsapp = props => (
      <App />
)

Component.propTypes = {
      text: PropTypes.string.isRequired,
};

AppRegistry.registerComponent('whatsappClone', () => whatsapp);