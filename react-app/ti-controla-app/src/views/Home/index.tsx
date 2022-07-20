import { usuarioTest } from "../../application/mocks/usuarioTest";
import InfoContainer from "../../components/InfoContainer";
import Header from "./components/Header";
import { View, StyleSheet } from "react-native";
import Texto from "../../components/Texto";
import { Usuario } from "../../application/types/Usuario";

export default function Home({
  id,
  nome,
  email,
  saldo,
  limiteDisponivel,
  limiteMaximo,
  totalDasFaturas,
}: Usuario) {
  return (
    <View style={{ alignItems: "center" }}>
      <Header {...usuarioTest} />
      <InfoContainer style={estilos.container}>
        <View>
          <Texto style={estilos.tituloInfo}>Total das faturas:</Texto>
          <Texto style={estilos.valorInfo}>{totalDasFaturas}</Texto>
        </View>
        <View>
          <Texto style={estilos.tituloInfo}>
            Seu limite de crédito mensal:
          </Texto>
          <Texto style={estilos.valorInfo}>{limiteMaximo}</Texto>
        </View>
        <View>
          <Texto style={estilos.tituloInfo}>Seu limite de crédito hoje:</Texto>
          <Texto style={estilos.valorInfo}>{limiteDisponivel}</Texto>
        </View>
      </InfoContainer>
    </View>
  );
}

const estilos = StyleSheet.create({
  container: {
    marginTop: 69,
  },
  tituloInfo: {
    color: "#fff",
    fontSize: 16,
  },
  valorInfo: {
    color: "#fff",
    fontSize: 22,
  },
});
