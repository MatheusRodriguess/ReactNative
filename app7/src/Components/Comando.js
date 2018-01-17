import React from 'react';
import { Button, StyleSheet } from 'react-native';

const Comando = props => (
    <Button 
        style = { styles.comando }
        title = 'Calcular'
        onPress = { props.acao }
    />
)

const styles = StyleSheet.create({
    comando: {

    }
})

export { Comando };