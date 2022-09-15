import { useState, useEffect } from 'react';
import { usuarioTeste } from '../../application/mocks/usuarioTeste';
import { RootStackScreenProps } from '../../application/types/RootStack';
import {
	Image,
	View,
	StyleSheet,
	TextInput,
	TouchableOpacity,
} from 'react-native';
import Botao from '../../components/Botao';
import Texto from '../../components/Texto';
import logo from '../../assets/icons/logo.png';
import { dimensao } from '../../utils/dimensoesDoDipositivo';
import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { style } from '@mui/system';
import { config } from '../../application/config/url';
import { UsuarioLogado } from '../../application/types/Usuario';
// import AsyncStorage from "@react-native-community/async-storage";

const schema = yup.object({
	email: yup.string().required('Informe o seu nome de usuário!'),
	password: yup
		.string()
		.min(4, 'Insira uma password com mais de 4 dígitos')
		.required('Informe a sua password!'),
});
let csrftoken;
let sessionid;

function logarUsuario(csrftoken: string, sessionid: string) {
	const csrftokenUsuario = 'csrftoken=' + csrftoken + ';';
	const sessionidUsuario = 'sessionid=' + sessionid + ';';
	const usuarioLogado: UsuarioLogado = {
		csrftoken: csrftokenUsuario,
		sessionid: sessionidUsuario,
	};
	return usuarioLogado;
}

export default function Login({ navigation }: RootStackScreenProps<'Login'>) {
	const {
		control,
		handleSubmit,
		formState: { errors },
	} = useForm({ resolver: yupResolver(schema) });
	const { backendBaseServer } = config;

	// parei aqui
	const handleLogin = (data: any) => {
		fetch(backendBaseServer + 'login/', {
			method: 'POST',
			credentials: 'include',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(data),
		})
			.then((result) => {
				console.log(result.status,data);
				let usuario;
				if (result.status == 200) {
					csrftoken = result.headers
						.get('set-cookie')!
						.split(';')[0]
						.split('token=')[1];
					sessionid = result.headers
						.get('set-cookie')!
						.split(';')[4]
						.split('sessionid=')[1];
					console.log(csrftoken,sessionid);
					usuario = logarUsuario(csrftoken, sessionid);
					navigation.navigate('Home', {
						usuarioLogado: usuario,
					});
				}
				return result.json();
			}).then( resultData => {
				if(resultData['non_field_errors'][0]) 
				{
					alert(resultData['non_field_errors'][0]);
				}
			})
			.catch((e) => {
				console.log(e);
			});
	};
	return (
		<View style={estilos.container}>
			<View style={{ alignItems: 'center' }}>
				<Image source={logo} style={estilos.logo}></Image>
				<View style={estilos.formulario}>
					<Texto style={estilos.label}>Nome de usuário:</Texto>
					<Controller
						control={control}
						name="email"
						render={({ field: { onBlur, onChange, value } }) => (
							<TextInput
								value={value}
								onChangeText={onChange}
								onBlur={onBlur}
								style={[
									estilos.input,
									{
										borderWidth: errors.email && 1,
										borderColor: errors.email && 'red',
									},
								]}
								placeholder="Insira o nome de usuário"
							/>
						)}
					/>
					{errors.email && (
						<Texto style={estilos.erro}>{errors.email?.message}</Texto>
					)}
					<Texto style={estilos.label}>Senha:</Texto>
					<Controller
						control={control}
						name="password"
						render={({ field: { onBlur, onChange, value } }) => (
							<TextInput
								value={value}
								onChangeText={onChange}
								onBlur={onBlur}
								style={[
									estilos.input,
									{
										borderWidth: errors.password && 1,
										borderColor: errors.password && 'red',
									},
								]}
								secureTextEntry={true}
								placeholder="Insira a senha"
							/>
						)}
					/>
					{errors.password && (
						<Texto style={estilos.erro}>{errors.celular?.message}</Texto>
					)}
				</View>
				<Botao
					tipo="grande"
					cor="verde"
					onPress={handleSubmit(handleLogin)}
					style={{ marginTop: 24 }}
				>
          Entrar
				</Botao>
				<TouchableOpacity>
					<Texto tipo="negrito" style={estilos.esqueciSenha}>
            Esqueci a minha senha
					</Texto>
				</TouchableOpacity>
				<TouchableOpacity onPress={() => navigation.navigate('Cadastro')}>
					<Texto tipo="negrito" style={estilos.naoPossuoConta}>
            Não possuo conta
					</Texto>
				</TouchableOpacity>
			</View>
		</View>
	);
}

const estilos = StyleSheet.create({
	container: {
		backgroundColor: '#0B4B54',
		height: '100%',
		alignItems: 'center',
		justifyContent: 'center',
	},
	logo: {
		marginBottom: 8,
	},
	formulario: {
		width: dimensao.largura - 32,
	},
	label: {
		fontSize: 14,
		marginLeft: 5,
		color: '#fff',
		marginBottom: 1,
	},
	input: {
		backgroundColor: '#fff',
		height: 44,
		borderRadius: 10,
		marginBottom: 16,
		padding: 5,
	},
	esqueciSenha: {
		color: '#fff',
		marginTop: 16,
	},
	naoPossuoConta: {
		color: '#fff',
		marginTop: 32,
	},
});
