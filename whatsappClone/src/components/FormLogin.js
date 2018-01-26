import React from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableHighlight } from 'react-native';
import { Actions } from 'react-native-router-flux';
import PropTypes from 'prop-types'; 
export default props => (
    <View style = { styles.Form } >
        <View style = { styles.divTopo }>
            <Text style = { styles.title } > WhatsApp Clone </Text>
        </View>

        <View style= { styles.divForm } >
            <TextInput style = { styles.input } placeholder="E-mail"/>
            <TextInput style = { styles.input } placeholder="Senha"/>

            
            
                <Text style = { styles.txtCadastrar } > Ainda não tem cadastro? cadastre-se </Text>
            
        </View>

        <View style = { styles.divBotao } >
            <Button title="Acessar" color = '#115E54' onPress = {() => false }/>
        </View>
    </View>
);

const styles = StyleSheet.create({
    Form: {
        flex:1,
        padding: 10
    },

    divTopo: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    divForm: {
        flex: 2
    },

    divBotao: {
        flex: 2
    },

    title: {
        fontSize: 25
    },

    input: {
        fontSize: 20,
        height: 45
    },

    txtCadastrar: {
        fontSize: 23
    }
})

Component.propTypes = {
    text: PropTypes.string.isRequired,
};
