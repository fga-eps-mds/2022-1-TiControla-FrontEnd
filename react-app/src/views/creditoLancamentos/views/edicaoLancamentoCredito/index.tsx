import { RootStackScreenProps } from '../../../../application/types/RootStack';
import { StyleSheet, View, StatusBar, SafeAreaView, TextInput, TouchableOpacity } from 'react-native';
import React from 'react';
import Texto from '../../../../components/Texto';
import DateField from 'react-native-datefield';
import { dimensao } from '../../../../utils/dimensoesDoDipositivo';
import Botao from '../../../../components/Botao';
export default function EdicaoLancamentoCredito({ navigation, route }: RootStackScreenProps<'EdicaoLancamentoCredito'>) {
	const {lancamento} = route.params;
  
	return (
		<View style={styles.container}>
			<SafeAreaView >
				<View style={styles.form}>

					<Texto tipo='normal' style={styles.texto}>Data:</Texto>
					<DateField
						defaultValue={new Date()}
						styleInput={styles.inputBorder}
						onSubmit={(value) => console.log(value)}
					/>			
					<Texto tipo='normal' style={styles.texto}>Nome:</Texto>
					<View style={styles.textInputWrapper}>
						<TextInput style={styles.textInput} placeholder="Nome para a aplicação de crédito" />
					</View>

					<Texto tipo='normal' style={styles.texto}>Descrição:</Texto>
					<View style={styles.textInputWrapper}>
						<TextInput numberOfLines={8} multiline={true} style={styles.textInput} placeholder="Descreva a compra (exemplo: Ticket Estacionamento)" />
					</View>
					<Texto tipo='normal' style={styles.texto}>Apelido do cartão:</Texto>
					<View style={styles.textInputWrapper}>
						<TextInput style={styles.textInput} defaultValue='Apelido do cartão' editable={false} placeholder="Tipo de débito" />
					</View>

					<Texto tipo='normal' style={styles.texto}>Parcelas:</Texto>
					<View style={styles.textInputWrapper}>
						<TextInput style={styles.textInput} keyboardType='number-pad' placeholder="1 de ???" />
					</View>
					
					<Texto tipo='normal' style={styles.texto}>Valor:</Texto>
					<View style={styles.textInputWrapper}>
						<TextInput style={styles.textInput} keyboardType='number-pad' placeholder="R$" />
					</View>



					<View style={styles.spacing}>
						<Botao tipo='grande' cor='verde'>Salvar</Botao>
					</View>
				</View>
			</SafeAreaView>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'column',
		backgroundColor: '#0B4B53',
		width: dimensao.largura,
		alignItems: 'center',
	},
	buttonvoltar: {
		width: 34,
		height: 34,
		opacity: 0.6,
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 182,
		marginLeft: 15,
	},
	inputBorder: {
		width: '30%',
		padding:10,
		borderRadius: 8,
		backgroundColor: '#fff',
		borderWidth: 1,
		color: '#0B4B53',
		marginBottom: 5,
		marginTop: 5,
	},
	textInputWrapper: {
		marginTop: 5,
		borderRadius: 5,
		backgroundColor: '#fff',
		borderWidth: 1,
		padding: 10
	}, 
	textInput: {
		color: '#afafaf',
		//flex: 1
	},
	form: {
		color: '#fff',
		marginRight: 20,
		justifyContent: 'center',
		marginLeft: 20,
	},
	texto: {
		marginTop: 10,
		color: '#fff',
	},
	titulo: {
		color: '#fff',
		fontSize: 20,
		textAlign: 'center',
		marginBottom: 30,
		marginTop: -32.5
	},
	spacing: {
		marginTop: 20,
		alignItems: 'center',
	}
});