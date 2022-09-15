/*import { RootStackScreenProps } from '../../../../application/types/RootStack';
import Botao from "../../../../components/Botao";
export default function CreditoDetalhamento({ navigation, route }: RootStackScreenProps<"CreditoDetalhamento">) {
  const {lancamento} = route.params;
  
  return <>
    <Botao cor="verde" tipo="pequeno" onPress={() => navigation.navigate('EdicaoLancamentoCredito',{lancamento: lancamento})}>Editar</Botao>
  </>
}*/
import { View,StyleSheet,SafeAreaView } from 'react-native';
import React from 'react';
import { RootStackScreenProps } from '../../../../application/types/RootStack';
import Botao from "../../../../components/Botao";
import Texto from '../../../../components/Texto';
import { dimensao } from '../../../../utils/dimensoesDoDipositivo';
import { icones } from '../../../../application/icons/iconesDeCategoria';
import Monetario from '../../../../components/Monetario';
import { lancamentosTeste } from '../../../../application/mocks/lancamentosTest';
export default function CreditoDetalhamento({ navigation, route }: RootStackScreenProps<"CreditoDetalhamento">) {
  const {lancamento} = route.params;
  return ( 
    <SafeAreaView style={estilos.container}>
      <View  style={estilos.tipoDebito}>
        <View style={{flexDirection: "row", alignItems: 'center'}}>
          <View style={estilos.icone}></View>
          <Texto tipo = "negrito" style={estilos.texto22} >{lancamento.nome}</Texto>
        </View> 
      </View>
        <View style={estilos.detalhesContainer}>
            <Texto style={estilos.texto16}>Data:</Texto>
            <Texto style={[estilos.texto16, { marginBottom: 10 }]}>15/09/2022</Texto>

            <Texto style={estilos.texto16}>Valor:</Texto>
            <Monetario style={[estilos.texto16, { marginBottom: 10 }]}>
              {lancamento.valor}
            </Monetario>

            <Texto style={estilos.texto16}>Apelido do cartão:</Texto>
            <Texto style={[estilos.texto16, { marginBottom: 10 }]}>{lancamento.apelidoCartao}</Texto>

            <Texto style={estilos.texto16}>Parcelas:</Texto>
            <Texto style={[estilos.texto16, { marginBottom: 10 }]}>1 de {lancamento.parcelas}</Texto>

            <Texto style={estilos.texto16}>Descrição:</Texto>
            <Texto style={[estilos.texto16, { marginBottom: 10 }]}>{lancamento.descricao}</Texto>

        </View>
        <View style={estilos.areaBotao}>
          <Botao tipo={'pequeno'} cor={'verde'} style={estilos.botao}
          onPress={() => navigation.navigate('EdicaoLancamentoCredito',{lancamento: lancamento})}>
              <Texto tipo = "negrito" style={estilos.texto16verde}> Editar</Texto>
          </Botao>
          <Botao tipo={'pequeno'} cor={'vermelho'} style={estilos.botao}>
              <Texto tipo = "negrito" style={estilos.texto16vermelho}> Deletar</Texto>
          </Botao>
        </View>

    </SafeAreaView>
  );
}
  const estilos = StyleSheet.create({
    container: {
      //flex: 1,
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      
    },
    tipoDebito: {
      width: dimensao.largura - 32,
      height: 60,
      borderRadius: 20,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      //backgroundColor: '#2F999D',
      paddingHorizontal: 8,
      marginTop: 36,
      marginLeft: 12,
      marginRight: 12,
    },
    icone: {
      backgroundColor: 'white',
      borderColor: '#0B4B54',
      borderWidth: 1,
      width: 50,
      height: 50,
      borderRadius: 50,
      marginRight: 10,
      alignItems: 'center',
      justifyContent: 'center'
    },
    detalhesContainer: {
      backgroundColor: '#0B4B54',
      marginTop: 36,
      paddingVertical: 8,
      paddingHorizontal: 10,
      borderRadius: 20,
      width: dimensao.largura - 32,
      height: 324,
      color: '#fff',
    },
    areaBotao: {
      width: dimensao.largura ,
      height: 60,
      borderRadius: 20,
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'flex-start',
      //backgroundColor: '#2F999D',
      paddingHorizontal: 8,
      marginTop: 72,
      marginLeft: 12,
      marginRight: 12,
    },
    botao: {
      alignContent: 'center',
    },
    texto16: {
      fontSize: 16,
      color: '#fff',
      lineHeight: 22.5,
      paddingVertical: 1.5,
    },
    texto16verde: {
      fontSize: 16,
      color: '#0B4B54',
    },
    texto22: {
      fontSize: 22,
      color: '#0B4B54',
    },
    texto16vermelho: {
      fontSize: 16,
      color: '#540B0B',
    },

    })
  
