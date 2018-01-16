import React, { Component } from 'react';
import { View } from 'react-native';

import { Topo, Resultado, Painel } from './Components/index';


export default props => (
  <View>
    <Topo />
    <Resultado />
    <Painel />
  </View>
)
