import React, { Component } from 'react';
import { View, AppRegistry, StyleSheet } from 'react-native';
import { Router, Scene } from 'react-native-router-flux';
import Rotas from './src/components/Rotas';

export default class app6 extends Component {
  render() {
    return (
      <Rotas />
    );
  }
}

AppRegistry.registerComponent('app6', () => app6);
