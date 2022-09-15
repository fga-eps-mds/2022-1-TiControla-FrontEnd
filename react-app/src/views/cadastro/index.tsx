import { useState } from 'react';
import {useForm, Controller} from 'react-hook-form';

import {
	Image,
	View,
	StyleSheet,
	TextInput,
} from 'react-native';
import Botao from '../../components/Botao';
import Texto from '../../components/Texto';
import logo from '../../assets/icons/logo.png';
import { dimensao } from '../../utils/dimensoesDoDipositivo';
import React from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { style } from '@mui/system';
import { config } from '../../application/config/url';

const schema = yup.object({
	full_name: yup.string().required('Informe o seu nome completo!'),
	email: yup.string().email('E-mail inválido!').required('Informe o seu endereço de email!'),
	password: yup.string().min(4,'Insira uma password com mais de 4 dígitos').required('Informe a sua password!'),
});

export default function Cadastro() {

	const {control, handleSubmit, formState: { errors}} = useForm({
		resolver: yupResolver(schema)
	});
	const { backendBaseServer } = config;

	const submitHandler = (data : any) => {
		
		delete data['celular'];
		delete data['nome'];
		// delete data['full_name'];

		console.log(backendBaseServer + 'register/',data);
		fetch(backendBaseServer + 'register/',{
			method: 'POST',
			credentials: 'include',
			headers:{
				'referer': backendBaseServer,
				'Content-Type':'application/json'
			},
			body: JSON.stringify(data)
		}).then(result => { return result.json(); }).then( resultData => { alert('Por favor, abra o email e clique no link para verificar a sua conta .');}).catch(e => { console.log(e); });
	};

	return (
		<View style={estilos.container}>
			<View style={{alignItems: 'center'}}>
				<Image source={logo} style={estilos.logo}></Image>
				<View style={estilos.formulario}>
					<Texto style={estilos.label}>Email:</Texto>
					<Controller
						control={control}
						name='email'
						render = {
							({field : {onBlur,onChange,value}}) => (
								<TextInput
									value={value}
									onChangeText={onChange}
									onBlur={onBlur}
									style={[estilos.input, 
										{
											borderWidth: errors.email && 1,
											borderColor: errors.email && 'red'
										}]}
									keyboardType="email-address" 
									placeholder='Insira o e-mail' />
							)
						}
					/>
					{errors.email && <Texto style={estilos.erro}>{errors.email?.message}</Texto>}
            
					<Texto style={estilos.label}>Nome:</Texto>
					<Controller
						control={control}
						name='full_name'
						render={
							({ field: { onBlur, onChange, value } }) => (
								<TextInput
									value={value}
									onChangeText={onChange}
									onBlur={onBlur}
									style={[estilos.input,
										{
											borderWidth: errors.full_name && 1,
											borderColor: errors.full_name && 'red'
										}]}
									placeholder='Insira o nome completo' />
							)
						}
					/>
					{errors.full_name && <Texto style={estilos.erro}>{errors.full_name?.message}</Texto>}
					<Texto style={estilos.label}>Senha:</Texto>
					<Controller
						control={control}
						name='password'
						render={
							({ field: { onBlur, onChange, value } }) => (
								<TextInput
									value={value}
									onChangeText={onChange}
									onBlur={onBlur}
									style={[estilos.input,
										{
											borderWidth: errors.password && 1,
											borderColor: errors.password && 'red'
										}]}
									secureTextEntry={true}
									placeholder='Insira a senha' />
							)
						}
					/>
					{errors.password && <Texto style={estilos.erro}>{errors.celular?.message}</Texto>}

				</View>
				<Botao onPress={handleSubmit(submitHandler)}
					tipo="grande"
					cor="verde"
					style={{ marginTop: 24 }}
				>
          Cadastrar
				</Botao>
			</View>
		</View>
	);
}

const estilos = StyleSheet.create({
	container: {
		backgroundColor: '#0B4B54',
		height: '100%',
		alignItems: 'center',
		justifyContent: 'center'
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
	erro: {
		fontSize: 14,
		marginLeft: 5,
		color: 'red',
		marginBottom: 1,
	},
	input: {
		backgroundColor: '#fff',
		height: 44,
		borderRadius: 10,
		marginBottom: 16,
		padding: 5,
	},
});
