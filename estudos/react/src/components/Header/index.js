import React from "react";
import{
    View,
    Text,
    StyleSheet,
    StatusBar,
    TouchableOpacity
} from "react-native";

import {Feather} from '@expo/vector-icons'
import {MotiView, MotiText} from 'moti'

const statusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight + 22 : 64;


export default function Header({ name}){
   return(
    <View style={styles.container}>

        <View style={styles.content}>
            <Text style={styles.username} >{name}</Text>

            <TouchableOpacity activeOpacity={0.9} style = {styles.buttonuser}>
                    <Feather name="user" size={28} color="#fff"/>
            </TouchableOpacity>

        </View>
        
    </View>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#0B4B53',
        paddingTop: statusBarHeight,
        flexDirection: 'row',
        paddingStart: 16,
        paddingBottom: 44
    },

    content:{
        flex: 1,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    username:{
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
        
    },
    buttonuser:{
        width: 44,
        height: 44,
        backgroundColor: 'rgba(255,255,255,0.5)',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 22,
    }
})