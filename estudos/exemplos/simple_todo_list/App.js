import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Alert, View,FlatList,TouchableWithoutFeedback,Keyboard } from 'react-native';
import Header from './components/header';
import TodoItem from './components/todoItems';
import AddTodo from './components/addTodo';
import { Validator } from './helpers/functions';

export default function App() {

  const [todoList, setTodoList] = useState([
    { task: 'Programar', key: 1 },
    { task:'Ir pro rolê com o Leo e o Matheus',key : 2},
    { task: 'Fechar a issue', key: 3 },
    { task: 'Aprender a fazer Pull Request', key: 4 },
  ]);

  const pressHandler = (key) => 
  {
      setTodoList((prevTodo => prevTodo.filter(todo => todo.key != key )));
  }
  const submitHandler = (task) => {

    if(new Validator().validateTask(task))
    {
      setTodoList((prevTodos) => {
        return [
          { task, key: Math.random().toString() },
          ...prevTodos
        ];
      });
    }else
    {
      Alert.alert('Oops!', 'Task must be over 3 chars long', [{ text: 'Undertood' }]);
    }

  }

  return (
    <TouchableWithoutFeedback onPress ={()=>{Keyboard.dismiss()}}>
      <View style={styles.container}>
        <Header />      
        <View style={styles.content}>
          <AddTodo submitHandler = {submitHandler} />
          
          <View style={styles.list} >
            <FlatList data={todoList} renderItem={({ item })=>(
              <TodoItem item={item} pressHandler={pressHandler}  />
            )}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
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
