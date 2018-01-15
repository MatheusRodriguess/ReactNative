import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const moedaCara = require('../imagens/moeda_cara.png');
const moedaCoroa = require('../imagens/moeda_coroa.png');

const moedas = [moedaCara, moedaCoroa];

const escolha = Math.random() * 2;

export default class Resultado extends Component {
    
    constructor(props) {
        super(props);

        this.state = { resultado: '' };
    }
    
    componentWillMount() {
        const numAleatorio = Math.floor(Math.random() * 2);
        let CaraouCoroa = ''

        if(numAleatorio === 0){
            CaraouCoroa = 'Cara';
        } else {
            CaraouCoroa = 'Coroa';
        }

        this.setState({ resultado: CaraouCoroa });
    }
    
    render(){
        if (this.state.resultado === 'Cara') {
            return(
                <View style = { styles.tela } >
                    <Image source = { moedaCara } />
                    <Text style = { styles.txt }> { this.state.resultado }</Text>
                </View>           
            );
        } else {
            return (
                <View style = { styles.tela } >
                    <Image source ={ moedaCoroa } />
                    <Text style = { styles.txt }> { this.state.resultado }</Text>
                </View>     
            );
        }
    }
}

const styles = StyleSheet.create({
    tela: {
        backgroundColor: '#61BD8C',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    txt: {
        fontSize: 30,
        marginTop: 15
    }
})