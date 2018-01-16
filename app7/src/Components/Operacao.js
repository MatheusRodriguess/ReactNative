import React from 'react';
import { Picker, StyleSheet } from 'react-native';

const Operacao = props => (
    <Picker style = { styles.operacao }>
        <Picker.Item label = 'Soma' value = '+' />
        <Picker.Item label = 'Subtração' value = '-' />
        <Picker.Item label = 'Multiplicação' value = '*' />
        <Picker.Item label = 'Divisão' value = '/' />
    </Picker>
)

const styles = StyleSheet.create({
    operacao: {
        marginTop: 15,
        marginBottom: 15
    }
})

export { Operacao };
