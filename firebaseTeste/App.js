import firebase from 'firebase';
import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

export default class App extends Component {

  componentWillMount() {
    var config = {
      apiKey: "AIzaSyC9HVo_S2JmrurRZXnlhqomjyvZ9SAMuow",
      authDomain: "projeto-teste-95588.firebaseapp.com",
      databaseURL: "https://projeto-teste-95588.firebaseio.com",
      projectId: "projeto-teste-95588",
      storageBucket: "projeto-teste-95588.appspot.com",
      messagingSenderId: "453928442304"
    };

    firebase.initializeApp(config);
  }

    salvarDados() {
      var database = firebase.database();
      database.ref("pontuacao").remove();
  }

  render() {
    return (
      <View>
        <Button
          onPress = { () => { this.salvarDados(); } }
          title = "Salvar Dados"
          color = "#841584"
          accessibilityLabel="Salvar dados"
        />
        <Text> Meu App </Text>
      </View>
    );
  }
}