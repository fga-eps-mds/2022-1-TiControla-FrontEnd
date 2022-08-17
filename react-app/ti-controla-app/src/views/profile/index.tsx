
import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Modal,
} from "react-native";
import Header from "./components/Header";
import Texto from "../../components/Texto";
import ModalLimite from "./components/ModalLimite";
import { Usuario } from "../../application/types/Usuario";
import Monetario from "../../components/Monetario";
import Botao from "../../components/Botao";
import { usuarioTeste } from "../../application/mocks/usuarioTeste";

export default function Profile({...rest}: Usuario) {
  
  const [visibleModal, setVisibleModal] = useState(false);
  const usuario = usuarioTeste;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Header />
      </View>

      <View style={styles.infos}>
        <View style={{ marginBottom: 16 }}>
          <Texto tipo="medio" style={styles.infoTitle}>
            Username:
          </Texto>
          <Texto tipo="medio" style={styles.infoTitle}>
            {usuario?.nome}
          </Texto>
        </View>
        <View style={{ marginBottom: 16 }}>
          <Texto tipo="medio" style={styles.infoTitle}>
            E-mail:
          </Texto>
          <Texto tipo="medio" style={styles.infoTitle}>
            {usuario?.email}
          </Texto>
        </View>
        <View style={{ marginBottom: 16 }}>
          <Texto tipo="medio" style={styles.infoTitle}>
            Limite de crédito:
          </Texto>
          <Texto tipo="medio" style={styles.infoTitle}>
            <Monetario tipo="medio">{usuario?.limiteMaximo}</Monetario>
          </Texto>
        </View>
      </View>

      <View style={styles.botoes}>
        <Botao cor="verde" tipo="grande" style={{marginBottom: 16}} onPress={() => setVisibleModal(true)}>
          Alterar limite de crédito
        </Botao>
        <Botao cor="vermelho" tipo="grande">
          Excluir minha conta
        </Botao>
      </View>

      <Modal
        visible={visibleModal}
        transparent={true}
        onRequestClose={() => setVisibleModal(false)}
        animationType="slide"
      >
        <ModalLimite handleClose={() => setVisibleModal(false)} />
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#fff",
  },
  header: {
    backgroundColor: "#0B4B53",
    alignItems: "flex-start",
    justifyContent: "space-around",
    height: 203,
  },
  botoes: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-around",
  },
  infos: {
    marginVertical: 32,
    flexDirection: "column",
    marginLeft: 16,
  },
  infoTitle: {
    color: "#000",
    fontSize: 16,
    lineHeight: 46,
  },
});
