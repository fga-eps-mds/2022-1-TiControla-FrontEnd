import {
	View,
	StyleSheet,
	TouchableOpacity,
	Image,
	StatusBar,
} from 'react-native';
import Texto from '../../../components/Texto';

//<Image source={require('./my-icon.png')} />
import { Feather } from '@expo/vector-icons';
import React from 'react';
import { dimensao } from '../../../utils/dimensoesDoDipositivo';
import { useNavigation } from '@react-navigation/native';

const statusBarHeight = StatusBar.currentHeight
	? StatusBar.currentHeight + 82
	: 64;

export default function Header({}) {
	const navigation = useNavigation();
	return (
		<View style={styles.container}>
			<View style={styles.voltar}>
				<TouchableOpacity style={styles.buttonvoltar} onPress={navigation.goBack}>
					<Feather name="arrow-left" size={25} color="#fff" />
				</TouchableOpacity>
			</View>

			<View style={styles.user}>
				<Image
					source={require('../../../assets/icons/profile.png')}
					style={styles.image}
				/>
			</View>

			<Texto tipo="negrito" style={styles.username}>
        Fulano da Silva
			</Texto>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'column',
		backgroundColor: '#0b4b53',
		color: '#fff',
		width: dimensao.largura,
		height: statusBarHeight,
		alignItems: 'center',
	},
	user: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		height: 133,
		width: dimensao.largura,
	},
	voltar: {
		flex: 0.15,
		backgroundColor: '#0b4b53',
		flexDirection: 'row',
		justifyContent: 'flex-start',
		alignItems: 'flex-start',
		height: 143,
		width: dimensao.largura,
	},
	username: {
		color: '#fff',
		fontSize: 22,
		fontWeight: 'bold',
		marginBottom: 65,
	},
	buttonuser: {
		width: 94,
		height: 94,
		//backgroundColor: 'rgba(255,255,255,0.5)',
		opacity: 0.6,
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 182,
		marginBottom: 40,
	},
	buttonvoltar: {
		width: 34,
		height: 34,
		/*marginLeft: -115,
        marginBottom: 140,
        backgroundColor: 'rgba(255,255,255,0.5)',*/
		opacity: 0.6,
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 182,
		marginLeft: 15,
	},
	image: {
		flex: 0,
		width: 100,
		height: 100,
		resizeMode: 'contain',
	},
});
