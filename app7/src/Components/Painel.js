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

class Painel extends Component {

    constructor(props) {
        super(props);

        this.state = { num1: '', num2: '', operacao: '' };

        this.calcular = this.calcular.bind(this);
        this.atualizaValor = this.atualizaValor.bind(this);
        this.atualizaOperacao = this.atualizaOperacao.bind(this);
    }

    calcular() {
        const resultado = parseFloat(this.state.num1) + parseFloat(this.state.num2);
    }

    atualizaValor(nomeCampo, numero) {
        const obj = {  };
        obj[nomeCampo] = numero;
        this.setState(obj);
    }

    atualizaOperacao( operacao ){
        this.setState({ operacao });
    }

    render() {
        return (
            <View>
                <Entrada 
                    num1 = { this.state.num1 } 
                    num2 = { this.state.num2 } 
                    atualizaValor = { this.atualizaValor }
                />
                <Operacao operacao = { this.state.operacao } atualizaOperacao = { this.atualizaOperacao } />
                <Comando acao = { this.calcular } />
            </View>
        );
    }
}

export { Painel };