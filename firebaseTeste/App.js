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

  cadastrarUsuario() {
    var email = "matheusstudenty@gmail.com";
    var senha = "novasenha123";

    const usuario = firebase.auth();
  
    usuario.createUserWithEmailAndPassword(
      email,
      senha
    ).catch(
      erro => {
        //erro.code
        //erro.message
        var mensagemErro = "";
        if ( erro.code == "auth/weak-password"){
          mensagemErro = "a senha precisa ter no minimo 6 caracteres";
          alert( mensagemErro );
        }       
      }
    );
  }

  verificarUsuarioLogado() {
    const usuario = firebase.auth();
    /*const usuarioAtual = usuario.currentUser;

    if( usuarioAtual ) {
      alert("usuario logado");
    }
    else
    {
      alert("usuario não logado");
    }*/
    usuario.onAuthStateChanged(
      usuarioAtual => {
        if( usuarioAtual ) {
          alert("usuario logado");
        }
        else
        {
          alert("usuario não logado");
        }
      }
    );
  } 

  deslogarUsuarioLogado() {
    const usuario = firebase.auth();
    usuario.signOut();
  }
  
  logarUsuario(){
    var email = "matheusstudenty@gmail.com";
    var senha = "novasenha123";

    const usuario = firebase.auth();

    usuario.signInWithEmailAndPassword(
      email,
      senha
    ).catch(
      erro => {
          alert( erro.message );
        }       
    );


  }

  render() {
    
    return (
      <View>
        <Button
          onPress = { () => { this.cadastrarUsuario(); } }
          title = "cadastrar Usuario"
          color = "#841584"
          accessibilityLabel="cadastrar Usuario "
        />

        <Button
          onPress = { () => { this.verificarUsuarioLogado(); } }
          title = "verificar Usuario Logado "
          color = "#841584"
          accessibilityLabel="verificar Usuario Logado "
        />

        <Button
          onPress = { () => { this.deslogarUsuarioLogado(); } }
          title = "Deslogar Usuario Logado "
          color = "#841584"
          accessibilityLabel="deslogar Usuario Logado "
        />

        <Button
          onPress = { () => { this.logarUsuario(); } }
          title = "logar Usuario Logado "
          color = "#841584"
          accessibilityLabel="logar Usuario Logado "
        />
        
      </View>
    );
  }
}