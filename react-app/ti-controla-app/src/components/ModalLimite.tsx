import React from "react";
import{SafeAreaView,View, TouchableOpacity, Text, StyleSheet} from "react-native";
import Texto from "./Texto";

export function ModalLimite({handleClose}) {
    return (
        <SafeAreaView style={styles.container}>
            <TouchableOpacity style={{flex:1, zIndex:9}} onPress={handleClose}>
                
                <View style={styles.content}>
                    <TouchableOpacity 
                    style={styles.creditButton}
                    onPress={ () => {}}
                    activeOpacity={0.92}
                    >
                        <Texto tipo = 'negrito' style={styles.editText}> Insira o novo limite</Texto>
                    </TouchableOpacity>
                    
                    <TouchableOpacity 
                    style={styles.actionButton}
                    onPress={ () => alert("Limite alterado com sucesso!")}
                    activeOpacity={0.92}
                    >
                        <Texto tipo = 'negrito' style={styles.actionText}> Confirmar alteração</Texto>
                    </TouchableOpacity>
                    

                </View>

            </TouchableOpacity>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    content: {
        marginVertical: 300,
        marginLeft: 10,
        marginRight: 10,

    },
    actionButton: { //style do botão 'confirmar alteração'
        zIndex:99,
        backgroundColor: '#59D9DA',
        borderRadius: 6,
        marginTop: 8,
        padding: 8,
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,0.2)',

        shadowColor: 'rgba(0,0,0,0.3)',
        shadowOffset: { width: 0, 
            height: 2 },

        elevation: 5,
        shadowOpacity: 0.28,
        shadowRadius: 4,
    },
    creditButton: { //style do botão 'confirmar alteração'
        zIndex:99,
        backgroundColor: '#59D9DA',
        borderRadius: 6,
        marginTop: 8,
        padding: 8,
       
    },
    actionText: {
        textAlign: "center",
        fontSize: 20,
        color: '#0B4B54',
    },
    editText: {
        textAlign: "center",
        fontSize: 20,
        //color: '#bfbfbf',  cor depois de o fundo virar branco
        color: '#0B4B54',
    }
})