import { StatusBar } from 'expo-status-bar';
import {View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import {useFonts, Quicksand_400Regular, Quicksand_500Medium, Quicksand_700Bold} from '@expo-google-fonts/quicksand';
import Navigation from './src/application/navigation'
 
export default function App() {
  const[fonteCarregada] = useFonts({
    'QuicksandRegular': Quicksand_400Regular,
    'QuicksandMedium': Quicksand_500Medium,
    'QuicksandBold': Quicksand_700Bold,
  })

  if(!fonteCarregada) return <View></View>

  return (
<<<<<<< HEAD
    <SafeAreaProvider>
      <Navigation/>
      <StatusBar/>
    </SafeAreaProvider>
  );
}

=======
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
>>>>>>> react-app-view-profile
