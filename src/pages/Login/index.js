import React, { useContext } from 'react';
import { useState } from 'react';
import { View, Image, StyleSheet, KeyboardAvoidingView } from 'react-native';
import { Input, Text } from 'react-native-elements';
import { TouchableOpacity } from 'react-native';
import { color } from 'react-native-elements/dist/helpers';
import { LinearGradient } from 'expo-linear-gradient';
import Feather from "@expo/vector-icons/Feather";
import { useNavigation, NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../Home'
import { StackTratamento } from '../Tratamento';
import Informacoes from '../Informacoes';
import StackAdmin from '../Admin'
import Chat from '../Chat';
import { ContextInfo, ContextInfoProvider } from '../ContextInfo/contextinfo';
import { IconButton } from 'react-native-paper';




const Stack = createStackNavigator();

export default function StackDeAcesso() {
  const {flagAdm, logout} = useContext(ContextInfo)

  return (

    <Stack.Navigator>
        
        
      {
      flagAdm?
       ( <>
      
        <Stack.Screen name='StackAdmin' component={StackAdmin} options={{ headerShown: false }} />
        <Stack.Screen name='Chat' component={Chat} />
    
        </>)
        :
        (<>
   
        <Stack.Screen name='Login' component={Login} options={{ headerShown: false }} />
        <Stack.Screen name='Home' component={Home}  options={{ headerShown: false }} />
        {/* options={{
                    title: 'Home',
                    headerStyle: {
                        backgroundColor: '#97D8AE',
                        borderColor: '#97D8AE',
                        borderWidth: 2,
                        borderBottomLeftRadius: 20,
                        borderBottomRightRadius: 20,

                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        fontWeight: '500',
                        fontSize: 30,
                    },
                    headerTitleAlign: "center",
                    headerRight: () => (
                        <IconButton
                          icon='door-open'
                          size={34}
                          color='#ffffff'
                          onPress={() =>logout() }
                        />
                      )
                }}/> */}
        <Stack.Screen name='Informacoes' component={Informacoes} options={{ headerShown: false }} />
        <Stack.Screen name='StackTratamento' component={StackTratamento} options={{ headerShown: false }} />
        <Stack.Screen name='Chat' component={Chat} />
    
        </>)
      }
    </Stack.Navigator>
    )

}




export function Login({ navigation }) {
  const [emailLogin, setEmailLogin] = useState('');
  const [senhaLogin, setSenhaLogin] = useState('');
  const {flagAdm, setFlagAdm, senhaAdm , loginAdm,
    inputSenha,
    inputEmail, vetorUser
  
  } = useContext(ContextInfo)



  const entrar = () => {
    vetorUser.map((user) => {
      
      switch (true){
        case emailLogin == loginAdm && senhaLogin == senhaAdm:
          setFlagAdm(!flagAdm)
          break;
        case emailLogin == user.email && senhaLogin == user.senha:
          navigation.navigate('Home')
          break;
        case emailLogin == inputEmail && senhaLogin == inputSenha:
          navigation.navigate('Informacoes')
          break;
      }
  })

  }

  return (

    

    <LinearGradient
      colors={['#CDE4AD', '#97D8AE', '#78D1D2']}
      //  background: linear-gradient(179.96deg, #CDE4AD 3.67%, #97D8AE 54.83%, #78D1D2 99.97%)
      style={styles.container}>

        <View style={styles.logo}>
        <Image
          source={require('../img/logoPreto.png')}

          style={{ width: 500, height: 400 }}
          resizeMode="contain"
        />

      </View>



      <KeyboardAvoidingView style={styles.containerInputs}>

        <View style={styles.AlturaElementosInput}>

          <Text style={styles.inputLabel}>Email </Text>

          <Input
            style={styles.inpt}
            // placeholder='Email'
            keyboardType='email-address'
            // leftIcon={{ type: 'font-awesome', name: 'envelope' }}
            onChangeText={setEmailLogin}
          />
        </View>

        <View style={styles.AlturaElementosInput}>
          <Text style={styles.inputLabel}> Senha</Text>
          <Input
            style={styles.inpt}
            // placeholder='Senha'
            secureTextEntry={true}
            // leftIcon={{ type: 'font-awesome', name: 'lock' }}
            onChangeText={setSenhaLogin}
          />

         
        </View>
        <View>
          
        </View>
        
        {/* <TouchableOpacity style={styles.botao} onPress={Cadastrar}>
          <Text style={styles.textoBotao}>Cadastrar</Text>
        </TouchableOpacity> */}

        <View style={styles.AlturaElementosInput}>
          <TouchableOpacity
            style={styles.botao}
            onPress={entrar}>
            <Text style={styles.textoBotao}> Confirmar </Text>

          </TouchableOpacity>
          
        </View>

        <View style={styles.viewCadastro}>
          <View style={styles.cadastroText}>
            <Text style={styles.textoVoltarCadastro}>Ainda não tem uma conta?</Text>
          </View>


          <View style={styles.cadastroBotao}>
          <TouchableOpacity onPress={() => navigation.navigate('Cadastro')} style={styles.botaoClique}>
          <Text style={styles.textoCliqueAqui}>Clique Aqui</Text>
        </TouchableOpacity>

          </View>

           
          
        </View>
      

      </KeyboardAvoidingView>



      <View style={styles.AlturaElementosInput}>
        
      </View>

    </LinearGradient >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#C7FFCC",
    alignItems: "center",
    flexDirection: 'column',
    paddingTop: '20%'

  },
  containerInputs: {
    width: '75%',
    height: '44%',
    borderWidth: 1,
    borderRadius: 20,
    borderColor: "white",
    backgroundColor: 'white',
    opacity: 0.71,

  },
  AlturaElementosInput: {

    height: '33.33%',
    
  },
  inpt: {
    width: '100%',
    height: 55,
  },
  inputLabel: {
    width: "100%",
    height: 50,
    fontWeight: 400,
    fontSize: 20,
    alignItems: 'flex-start',
    justifyContent: 'center',
    color: 'black',
    paddingLeft: 10,
    paddingTop: 18,

  },
  botao: {
    width: '80%',
    height: '50%',
    backgroundColor: '#78D1D2',
    borderWidth: 2,
    borderColor: '#589BAA',
    // box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 30,

  },

  textoBotao: {
    // paddingTop: 5,
    textAlign: 'center',
    alignItems: 'center',
    color: '#FFFFFF',
    fontSize: 23,
    fontWeight: 500,
    fontStyle: 'normal',
    color: 'white'

  },
  icon: {
    opacity: 0.71,
    alignSelf: 'center'
  },
  VoltarCadastro: {
    paddingTop: '20%',
    width: '100%',
    height: '15%',
  },
  textoVoltarCadastro: {
    fontSize: 17,
    fontWeight: 700,
    color: 'black',
    // textDecorationLine: 'underline'

  },
  textoCliqueAqui:{
    fontSize: 17,
    fontWeight: 700,
    color: 'blue',
  },
  viewCadastro: {
    marginTop: '30%',
    width: '100%',
    height: '35%', 
    position: 'relative',
    flexDirection: 'row', 
    alignItems: 'center', 
    
  },
  cadastroText: {
    width: '70%', 
    height: '100%',
    justifyContent: 'center', 
  },
  
  cadastroBotao: {
    width: '30%', 
    height: '100%',
    justifyContent: 'center', 
    marginLeft: 7,
  },
  logo: {
    height: 100,
    marginBottom: 90,
    justifyContent: 'center',
    alignItems: 'center',
    
  },
 
  
 
});
