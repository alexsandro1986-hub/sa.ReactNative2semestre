
import React from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, KeyboardAvoidingViewBase } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { ContextInfo, ContextInfoProvider } from '../ContextInfo/contextinfo';
import { useContext, useState } from 'react';
import { KeyboardAvoidingView } from 'react-native';
import axios from 'axios';
import api from '../Api_gerenciamento';
const baseURL = 'https://helpx.glitch.me'



export default function Cadastro() {
  const { inputEmail, setInputEmail } = useContext(ContextInfo)
  const { inputSenha, setInputSenha } = useContext(ContextInfo)
  const { inputConfirmaSenha, setInputConfirmaSenha } = useContext(ContextInfo)
  const [texto, setTexto] = useState('')
  return (

    <View style={styles.body}>
      {/* <View style={styles.logo}>
        <Image
          source={require('../img/logoHelpX.png')}

          style={{ width: 600 }}
          resizeMode="contain"
        />

      </View> */}
      <View style={styles.container}>
        <View style={styles.viewInputs}>

          <Text style={styles.inputLabel}>Email</Text>
          <TextInput
            style={[styles.input, { marginBottom: 20 }]}
            placeholder="Email"
            onChangeText={setInputEmail}
            value={inputEmail}
          />
        </View>

        <View style={styles.viewInputs}>

          <Text style={styles.inputLabel}> Senha</Text>
          <TextInput
            style={[styles.input, { marginBottom: 20 }]}
            placeholder="Senha"
            onChangeText={setInputSenha}
            value={inputSenha}

          />
        </View>
        <Text> {texto} </Text>
        <View style={styles.viewInputs}>

          <Text style={styles.inputLabel}>Confirmar Senha</Text>
          <TextInput
            style={[styles.input, { marginBottom: 20 }]}
            placeholder="ConfirmarSenha"
            secureTextEntry={true}
            onChangeText={setInputConfirmaSenha}
            value={inputConfirmaSenha}
          />
        </View>

        <TouchableOpacity style={styles.botao} 
        onPress={() => {
          const cadastro = async (email, senha) => {
            try {
              const response = await api.post("/cadastro", { email, senha })

              console.log('OK', response.data)
              navigation.navigate("Login")
            } catch (error) {
              console.log(error)
              console.log(error.message)
              console.log(error.response.data)
              let texto_resposta = error.response.data
              setTexto(Object.values(texto_resposta))

            }
          }

          cadastro(inputEmail, inputSenha)


        }}>

          <Text style={styles.textoBotao}>OK</Text>


        </TouchableOpacity>
      </View>

    </View>

  );
}

const styles = StyleSheet.create({

  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97d8ae',

  },
  logo: {
    height: 100,
    marginBottom: 90,
    justifyContent: 'center',
    alignItems: 'center',

  },

  container: {
    width: '90%',
    height: '60%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    opacity: 0.8,
    borderRadius: 20,
  },
  input: {

    fontSize: 15,
    width: '80%',

    height: 50,
    borderColor: 'black',
    borderWidth: 1,
    paddingLeft: 10,
    marginBottom: 10,
    borderRadius: 20,

    backgroundColor: 'white',

  },

  viewInputs: {
    width: '100%',
    height: '25%',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },

  inpt: {
    borderBottomWidth: 1,
    width: '80%',
    height: 35
  },

  inputLabel: {

    height: 50,
    fontWeight: 400,
    fontSize: 20,
    alignItems: 'flex-end',
    justifyContent: 'center',
    color: 'black',
    paddingLeft: 10,
    paddingTop: 18,

  },
  botao: {
    backgroundColor: '#78D1D2',
    width: 180,
    height: 50,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',


  },
  textoBotao: {
    color: 'white',
    // fontFamily: 'Helvetica',
    fontWeight: 'bold',
  },
});

