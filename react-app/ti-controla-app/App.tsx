import { StatusBar } from 'expo-status-bar';
import {View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import {useFonts, Quicksand_400Regular, Quicksand_500Medium, Quicksand_700Bold} from '@expo-google-fonts/quicksand';
import Navigation from './src/application/navigation'
import React from 'react';
 
export default function App() {
  const[fonteCarregada] = useFonts({
    'QuicksandRegular': Quicksand_400Regular,
    'QuicksandMedium': Quicksand_500Medium,
    'QuicksandBold': Quicksand_700Bold,
  })

  if(!fonteCarregada) return <View></View>

  return (
    <SafeAreaProvider>
      <Navigation/>
      <StatusBar/>
    </SafeAreaProvider>
  );
}

