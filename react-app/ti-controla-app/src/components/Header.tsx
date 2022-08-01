import React from "react";
import{
    View,
    Text,
    StyleSheet,
    StatusBar,
    TouchableOpacity
} from "react-native";

import {Feather} from '@expo/vector-icons'
import Texto from "./Texto";

const statusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight + 322 : 64;


export default function Header(){
   return(
    <View style={styles.container}>

        <View style={styles.content}>
            

            <TouchableOpacity activeOpacity={0.9} style = {styles.buttonvoltar}>
                    <Feather name="arrow-left" size={28} color="#fff"/>
            </TouchableOpacity>
            
            <TouchableOpacity activeOpacity={0.9} style = {styles.buttonuser}>
                    <Feather name="user" size={45} color="#fff"/>
            </TouchableOpacity>
            
        </View>
            <Texto tipo='negrito' style={styles.username}>João Vitor Silva</Texto>
    </View>
        
    )
}

const styles = StyleSheet.create({
    container:{
        height: statusBarHeight,
        backgroundColor: '#0B4B53',
        flexDirection: 'row',
        paddingHorizontal: 16,
        paddingVertical: statusBarHeight/2,
    },

    content:{
        flex: 1,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    buttonvoltar:{
        marginTop: -220,
        width: 44,
        height: 44,
        backgroundColor: '#2F999D',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 22,
    },
    buttonuser:{
        marginTop: -50,
        marginLeft: 50,
        width: 64,
        height: 64,
        backgroundColor: '#2F999D',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 42,
        
    },username:{
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold',
        marginLeft: 96,
        marginTop: 250,
        flex: 1,
        textAlign: 'center',
        position: 'absolute',
        width: 200,
    },
})