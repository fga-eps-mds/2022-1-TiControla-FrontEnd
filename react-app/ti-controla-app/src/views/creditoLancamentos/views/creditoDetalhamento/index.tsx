import { RootStackScreenProps } from '../../../../application/types/RootStack';
import Botao from '../../../../components/Botao';
export default function CreditoDetalhamento({ navigation, route }: RootStackScreenProps<'CreditoDetalhamento'>) {
	const {lancamento} = route.params;
  
	return <>
		<Botao cor="verde" tipo="pequeno" onPress={() => navigation.navigate('EdicaoLancamentoCredito',{lancamento: lancamento})}>Editar</Botao>
	</>;
}