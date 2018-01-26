import React from 'react';
import { Router, Scene } from 'react-native-router-flux';
import PropTypes from 'prop-types'; 
//importando as Cenas
import FormLogin from '../components/FormLogin';
import FormCadastro from '../components/FormCadastro';

const whatsapp = props => (
    <Router>
        <Scene key = 'FormLogin' component = { FormLogin } title = "Logar" initial />
        <Scene key = 'FormCadastro' component = { FormCadastro } title = "Cadastro" />
    </Router>
)

Component.propTypes = {
    text: PropTypes.string.isRequired,
};

