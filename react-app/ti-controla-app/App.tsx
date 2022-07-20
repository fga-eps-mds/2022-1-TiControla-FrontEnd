import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, SafeAreaView } from 'react-native';
import {useFonts, Quicksand_400Regular, Quicksand_500Medium, Quicksand_700Bold} from '@expo-google-fonts/quicksand';
import AppLoading from 'expo-app-loading';
import Texto from './src/components/Texto'
 
export default function App() {
  const[fonteCarregada] = useFonts({
    'QuicksandRegular': Quicksand_400Regular,
    'QuicksandMedium': Quicksand_500Medium,
    'QuicksandBold': Quicksand_700Bold,
  })

  if(!fonteCarregada) return <AppLoading/>

  return (
    <SafeAreaView style={styles.container}>
      <Texto>Texto normal</Texto>
      <Texto tipo='medio'>Texto medio</Texto>
      <Texto tipo='negrito'>Texto negrito</Texto>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  texto: {
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
