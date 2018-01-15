import React, { Component } from 'react';
import { View } from 'react-native';

import Topo from './Components/Topo';
import Resultado from './Components/Resultado';
import Painel from './Components/Painel';

export default props => (
  <View>
    <Topo />
    <Resultado />
    <Painel />
  </View>
)
