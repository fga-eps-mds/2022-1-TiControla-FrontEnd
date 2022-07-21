import { usuarioTest } from "../../application/mocks/usuarioTest";
import InfoContainer from "../../components/InfoContainer";
import Header from "./components/Header";
import { View, StyleSheet, ScrollView } from "react-native";
import Texto from "../../components/Texto";
import { Usuario } from "../../application/types/Usuario";
import { dimensao } from "../../utils/dimensoesDoDipositivo";
import CardGasto from "../../components/CardGasto";
import { lancamentosTeste } from "../../application/mocks/lancamentosTest";
import Monetario from "../../components/Monetario";

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
    <ScrollView>
      <View style={{ alignItems: "center" }}>
        <Header {...usuarioTest} />
        <InfoContainer style={estilos.container}>
          <View>
            <Texto style={estilos.texto16}>Total das faturas:</Texto>
            <Monetario style={[estilos.texto22, { marginBottom: 10 }]}>{totalDasFaturas!}</Monetario>
          </View>
          <View>
            <Texto style={estilos.texto16}>Seu limite de crédito mensal:</Texto>
            <Monetario style={[estilos.texto22, { marginBottom: 10 }]}>
              {limiteMaximo}
            </Monetario>
          </View>
          <View>
            <Texto style={estilos.texto16}>Seu limite de crédito hoje:</Texto>
            <Monetario style={estilos.texto22}>{limiteDisponivel}</Monetario>
          </View>
        </InfoContainer>
        <View style={estilos.parcelamentosContainer}>
          <Texto tipo="negrito" style={estilos.texto22}>
            Parcelamentos vigentes
          </Texto>
        {lancamentosTeste.map(lancamento => {
          if(lancamento.parcelas != 'fixa' && lancamento.parcelas != 'unica'){
            return <CardGasto {...lancamento} key={lancamento.codigo}/>
          }else return;
        })}
        </View>
      </View>
    </ScrollView>
  );
}

const estilos = StyleSheet.create({
  container: {
    marginTop: 74,
    marginBottom: 48,
  },
  texto16: {
    color: "#fff",
    fontSize: 16,
  },
  texto22: {
    color: "#fff",
    fontSize: 22,
  },
  parcelamentosContainer: {
    width: dimensao.largura,
    backgroundColor: "#0B4B54",
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    alignItems: "center",
    padding: 16,
  },
});
