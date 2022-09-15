import { RootStackScreenProps } from '../../application/types/RootStack';
import React from 'react';
import { View,StyleSheet,SafeAreaView } from 'react-native';
import Botao from '../../components/Botao';

import { dimensao } from '../../utils/dimensoesDoDipositivo';
import { icones } from '../../application/icons/iconesDeCategoria';
import Monetario from '../../components/Monetario';
import Texto from '../../components/Texto';

export default function GastosFixos({ navigation, route }: RootStackScreenProps<'GastosFixos'>) {
	const {id} = route.params;
	return (
		<SafeAreaView style={estilos.container}>
			<View  style={estilos.tipoDebito}>
				<View style={{flexDirection: 'row', alignItems: 'center'}}>
					<View style={estilos.icone}></View>
					<Texto tipo = "negrito" style={estilos.texto16} >Conta de água          R$ 100,00</Texto>
				</View> 
			</View>

			<View  style={estilos.tipoDebito}>
				<View style={{flexDirection: 'row', alignItems: 'center'}}>
					<View style={estilos.icone}></View>
					<Texto tipo = "negrito" style={estilos.texto16} >Netflix            R$ 49,90</Texto>
				</View> 
			</View>
      
			<View style={estilos.areaBotao}>
				<Botao tipo={'grande'} cor={'verde'} style={estilos.botao}>
					<Texto tipo = "negrito" style={estilos.textoVerde}> Cadastrar novo gasto fixo</Texto>
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
		width: 328,
		height: 60,
		borderRadius: 20,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		backgroundColor: '#2F999D',
		paddingHorizontal: 8,
		marginTop: 36,
		marginLeft: 16,
		marginRight: 16,
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
	texto16: {
		fontSize: 16,
		color: '#0B4B54',
	},
	textoVerde: {
		fontSize: 18,
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
});