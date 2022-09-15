import React from 'react';
import { View, StyleSheet, Text,TextInput } from 'react-native';
import { dimensao } from '../utils/dimensoesDoDispositivo';

export const CadastroDebito = () => (
	<View style={styles.container}>
		<Text style={styles.text}>Data:</Text>
		<TextInput placeholder='Data' />
	</View>
);

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'column',
		backgroundColor: '#0b4b53',
		width: dimensao.largura,
		alignItems: 'center',
	},
	text:{
		color: '#fff',
	}
});
