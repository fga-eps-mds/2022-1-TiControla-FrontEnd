import { useFonts,Quicksand_400Regular, Quicksand_500Medium, Quicksand_700Bold } from "@expo-google-fonts/quicksand";
import React, { useState } from "react";
import { StyleSheet, Text,TextProps, View, TouchableOpacity,StatusBar, SafeAreaView, Modal } from "react-native";
import Header from "../components/Header";
import Texto from "../components/Texto";
import { dimensao } from "../utils/dimensoesDoDispositivo";
import ModalLimite from "../components/ModalLimite";
//import { usuarioTest } from "../application/mocks/usuarioTest";
import { Usuario } from "../application/types/Usuario";
import Monetario from "../components/Monetario";
import {limiteNovo} from "../components/ModalLimite";


export default function Profile({
    id,
    nome,
    email,
    saldo,
    limiteDisponivel,
    limiteMaximo,
  }: Usuario) {
  const[fonteCarregada] = useFonts({
    'QuicksandRegular': Quicksand_400Regular,
    'QuicksandMedium': Quicksand_500Medium,
    'QuicksandBold': Quicksand_700Bold,
  })

  const[visibleModal, setVisibleModal] = useState(false);

  if(!fonteCarregada) return <View/>

    return (
        
      <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor="#0B4B53"/> 
            
            <View style={styles.header}>
               <Header/>
            </View>

            <View style={styles.infos}>
                <Texto tipo = 'medio' style={styles.infoTitle}> Email:</Texto>
                <Texto tipo = 'medio' style={styles.infoTitle}> fulano@gmail.com</Texto>

                <Texto tipo = 'medio' style={styles.infoTitle}> Celular:</Texto>
                <Texto tipo = 'medio' style={styles.infoTitle}> 4002-8922</Texto>
                
                <Texto tipo = 'medio' style={styles.infoTitle}> Limite de crédito:</Texto>
                <Texto tipo = 'medio' style={styles.infoTitle}>
                    <Monetario tipo="medio">
                         {limiteNovo.limiteMaximo}
                    </Monetario> 
                </Texto>

            </View>
            
            <View style={styles.botoes}>
               <TouchableOpacity activeOpacity={0.8} style={styles.buttonLimit} onPress={() => setVisibleModal(true)}>
                  <Texto tipo = 'negrito' style={styles.buttonLimitText}>
                      Alterar limite de crédito
                  </Texto>
               </TouchableOpacity>
            
                <TouchableOpacity activeOpacity={0.8} style={styles.buttonDelete}>
                    <Texto tipo = 'negrito' style={styles.buttonDeleteText}>
                       Excluir minha conta
                    </Texto>
                </TouchableOpacity>

            </View>

           <Modal
            visible={visibleModal}
            transparent={true}
            onRequestClose={() => setVisibleModal(false)}
            animationType="slide"
           >
              <ModalLimite 
               handleClose={() => setVisibleModal(false)}
              />

           </Modal>
            

      </SafeAreaView>
    
      );
      
}

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'center',
      backgroundColor: '#fff',
    },
    header: {
      flex: 3,
      backgroundColor: "#0B4B53",
      alignItems: "flex-start",
      justifyContent: "space-around",
      height: dimensao.altura/2,
    },
    botoes: {
      flex: 2,
      flexDirection: 'column',
      alignItems: "center",
      justifyContent: "space-between",
      
    },
    infos: {
      flex: 2,
      flexDirection: 'column', 
      alignItems: "flex-start",
      justifyContent: "space-between",
      marginLeft: 10,
    },

    buttonLimit: {
      marginTop: 50,
      backgroundColor: "#59D9DA",
      borderRadius: 30,
      width: 246,
      height: 50,
      alignItems: "center",
      justifyContent: "center",
    },
    buttonDelete: {
      marginBottom: 50,
      backgroundColor: "#DA6159",
      borderRadius: 30,
      width: 246,
      height: 50,
      alignItems: "center",
      justifyContent: "center",
    },
    buttonLimitText: {
      color: "#0B4B54",
      fontSize: 16,
    },
    buttonDeleteText: {
      color: "#540B0B",
      fontSize: 16,
    },
    infoTitle: {
      color: "#000",
      fontSize: 16,
    },
  });