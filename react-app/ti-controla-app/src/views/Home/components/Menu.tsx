import { View, StyleSheet, TouchableOpacity, ViewProps } from "react-native";
import Texto from "../../../components/Texto";

export default function Menu({style}: ViewProps) {
  return (
    <View style={[estilos.container, style]}>
        <TouchableOpacity style={estilos.botao}>
          <Texto tipo="negrito" style={estilos.texto}>Crédito</Texto>
        </TouchableOpacity>
        <TouchableOpacity style={estilos.botao}>
          <Texto tipo="negrito" style={estilos.texto}>Débito</Texto>
        </TouchableOpacity>
        <TouchableOpacity style={estilos.botao}>
          <Texto tipo="negrito" style={estilos.texto}>Fixos</Texto>
        </TouchableOpacity>
    </View>
  );
}

const estilos = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: 'space-around'
  },
  texto: {
    color: "#fff",
    fontSize: 16,
  },
  botao: {
    backgroundColor: '#10696D',
    width: 73,
    height: 73,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 16
  }
});
