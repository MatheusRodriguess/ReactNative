import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class SobreJogo extends Component{
    render() {
        return(
            <View style = { styles.tela }>
                <Text style = { styles.txt }> Informações sobre o jogo Cara ou Coroa </Text>
                <Text style = { styles.tamanho }> - A moeda é escolhida automaticamente pelo computador </Text>
                <Text style = { styles.tamanho }> - O usuário deve escolher Cara ou Coroa antes de aperta o botão jogar </Text>
                <View style = {{ justifyContent: 'flex-end', alignItems: 'center', flex: 1 }}>
                    <Text style = { styles.rodape }> - Desenvolvido por Matheus Rodrigues </Text>
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

    txt: {
        fontSize: 18,
        textAlign: 'center',
        marginBottom: 30,
        marginTop: 20,
        fontWeight: 'bold'
    },

    tamanho: {
        fontSize: 18,
        padding: 10
    },

    rodape: {
        fontSize: 18,
        fontWeight: 'bold',
    }
})