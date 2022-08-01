import { useState } from "react";

import {
  Image,
  View,
  StyleSheet,
  TextInput,
} from "react-native";
import Botao from "../../components/Botao";
import Texto from "../../components/Texto";
import logo from "../../assets/icons/logo.png";
import { dimensao } from "../../utils/dimensoesDoDipositivo";
import React from "react";

export default function Cadastro() {
    
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [celular, setCelular] = useState('');
    const [senha, setSenha] = useState('');

    

    const btnHandler = () => {
        const dados = {
            nome,email,senha
        };

       
        console.log(dados);
    }

  return (
    <View style={estilos.container}>
      <View style={{alignItems: 'center'}}>
        <Image source={logo} style={estilos.logo}></Image>
        <View style={estilos.formulario}>
          <Texto style={estilos.label}>Email:</Texto>
          <TextInput  value={email}  onChangeText={setEmail}  keyboardType="email-address" style={estilos.input} />
          <Texto style={estilos.label}>Nome:</Texto>
          <TextInput value={nome}   onChangeText={setNome}  style={estilos.input} />
          <Texto style={estilos.label}>Celular:</Texto>
          <TextInput  value={celular}  onChangeText={setCelular}  keyboardType="name-phone-pad" style={estilos.input} />
          <Texto style={estilos.label}>Senha:</Texto>
          <TextInput value={senha}  onChangeText={setSenha}  keyboardType="visible-password" style={estilos.input} />
        </View>
              <Botao onPress={btnHandler}
          tipo="grande"
          cor="verde"
          style={{ marginTop: 24 }}
        >
          Cadastrar
        </Botao>
      </View>
    </View>
  );
}

const estilos = StyleSheet.create({
  container: {
    backgroundColor: "#0B4B54",
    height: "100%",
    alignItems: "center",
    justifyContent: 'center'
  },
  logo: {
    marginBottom: 8,
  },
  formulario: {
    width: dimensao.largura - 32,
  },
  label: {
    fontSize: 14,
    marginLeft: 5,
    color: "#fff",
    marginBottom: 1,
  },
  input: {
    backgroundColor: "#fff",
    height: 44,
    borderRadius: 10,
    marginBottom: 16,
    padding: 5,
  },
});
