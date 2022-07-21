import React from 'react';
import { Text, StyleSheet, TextProps } from 'react-native';

export type TextoProps = {
  tipo?: 'normal' | 'medio' | 'negrito'
}


export default function Texto({children, style, tipo='normal'}: TextProps & TextoProps) {
  let estilo = estilos.texto;

  if(tipo === 'medio') {
    estilo = estilos.textoMedio;
  }

  if(tipo === 'negrito') {
    estilo = estilos.textoNegrito;
  }

  return <Text style={[style, estilo]}>{ children }</Text>
}

const estilos = StyleSheet.create({
  texto: {
    fontFamily: 'QuicksandRegular',
    fontWeight: 'normal',
  },
  textoMedio: {
    fontFamily: 'QuicksandMedium',
    fontWeight: 'normal'
  },
  textoNegrito: {
    fontFamily: 'QuicksandBold',
    fontWeight: 'normal',
  }
});