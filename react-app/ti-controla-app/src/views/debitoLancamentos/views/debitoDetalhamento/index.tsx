import { RootStackScreenProps } from '../../../../application/types/RootStack';
import Botao from "../../../../components/Botao";
export default function DebitoDetalhamento({ navigation, route }: RootStackScreenProps<"DebitoDetalhamento">) {
  const {lancamento} = route.params;
  
  return <>
    <Botao cor="verde" tipo="pequeno" onPress={() => navigation.navigate('EdicaoLancamentoDebito',{lancamento: lancamento})}>Editar</Botao>
  </>
}