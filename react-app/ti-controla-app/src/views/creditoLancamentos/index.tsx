import { RootStackScreenProps } from '../../application/types/RootStack';
import Botao from '../../components/Botao';
import { lancamentosTeste } from '../../application/mocks/lancamentosTest';
import React from 'react';


export default function CreditoLancamentos({ navigation, route }: RootStackScreenProps<'CreditoLancamentos'>) {
	const {id} = route.params;
  
	return <>
		<Botao cor="verde" tipo="grande" onPress={() => navigation.navigate('CreditoDetalhamento', {lancamento: lancamentosTeste[2]} )}>Credito detalhamento</Botao>
		<Botao cor="verde" tipo="grande" onPress={() => navigation.navigate('CadastroLancamentoCredito', {id: id})}>Cadastrar novo lançamento</Botao>
	</>;
}