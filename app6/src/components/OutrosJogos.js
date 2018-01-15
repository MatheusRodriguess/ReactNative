import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class OutrosJogos extends Component{
    render(){
        return(
            <View style = { styles.tela }>                
                <Text style = { styles.txt }> Informações sobre outros jogos desenvolvidos por Matheus Rodrigues </Text>
                <Text style = { styles.tamanho }>  ---- Em breve outros jogos ---- </Text>
            </View>
        );     
    }
}

const styles = StyleSheet.create({

    tela:{
        backgroundColor: '#61BD8C',
        flex: 1
    },

    txt: {
        fontSize: 18,
        textAlign: 'center',
        marginBottom: 30,
        marginTop: 20,
        fontWeight: 'bold'
    },

    tamanho: {
        fontSize: 18,
        padding: 10,
        textAlign: 'center',
        fontWeight: 'bold'
    }
})