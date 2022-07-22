import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, SafeAreaView, View } from 'react-native';
import {useFonts, Quicksand_400Regular, Quicksand_500Medium, Quicksand_700Bold} from '@expo-google-fonts/quicksand';
import AppLoading from 'expo-app-loading';
import Texto from './src/components/Texto'
import Botao from './src/components/Botao';
import React from 'react';
import Header from './src/components/Header';
 
export default function App() {
  const[fonteCarregada] = useFonts({
    'QuicksandRegular': Quicksand_400Regular,
    'QuicksandMedium': Quicksand_500Medium,
    'QuicksandBold': Quicksand_700Bold,
  })

  if(!fonteCarregada) return <AppLoading/>

  return (
    <SafeAreaView style={styles.container}>
      
      <Header/>
      
        <View style={styles.textos}>

          
          

          <Texto tipo='negrito'>Telefone: </Texto>
          <Texto tipo='medio'>4002-8922</Texto>

          <Texto tipo='negrito'>Email: </Texto>
          <Texto tipo='medio'>joao@gmail.com</Texto>

          <Texto tipo='negrito'>Limite de crédito: </Texto>
          <Texto tipo='medio'>R$ 5499,99</Texto>

        </View>

        <View style={styles.botoes}>

          <Botao tipo='grande' cor='verde'>Alterar limite de crédito</Botao>

        </View>

      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignContent: 'center',
    backgroundColor: '#fff',
    

  },
  botoes: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignContent: 'center',
    backgroundColor: '#fff',
    marginBottom: 60,
    marginHorizontal: 60,

  },
  textos: {
    flex: 1,
    flexDirection: 'column',
    position: 'relative',
    justifyContent: 'space-evenly',
    backgroundColor: '#fff',
    marginLeft: 16,
  }
});
