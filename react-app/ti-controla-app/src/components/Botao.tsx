import React from "react";
import {
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";
import Texto from "./Texto";

type BotaoProps = {
  tipo: 'grande' | 'pequeno'
  cor: 'verde' | 'vermelho'
};

export default function Botao({
  children,
  style,
  tipo,
  cor
}: TouchableOpacityProps & BotaoProps) {
  const estilos = getEstilos(tipo, cor);
  return (
    <TouchableOpacity activeOpacity={0.8} style={[estilos.botao, style]}>
      <Texto style={estilos.botaoTexto} tipo='negrito'>{children}</Texto>
    </TouchableOpacity>
  );
}

const getEstilos = (tipo: 'grande' | 'pequeno', cor: 'verde' | 'vermelho') =>
  StyleSheet.create({
    botao: {
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: cor === 'verde'? '#59D9DA' : '#DA6159',
      borderRadius: 30,
      width: tipo === 'grande'? 286 : 126,
      height: tipo === 'grande' ? 60: 30,
    },
    botaoTexto: {
      color: cor === 'verde'?  '#0B4B54' : '#000',
      fontSize: tipo === 'grande'? 16 : 14,
      lineHeight: 28,
      textAlign: "center",
    },
  });
