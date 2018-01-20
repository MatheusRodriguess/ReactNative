import React, { Component } from  'react';
import { View } from 'react-native';
import { Entrada, Comando, Operacao } from './PainelIndex';

/*export default function(props) {
    return(
        <View>
            <Text> Painel </Text>
        </View>
    )
}*/

const Painel = props => (
    <View>
        <Entrada 
            num1 = { props.num1 } 
            num2 = { props.num2 } 
            atualizaValor = { props.atualizaValor }
        />
        <Operacao operacao = { props.operacao } atualizaOperacao = { props.atualizaOperacao } />
        <Comando acao = { props.calcular } />
    </View>
);

export { Painel };