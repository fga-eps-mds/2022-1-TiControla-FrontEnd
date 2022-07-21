import { View, StyleSheet, Touchable, TouchableOpacity, Image } from "react-native";
import { icones } from "../application/icons/iconesDeCategoria";
import { Lancamento } from "../application/types/Lancamento";
import { dimensao } from "../utils/dimensoesDoDipositivo";
import Monetario from "./Monetario";
import Texto from "./Texto";

export default function CardGasto({ nome, parcelas, valor, categoria }: Lancamento) {
  return (
    <TouchableOpacity style={estilos.container}>
      <View style={{flexDirection: "row", alignItems: 'center'}}>
        <View style={estilos.icone}><Image source={icones[categoria]} width={24} height={24} /></View>
        <Texto style={estilos.texto16}>{nome}</Texto>
      </View>
      <Texto style={estilos.texto16}>
        {parcelas} x <Monetario>{valor}</Monetario>
      </Texto>
    </TouchableOpacity>
  );
}

const estilos = StyleSheet.create({
  container: {
    width: dimensao.largura - 32,
    height: 60,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#2F999D',
    paddingHorizontal: 8,
    marginTop: 16,
  },
  icone: {
    backgroundColor: 'white',
    width: 38,
    height: 38,
    borderRadius: 50,
    marginRight: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  texto16: {
    fontSize: 16,
    lineHeight: 20,
  }
});
