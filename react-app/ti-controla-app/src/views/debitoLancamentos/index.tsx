import { RootStackScreenProps } from "../../application/types/RootStack";
import Botao from "../../components/Botao";
import { lancamentosTeste } from "../../application/mocks/lancamentosTest";


export default function DebitoLancamentos({ navigation, route }: RootStackScreenProps<"DebitoLancamentos">) {
  const {id} = route.params;
  
  return <>
    <Botao cor="verde" tipo="grande" onPress={() => navigation.navigate('DebitoDetalhamento', {lancamento: lancamentosTeste[2]} )}>Debito detalhamento</Botao>
    <Botao cor="verde" tipo="grande" onPress={() => navigation.navigate("cadastroLancamentoDebito", {id: id})}>Cadastrar novo lançamento</Botao>
  </>
}