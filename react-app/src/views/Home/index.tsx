import React from 'react';
import InfoContainer from '../../components/InfoContainer';
import Header from './components/Header';
import { View, StyleSheet, ScrollView } from 'react-native';
import Texto from '../../components/Texto';
import { dimensao } from '../../utils/dimensoesDoDipositivo';
import CardGasto from '../../components/CardGasto';
import { lancamentosTeste } from '../../application/mocks/lancamentosTest';
import Monetario from '../../components/Monetario';
import { usuarioTeste } from '../../application/mocks/usuarioTeste';

export default function Home() {
	const usuario = usuarioTeste;
	return (
		<ScrollView>
			<View style={estilos.container}>
				<Header {...usuario} />
				<InfoContainer style={estilos.infoContainer}>
					<View>
						<Texto style={estilos.texto16}>Total das faturas:</Texto>
						<Monetario style={[estilos.texto22, estilos.containerComMargem]}>{usuario.totalDasFaturas}</Monetario>
					</View>
					<View>
						<Texto style={estilos.texto16}>Seu limite de crédito mensal:</Texto>
						<Monetario style={[estilos.texto22, estilos.containerComMargem]}>
							{usuario.limiteMaximo}
						</Monetario>
					</View>
					<View>
						<Texto style={estilos.texto16}>Seu limite de crédito hoje:</Texto>
						<Monetario style={estilos.texto22}>{usuario.limiteDisponivel}</Monetario>
					</View>
				</InfoContainer>
				<View style={estilos.parcelamentosContainer}>
					<Texto tipo="negrito" style={estilos.texto22}>
            Parcelamentos vigentes
					</Texto>
					{lancamentosTeste.map(lancamento => {
						if(lancamento.parcelas != 'fixa' && lancamento.parcelas != 'unica'){
							return <CardGasto {...lancamento} key={lancamento.codigo}/>;
						}else return;
					})}
				</View>
			</View>
		</ScrollView>
	);
}

const estilos = StyleSheet.create({
	container: {
		alignItems: 'center',
	},
	infoContainer: {
		marginTop: 74,
		marginBottom: 48,
	},
	texto16: {
		color: '#fff',
		fontSize: 16,
	},
	texto22: {
		color: '#fff',
		fontSize: 22,
	},
	containerComMargem: {
		marginBottom: 10,
	},
	parcelamentosContainer: {
		width: dimensao.largura,
		backgroundColor: '#0B4B54',
		borderTopRightRadius: 30,
		borderTopLeftRadius: 30,
		alignItems: 'center',
		padding: 16,
	},
});
