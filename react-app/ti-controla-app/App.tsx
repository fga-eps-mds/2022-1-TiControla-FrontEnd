import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, SafeAreaView, View } from 'react-native';
import {useFonts, Quicksand_400Regular, Quicksand_500Medium, Quicksand_700Bold} from '@expo-google-fonts/quicksand';
import Texto from './src/components/Texto'
import Botao from './src/components/Botao';
import { usuarioTest } from './src/application/mocks/usuarioTest';
import React from 'react';
import Profile from './src/views/Profile';
 
export default function App() {
  const[fonteCarregada] = useFonts({
    'QuicksandRegular': Quicksand_400Regular,
    'QuicksandMedium': Quicksand_500Medium,
    'QuicksandBold': Quicksand_700Bold,
  })

  if(!fonteCarregada) return <View/>
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'center',
      backgroundColor: '#fff',
    },
  });
  return (
    <SafeAreaView style={styles.container}>
      {/* <Texto>Texto normal</Texto>
      <Texto tipo='medio'>Texto medio</Texto>
      <Texto tipo='negrito'>Texto negrito</Texto>
      <Botao tipo='grande' cor='verde'>Entrar</Botao>
      <Botao tipo='pequeno' cor='verde'>Editar</Botao>
      <Botao tipo='grande' cor='vermelho'>Excluir minha conta</Botao>
      <Botao tipo='pequeno' cor='vermelho'>Deletar</Botao> */}
      
      <Profile{...usuarioTest}/>
    </SafeAreaView>
  );
}