import { View, StyleSheet } from "react-native";
import { usuarioTest } from "../../../application/mocks/usuarioTest";
import Texto from "../../../components/Texto";
import Menu from "./Menu";

export default function Header() {
  return (
    <View style={{ position: "relative"}}>
      <View style={estilos.container}>
        <Texto tipo="negrito" style={estilos.texto}>
          Olá, {usuarioTest.nome}
        </Texto>
        <Texto tipo="medio" style={estilos.texto}>
          {usuarioTest.saldo}
        </Texto>
        <View style={estilos.menu}>
          <Menu/>
        </View>
      </View>
    </View>
  );
}

const estilos = StyleSheet.create({
  container: {
    paddingVertical: 70,
    textAlign: "center",
    backgroundColor: "#0B4B54",
    color: "#fff",
    width: "100%",
  },
  texto: {
    color: "#fff",
    fontSize: 22,
  },
  menu: {
    position: "absolute",
    top: 167,
    width: '100%',
    zIndex: 1,
  },
});
