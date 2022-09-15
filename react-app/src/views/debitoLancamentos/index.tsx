import { RootStackScreenProps } from "../../application/types/RootStack";
import React from "react";
import { MyBackButton, MyHeader } from "../../application/navigation";
import { ScrollView, View, StyleSheet, TouchableOpacity } from "react-native";
import Texto from "../../components/Texto";
import Monetario from "../../components/Monetario";
import { dimensao } from "../../utils/dimensoesDoDipositivo";
import { lancamentosTeste } from "../../application/mocks/lancamentosTest";
import CardGasto from "../../components/CardGasto";
import InfoContainer from "../../components/InfoContainer";
import Botao from "../../components/Botao";

export default function DebitoLancamentos({
  navigation,
  route,
}: RootStackScreenProps<"DebitoLancamentos">) {
  const meses = [
    "Jan",
    "Fev",
    "Mar",
    "Abr",
    "Mai",
    "Jun",
    "Jul",
    "Ago",
    "Set",
    "Out",
    "Nov",
    "Dez",
  ];

  const Meses = () => {
    return (
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={estilos.meses}
      >
        {meses.map((mes, index) => (
          <TouchableOpacity key={index} style={estilos.mes}>
            <Texto>{mes}</Texto>
          </TouchableOpacity>
        ))}
      </ScrollView>
    );
  };

  const Lancamentos = () => {
    return (
      <>
        {lancamentosTeste.map((lancamento) => (
          <CardGasto {...lancamento} />
        ))}
      </>
    );
  };

  return (
    <ScrollView contentContainerStyle={{ alignItems: "center" }}>
      <MyHeader
        title="Lançamentos de Débito"
        leftButton={<MyBackButton onPress={navigation.goBack} />}
      />
      <View style={estilos.saldo}>
        <Texto style={estilos.saldoTexto} tipo="medio">
          Seu saldo mensal:
        </Texto>
        <Monetario style={estilos.saldoValor}>320.98</Monetario>
      </View>
      <Meses />
      <Lancamentos />
      <InfoContainer style={estilos.infoContainer}>
        <Texto style={estilos.infoTexto}>Total de entradas</Texto>
        <Monetario style={estilos.infoValor}>100</Monetario>
        <Texto style={estilos.infoTexto}>Total de saidas</Texto>
        <Monetario style={estilos.infoValor}>40</Monetario>
      </InfoContainer>
      <Botao cor="verde" tipo="grande" style={estilos.botao}>Cadastrar novo lançamento</Botao>
    </ScrollView>
  );
}

const estilos = StyleSheet.create({
  container: {
    position: "relative",
  },
  saldo: {
    width: dimensao.largura * 0.75,
    height: 53,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 5,
    backgroundColor: "#10696D",
    borderRadius: 20,
    position: "absolute",
    top: 75,
  },
  saldoTexto: {
    fontSize: 16,
    color: "#fff",
  },
  saldoValor: {
    fontSize: 22,
    color: "#fff",
  },
  meses: {
    marginTop: 58,
    backgroundColor: "#0B4B54",
    paddingVertical: 8,
  },
  mes: {
    marginHorizontal: 8,
    fontSize: 16,
  },
  infoContainer: {
    marginTop: 33,
    paddingBottom: 10,
  },
  infoTexto: {
    fontSize: 16,
    color: '#fff',
    marginTop: 10,
  },
  infoValor: {
    fontSize: 22,
    color: '#fff'
  },
  botao: {
    marginVertical: 28,
  }
});
