import React from  'react';
import { View, Text } from 'react-native';
import Visor from './Visor';

/*export default function(props) {
    return(
        <View>
            <Text> Resultado </Text>
        </View>
    )
}*/

const Resultado =  props => (
    <Visor resultado = { props.resultado }/>
)

export { Resultado };