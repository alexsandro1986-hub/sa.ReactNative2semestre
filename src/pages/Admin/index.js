import * as React from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';
import { ContextInfo } from '../ContextInfo/contextinfo';
import { useContext } from 'react';
// import { PieChart } from "react-native-gifted-charts";
import { IconButton } from 'react-native-paper';


const Stack = createStackNavigator();

export default function StackAdmin() {
    const {logout} = useContext(ContextInfo)
    return (
        <Stack.Navigator initialRouteName='FeedAdmin'>
            <Stack.Screen name='FeedAdmin' component={FeedAdmin}
                options={{
                    title: 'Feed ou Home',
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
                          icon='message-plus'
                          size={28}
                          color='#ffffff'
                          onPress={() => logout()}
                        />
                      )
                }} />
            <Stack.Screen name='Relatorio' component={Relatorio} options={{
                title: 'Relatórios',
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
            }} />
            <Stack.Screen name='Usuarios' component={Usuarios} />
            {/* <Stack.Screen name='Suporte' component={Suporte} /> */}
            <Stack.Screen name='Graficos' component={Graficos} />
        </Stack.Navigator>
    );

}
function FeedAdmin() {
    const navigation = useNavigation()
    return (


        <View style={feed.container}>

            <View style={feed.cima}>

                <TouchableOpacity
                    onPress={() => navigation.navigate('Relatorio')}
                    style={feed.botao}>

                    <MaterialCommunityIcons name="graph" color={'white'} size={50} />

                    <Text style={feed.textoBotao}>
                        Relatório
                    </Text>

                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => navigation.navigate('Chat', { name: 'admin' })}
                    style={feed.botao}>

                    <MaterialCommunityIcons name="comment-account" color={'white'} size={50} />

                    <Text style={feed.textoBotao}>
                        Suporte
                    </Text>

                </TouchableOpacity>


                <TouchableOpacity
                    onPress={() => navigation.navigate('Usuarios')}
                    style={feed.botao}>

                    <MaterialCommunityIcons name="account-multiple-outline" color={'white'} size={50} />

                    <Text style={feed.textoBotao}>
                        Usuários
                    </Text>

                </TouchableOpacity>


                <View style={feed.options}>

                </View>

            </View>



        </View>
    );
}

const feed = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#FFF'
    },
    cima: {
        height: '50%',
        width: '100%',
        justifyContent: 'center',
        alignContent: 'center',
        flexWrap: 'wrap',
        gap: 20,
        backgroundColor: 'transparent',
        borderBottomWidth: 2,
        borderColor: '#97D8AE',
    },

    options: {
        width: '40%',
        height: '40%',
        backgroundColor: '#cdcdcd',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',

    },
    botao: {
        width: '40%',
        height: '40%',
        backgroundColor: '#97D8AE',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 15, shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,
        elevation: 8,
    },
    textoBotao: {
        fontSize: 18,
        fontWeight: '800',
        color: '#3C8F5A'
    }
})

const telaRelatorio = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'flex-start',
        // alignItems: 'center',
        backgroundColor: '#FFF',
        gap: 11,
    },
    cima: {
        paddingTop: '37%',
        height: '100%',
        width: '100%',
        justifyContent: 'center',
        alignContent: 'center',
        flexWrap: 'wrap',
        gap: 20,
        backgroundColor: 'transparent',

        borderColor: '#97D8AE',
        flexDirection: 'row'
    },

    options: {
        width: '40%',
        height: '40%',
        backgroundColor: '#cdcdcd',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',

    },
    botao: {
        width: '40%',
        height: '55%',
        backgroundColor: '#97D8AE',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 15, shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,
        elevation: 8,
    },
    textoBotao: {
        fontSize: 18,
        fontWeight: '800',
        color: '#3C8F5A'
    }
})



function Relatorio() {
    const navigation = useNavigation()
    return (


        <View style={telaRelatorio.container}>
            <ScrollView>
                <View style={telaRelatorio.cima}>

                    <TouchableOpacity
                        onPress={() => navigation.navigate('Graficos', { tipo: 'idade' })}
                        style={telaRelatorio.botao}>

                        <MaterialCommunityIcons name="format-list-numbered-rtl" color={'white'} size={50} />

                        <Text style={telaRelatorio.textoBotao}>
                            Idade
                        </Text>

                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Graficos', { tipo: 'medicamentos' })}
                        style={telaRelatorio.botao}>

                        <MaterialCommunityIcons name="pill" color={'white'} size={50} />

                        <Text style={telaRelatorio.textoBotao}>
                            Medicamentos
                        </Text>

                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Graficos', { tipo: 'Comorbidades' })}
                        style={telaRelatorio.botao}>

                        <MaterialCommunityIcons name="diabetes" color={'white'} size={50} />

                        <Text style={telaRelatorio.textoBotao}>
                            Comorbidades
                        </Text>

                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Graficos', { tipo: 'alergia' })}
                        style={telaRelatorio.botao}>

                        <MaterialCommunityIcons name="allergy" color={'white'} size={50} />

                        <Text style={telaRelatorio.textoBotao}>
                            Alergias
                        </Text>

                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Graficos', { tipo: 'sangue' })}
                        style={telaRelatorio.botao}>

                        <MaterialCommunityIcons name="iv-bag" color={'white'} size={50} />

                        <Text style={telaRelatorio.textoBotao}>
                            Sangue
                        </Text>

                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Graficos', { tipo: 'doador' })}
                        style={telaRelatorio.botao}>

                        <MaterialCommunityIcons name="hand-heart" color={'white'} size={50} />

                        <Text style={telaRelatorio.textoBotao}>
                            Doador
                        </Text>

                    </TouchableOpacity>



                </View>

            </ScrollView>

        </View>
    );

}

function Graficos({ route }) {
    const navigation = useNavigation()
    const { tipo } = route.params
    const { vetorUser } = useContext(ContextInfo)
    let amostra = []
    const pieData = []
    // const data = [] //Dados do Grafico (valores)
    const coresGraph = [
        "#FF0000",
        "#00FF00",
        "#0000FF",
        "#FFFF00",
        "#FF00FF",
        "#00FFFF",
        "#800000",
        "#008000",
        "#000080",
        "#808000",
        "#800080",
        "#008080",
        "#808080",
        "#C0C0C0",
        "#FFA500",
        "#FFC0CB",
        "#008040",
        "#FF4500",
        "#800000",
        "#008000",
        "#000080",
        "#800000",
        "#008000",
        "#000080",
      
    ]

    vetorUser.map((infos) => {
        console.log(tipo)
        let i = Object.keys(infos).indexOf(tipo)
        amostra.push(Object.values(infos)[i])
        console.log('1', amostra)


    })
    // Contando números de elementos repetidos dentro da amostra
    const contadorElementos = {};
    amostra.forEach(elemento => {
        if (contadorElementos[elemento]) {

            contadorElementos[elemento] += 1
        }
        else {
            contadorElementos[elemento] = 1
        }
    })
    console.log(contadorElementos)
   
    // Criando objeto para o grafico 
    for (const [key, value] of Object.entries(contadorElementos)) {
        console.log(`${key}: ${value}`);
        let perc = (100 *Number(value)) / vetorUser.length 
        console.log(perc)
        const objGraph = {
            value: value,
            color: coresGraph[Math.floor(Math.random() * (coresGraph.length - 1))],
            text: `${perc}% ${key}`,

        }
        pieData.push(objGraph)
    }

   


    return (
        <View>
            <Text> {tipo} </Text>

            {/* <PieChart
                donut
                isThreeD
                showText
                innerCircleBorderWidth={10}
                innerCircleBorderColor="lightgreen"
                textColor="black"
                radius={200}
                textSize={20}
                showTextBackground
                textBackgroundRadius={26}
                data={pieData}
                initialAngle={290}
            /> */}


        </View>
    )
}


function Usuarios() {
    const navigation = useNavigation()
    const { vetorUser } = useContext(ContextInfo)

    return (

        <View style={feedCards.container}>
            <ScrollView style={{ width: '100%' }}>
                {vetorUser.map((infos, index) =>

                    <View style={feedCards.cards} key={index}>

                        <Text style={feedCards.textoCards}> Nome: {infos.nome}</Text>
                        <Text style={feedCards.textoCards}> Idade: {infos.idade} </Text>
                        <Text style={feedCards.textoCards}> Alergia: {infos.alergia}</Text>
                        <Text style={feedCards.textoCards}> Tipo Sanguíneo: {infos.sangue}</Text>
                        <Text style={feedCards.textoCards}> Doador de orgãos: {infos.doador}</Text>
                        <Text style={feedCards.textoCards}> Telefone: {infos.telefone}</Text>
                        <Text style={feedCards.textoCards}> CEP: {infos.cep}</Text>
                        <Text style={feedCards.textoCards}> Logradouro: {infos.logradouro}</Text>
                        <Text style={feedCards.textoCards}> Número da Residência: {infos.nCasa}</Text>
                        <Text style={feedCards.textoCards}> E-mail: {infos.email}</Text>
                        <Text style={feedCards.textoCards}> Nome do Contanto de Emergência: {infos.contatoEmergencia}</Text>
                        <Text style={feedCards.textoCards}> Telefone de Emergência: {infos.telefoneEmergencia}</Text>

                    </View>
                )
                }
            </ScrollView>
        </View>
    )
}

const feedCards = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#FFF',

    },
    cima: {
        height: '50%',
        width: '100%',
        justifyContent: 'center',
        alignContent: 'center',
        gap: 20,
        backgroundColor: 'transparent',
        borderBottomWidth: 2,
        borderColor: '#97D8AE',
    },

    containerCards: {
        width: '100%',
        height: 50,
        // borderWidth: 1,
        // borderColor: '#97D8AE',
        flexDirection: 'row',
        // justifyContent: 'space-evenly',
        // alignItems: 'stretch'
        paddingBottom: 200
    },
    cards: {
        borderWidth: 2,
        borderRadius: 20,
        height: 300,
        width: '100%',
        borderColor: '#97D8AE',
        marginBottom: 20

    },
    textoCards: {
        fontSize: 18,
        color: 'black',

    }

})

