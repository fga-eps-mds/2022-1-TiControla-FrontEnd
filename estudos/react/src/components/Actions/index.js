import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    ScrollView
  } from 'react-native';

  import { AntDesign } from '@expo/vector-icons';
  import { Feather } from '@expo/vector-icons';

export default function Actions() {
 return (
   <ScrollView style={styles.container} horizontal={true} showsHorizontalScrollIndicator={false}>
      
      <TouchableOpacity style={styles.actionButton}>
        <View style ={styles.areaButton}>
          <Feather name="dollar-sign" size={26} color="#000" />
        </View>
        <Text style={styles.labelButton}>Adicionar</Text>
      </TouchableOpacity>
     
     <TouchableOpacity style={styles.actionButton}>
        <View style ={styles.areaButton}>
          <AntDesign name="tagso" size={26} color="#000" />
        </View>
        <Text style={styles.labelButton}>Compras</Text>
      </TouchableOpacity>
     
      <TouchableOpacity style={styles.actionButton}>
        <View style ={styles.areaButton}>
          <AntDesign name="barcode" size={26} color="#000" />
        </View>
        <Text style={styles.labelButton}>Boletos</Text>
      </TouchableOpacity>
     
      <TouchableOpacity style={styles.actionButton}>
        <View style ={styles.areaButton}>
          <AntDesign name="creditcard" size={26} color="#000" />
        </View>
        <Text style={styles.labelButton}>Cartão</Text>
      </TouchableOpacity>
     
      <TouchableOpacity style={styles.actionButton}>
        <View style ={styles.areaButton}>
          <AntDesign name="copy1" size={26} color="#000" />
        </View>
        <Text style={styles.labelButton}>Extrato</Text>
      </TouchableOpacity>
      
      
    
    
    
    
    
    </ScrollView>
  );
 }

  const styles = StyleSheet.create({
    container:{
      maxHeight: 84,
      marginBottom: 14,
      marginTop: 14,
      paddingEnd: 14,
      paddingStart: 14,
    
    },
    actionButton:{
      alignItems: 'center',
      marginRight: 32,
    },
    areaButton:{
      backgroundColor: '#ecf0f1',
      height: 60,
      width: 60,
      borderRadius: 30,
      justifyContent: 'center',
      alignItems: 'center',
    },
    labelButton:{
      marginTop: 4,
      textAlign: 'center',
      fontWeight: 'bold',
    }
  });
