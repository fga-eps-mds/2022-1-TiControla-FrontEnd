import React from 'react';
import { Text, StyleSheet } from 'react-native';


export default function Texto({ children, style }: any) {
  let estilo = estilos.texto;
  
  if(style?.fontWeight === 'bold') {
    estilo = estilos.textoNegrito;
  }

  if(style?.fontWeight === '500') {
    estilo = estilos.textoMedio;
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
    fontFamily: 'Quicksand_700Bold',
    fontWeight: 'normal',
  }
});