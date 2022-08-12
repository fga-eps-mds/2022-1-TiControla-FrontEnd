import { View,Text,StyleSheet, FlatList } from "react-native";

import Header, {} from '../../components/Header';
import Balance from '../../components/Balance';
import Movements from "../../components/Movements";
import Actions from "../../components/Actions";
const list = [
    {
        id: 1,
        label: 'Boleto conta luz',
        value: '300,90',
        date: '6/06/2022',
        type: 0 //despesas
    },
    {
        id: 2,
        label: 'Pix pagamento fulano',
        value: '2.500,00',
        date: '20/06/2022',
        type: 1 //receitas / entradas
    },
    {
        id: 3,
        label: 'Salário',
        value: '7.200,00',
        date: '22/06/2022',
        type: 1 //receitas /entradas
    },
]

export default function App(){
  return(
    <View style={styles.container}>
        <Header name = "Henrique Galdino"/>

        <Balance saldo="9.250,90" gastos="-527,00"/>

        <Actions/>
        <Text style={styles.title}>Últimas movimentações</Text>

        <FlatList
            style={styles.list}
            data={list}
            keyExtractor={ (item) => String(item.id)}
            showsVerticalScrollIndicator={false}
            renderItem={ ({ item }) => <Movements data={item}/>}
        />


    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: '#fafafa',
  },
  title:{
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 14,
    marginTop: 14,
    marginRight: 14,
    marginBottom: 14,
    },
    list:{
        marginStart: 18,
        marginEnd: 14,


    },
});