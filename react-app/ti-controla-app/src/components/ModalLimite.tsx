import React, { useState } from "react";
import{SafeAreaView,View, TouchableOpacity, TextInput, StyleSheet} from "react-native";
import { dimensao } from "../utils/dimensoesDoDispositivo";
import Texto from "./Texto";
//import { usuarioTest } from "../application/mocks/usuarioTest";
import { Usuario } from "../application/types/Usuario";

export default function ModalLimite({handleClose}: any) {
    const[limite, setLimite] = useState(salvaLimite.limiteMaximo);
    
    return (
        <SafeAreaView style={styles.container}>
            <TouchableOpacity style={{flex:1, zIndex:9}} onPress={handleClose}>
                
                <View style={styles.content}>
            
                    <Texto tipo = 'negrito' style={styles.editText}> Insira o novo limite: </Texto>
                    
                    <TextInput style={styles.input}
                        keyboardType="numeric"
                        placeholder="Exemplo: 2401.99"
                    >
                        
                    </TextInput>

                    
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
export const salvaLimite: Usuario ={
    limiteMaximo: 1234567.89,
    id: "1",
    nome: "teste",
    email: "teste@emailcom",
    senha: "teste",
    saldo: 1110,
    limiteDisponivel: 10
}
export const limiteNovo: Usuario ={
    limiteMaximo: salvaLimite.limiteMaximo,
    id: "1",
    nome: "teste",
    email: "teste@emailcom",
    senha: "teste",
    saldo: 1110,
    limiteDisponivel: 10
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        alignItems: "center",
    },
    content: {
        flexDirection: "column",
        alignItems: "center",
        marginLeft: 10,
        marginRight: 12,
        marginVertical: 600,
        backgroundColor: "#0B4B54",
        height: 245,
        width: dimensao.largura,
        borderRadius: 50,
    },
    actionButton: { //style do botão 'confirmar alteração'
        zIndex:99,
        flexDirection: "column",
        alignContent: "center",
        width: dimensao.largura/1.5,
        backgroundColor: '#59D9DA',
        borderRadius: 50,
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
    actionText: {
        textAlign: "center",
        fontSize: 20,
        color: '#0B4B54',
    },
    editText: { //texto do 'insira o valor desejado'
        textAlign: "center",
        fontSize: 20,
        color: '#fff',
    },
    input: {
        height: 44,
        width: 328,

        margin:10,
        backgroundColor: '#fff',
        fontSize: 20,
        borderRadius: 10,
        padding: 10,
    }
})