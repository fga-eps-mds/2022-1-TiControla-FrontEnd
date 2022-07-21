import React from 'react';
import {StyleSheet,Text,View} from 'react-native';

export default function Header(){
    return(
        <View style={styles.header}>
            <Text style={styles.title}>
                Minha lista de afazeres
            </Text>
        </View>
    );
}
const styles = StyleSheet.create({
    header:{
        height:80,
        paddingTop:38,
        backgroundColor:'coral'
    },
    title:{
        textAlign:'center',
        color:'#fff',
        fontWeight:'bold',
        fontSize:20
    }
});