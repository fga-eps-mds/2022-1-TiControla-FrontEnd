import { StyleSheet, Text, SafeAreaView, View } from 'react-native';
import {useFonts, Quicksand_400Regular, Quicksand_500Medium, Quicksand_700Bold} from '@expo-google-fonts/quicksand';
import { DebtEditing } from './src/views/DebtEditing';
 
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
          <DebtEditing />
    </SafeAreaView>
  );
}