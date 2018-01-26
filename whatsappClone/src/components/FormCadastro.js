import React from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import PropTypes from 'prop-types'; 
export default props => (
    <View style = { styles.Form } >
        <View style = { styles.divForm } >
            <TextInput style = { styles.input } placeholder = "Nome" />
            <TextInput style = { styles.input } placeholder = "E-mail" /*keyboardType = {'email-address'}*/ />
            <TextInput style = { styles.input } placeholder = "Senha" /*keyboardType = {'visible-password'}*/ />
        </View>

        <View style = { styles.divButton } >
            <Button title = "Cadastrar" color = '#115E54' onPress = {() => false } />
        </View>
    </View>
);

const styles = StyleSheet.create({
    Form: {
        flex: 1,
        padding: 10
    },

    divForm: {
        flex: 4,
        justifyContent: 'center'
    },

    divButton: {
        flex: 1
    },

    input: {
        fontSize: 20,
        height: 45
    }
}) 

Component.propTypes = {
    text: PropTypes.string.isRequired,
};
