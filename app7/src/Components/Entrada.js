import React from 'react';
import { View, StyleSheet } from 'react-native';
import Numero from './Numero';

const Entrada = props => (
    <View style = { styles.numeros }>
         <Numero />
         <Numero />
    </View>
)

const styles = StyleSheet.create({
    numeros: {
        flexDirection: 'row',
        justifyContent: 'space-between' 
    }
})

export { Entrada };