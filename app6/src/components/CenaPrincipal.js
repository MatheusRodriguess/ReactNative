import React, { Component } from 'react';
import { View, Image, StyleSheet, TouchableHighlight } from 'react-native';
import { Actions } from 'react-native-router-flux';

//imagens 
const logo = require('../imagens/logo.png');
const jogar = require('../imagens/botao_jogar.png');
const sobreJogo = require('../imagens/sobre_jogo.png');
const outrosJogos = require('../imagens/outros_jogos.png');

export default class CenaPrincipal extends Component{
    render() {
        return (
            <View style = { styles.tela } >   
                <View style = { styles.logo }>     
                    <Image source = { logo } />

                    <TouchableHighlight
                        onPress = {() => { Actions.resultado(); }} >                
                        <Image source = { jogar } />
                    </TouchableHighlight>
                </View>

                <View style = { styles.jogos }>

                    <TouchableHighlight
                        onPress = {() => { Actions.sobreJogo(); }} >
                        <Image source = { sobreJogo } />
                    </TouchableHighlight>

                    <TouchableHighlight
                        onPress = {() => { Actions.outrosJogos(); }} >
                        <Image source = { outrosJogos } />
                    </TouchableHighlight>

                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({

    tela: {
        backgroundColor: '#61BD8C', 
        flex: 1
    },

    logo: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 10
    },

    jogos: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        flex: 1       
    },
})