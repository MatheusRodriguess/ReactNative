import React from 'react'
import { Router, Scene } from 'react-native-router-flux'

import CenaPrincipal from './CenaPrincipal';
import SobreJogo from './SobreJogo'; 
import OutrosJogos from './OutrosJogos';
import Resultado from './Resultado';

const Rotas = () => (
    <Router sceneStyle = {{ paddingTop: 55 }}>
        <Scene key = 'principal' component = { CenaPrincipal } initial title = "Cara ou Coroa" />
        <Scene key = 'sobreJogo' component = { SobreJogo } title = "Sobre o jogo" /> 
        <Scene key = 'outrosJogos' component = { OutrosJogos } title = "Outros Jogos" />
        <Scene key = 'resultado' component = { Resultado } title = "Resultado" />               
    </Router>
);

export default Rotas;