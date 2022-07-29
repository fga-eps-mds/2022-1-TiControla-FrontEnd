import { useFonts, Quicksand_400Regular, Quicksand_500Medium, Quicksand_700Bold } from "@expo-google-fonts/quicksand";
import { StyleSheet, View, StatusBar, SafeAreaView, TextInput, TouchableOpacity } from "react-native";
import { Feather } from '@expo/vector-icons';
import Texto from "../components/Texto";
import Botao from "../components/Botao";
import DateField from 'react-native-datefield';
import { dimensao } from "../utils/dimensoesDoDispositivo";
import React from "react";

const statusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight + 82 : 64;

export const DebtEditing = () => {
	const [fonteCarregada] = useFonts({
		'QuicksandRegular': Quicksand_400Regular,
		'QuicksandMedium': Quicksand_500Medium,
		'QuicksandBold': Quicksand_700Bold,
	});

	if (!fonteCarregada) return <View />

	return (
		<View style={styles.container}>
			<TouchableOpacity activeOpacity={0.9} style={styles.buttonvoltar}>
				<Feather name="arrow-left" size={30} color="#fff" />
			</TouchableOpacity>
			<StatusBar backgroundColor="#0B4B53" />
			<SafeAreaView >
				<Texto tipo='negrito' style={styles.titulo}>Edição de débito</Texto>
				<View style={styles.form}>

					<Texto tipo='normal' style={styles.texto}>Data:</Texto>
					<DateField
						defaultValue={new Date()}
						styleInput={styles.inputBorder}
						onSubmit={(value) => console.log(value)}
					/>

					<Texto tipo='normal' style={styles.texto}>Tipo:</Texto>
					<View style={styles.textInputWrapper}>
						<TextInput styles={styles.textInput} defaultValue='Débito' editable={false} placeholder="Tipo de débito" />
					</View>

					<Texto tipo='normal' style={styles.texto}>Nome:</Texto>
					<View style={styles.textInputWrapper}>
						<TextInput styles={styles.textInput} placeholder="Nome para a aplicação de débito" />
					</View>

					<Texto tipo='normal' style={styles.texto}>Descrição:</Texto>
					<View style={styles.textInputWrapper}>
						<TextInput numberOfLines={10} multiline={true} styles={styles.textInputWrapper} placeholder="Insira alguma descrição" />
					</View>

					<Texto tipo='normal' style={styles.texto}>Valor:</Texto>
					<View style={styles.textInputWrapper}>
						<TextInput styles={styles.textInput} keyboardType='number-pad' placeholder="R$" />
					</View>
					<View style={styles.spacing}>
						<Botao tipo='grande' cor='verde'>Cadastrar</Botao>
					</View>
				</View>
			</SafeAreaView>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#0B4B53',
		width: dimensao.largura,
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
	}, textInput: {
		color: 'red',
		flex: 1
	},
	form: {
		color: '#fff',
		marginRight: 20,
		justifyContent: "center",
		marginLeft: 20,
	},
	texto: {
		marginTop: 10,
		color: "#fff",
	},
	titulo: {
		color: "#fff",
		fontSize: 20,
		textAlign: 'center',
		marginBottom: 30,
		marginTop: -32.5
	},
	spacing: {
		marginTop: 50,
		alignItems: 'center',
	}
});