import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

export default props => (
    <View>
        <TextInput
            style = { styles.visor } 
            placeholder = 'Resultado'
            editable = { false }
        />
    </View>
);

const styles = StyleSheet.create({
    visor: {
        fontSize: 30,
        height: 100
    }
});