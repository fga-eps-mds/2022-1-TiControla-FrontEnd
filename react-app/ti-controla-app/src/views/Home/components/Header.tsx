import React from 'react';
import { View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import {useNavigation} from '@react-navigation/native'
import { Usuario } from '../../../application/types/Usuario';
import Texto from '../../../components/Texto';
import Menu from './Menu';
import logoutIcon from '../../../assets/icons/logout.png';
import profileIcon from '../../../assets/icons/profile.png';
import { dimensao } from '../../../utils/dimensoesDoDipositivo';
import Monetario from '../../../components/Monetario';
import { usuarioTeste } from '../../../application/mocks/usuarioTeste';

export default function Header({nome, saldo, id}: Usuario) {
  const navigation = useNavigation();
  return (
    <View style={{ position: 'relative'}}>
      <View style={estilos.container}>
        <Texto tipo='negrito' style={estilos.texto}>
          Olá, {nome}
        </Texto>
        <Monetario tipo='medio' style={estilos.texto}>
          {saldo}
        </Monetario>
        <View style={estilos.menu}>
          <Menu idUsuario={id}/>
        </View>
        <TouchableOpacity style={estilos.lougoutIcon} onPress={() => navigation.navigate('Login')}><Image source={logoutIcon} width={32} height={32}/></TouchableOpacity>
        <TouchableOpacity style={estilos.profileIcon} onPress={() => navigation.navigate('Perfil', {usuario: usuarioTeste})}><Image source={profileIcon} width={32} height={32}/></TouchableOpacity>
      </View>
    </View>
  );
}

const estilos = StyleSheet.create({
  container: {
    paddingVertical: 70,
    textAlign: 'center',
    backgroundColor: '#0B4B54',
    color: '#fff',
    width: dimensao.largura,
    alignItems: 'center',
    zIndex: 3
  },
  texto: {
    color: '#fff',
    fontSize: 22,
  },
  menu: {
    position: 'absolute',
    top: 167,
    width: '100%',
    zIndex: 1,
  },
  lougoutIcon: {
    position: 'absolute',
    zIndex: 2,
    top: 32,
    left: 16,
  },
  profileIcon: {
    position: 'absolute',
    zIndex: 2,
    top: 32,
    right: 16,
  }
});
