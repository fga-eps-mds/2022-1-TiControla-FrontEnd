import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View,FlatList } from 'react-native';
import Header from './components/header';

export default function App() {

  const [todoList, setTodoList] = useState([
    { task: 'Programar', key: 1 },
    { task:'Ir pro rolê com o Leo e o Matheus',key : 2},
    { task: 'Fechar a issue', key: 3 },
    { task: 'Aprender a fazer Pull Request', key: 4 },
  ]);

  return (
    <View style={styles.container}>
      <Header />      
      <View style={styles.content}>
        
        {/* to form */}
        
        <View style={styles.list} >
          
          <FlatList data={todoList} renderItem={({ item })=>(
            <Text>{item.task}</Text>
          )}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content:{
    padding:40,
  },
  list:{
    marginTop:20
  }
});
