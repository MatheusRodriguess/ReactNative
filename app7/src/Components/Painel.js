import React from  'react';
import { View, Text } from 'react-native';
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
        <Entrada />
        <Operacao />
        <Comando />
    </View>
)

export { Painel };