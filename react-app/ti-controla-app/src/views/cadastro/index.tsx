import { useState } from "react";
import {useForm, Controller} from 'react-hook-form';

import {
  Image,
  View,
  StyleSheet,
  TextInput,
} from "react-native";
import Botao from "../../components/Botao";
import Texto from "../../components/Texto";
import logo from "../../assets/icons/logo.png";
import { dimensao } from "../../utils/dimensoesDoDipositivo";
import React from "react";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { style } from "@mui/system";
import { config } from "../../application/config/url";

const schema = yup.object({
    nome: yup.string().required("Informe o seu nome!"),
    username: yup.string().required("Informe o seu nome de usuário!"),
    email: yup.string().email("E-mail inválido!").required("Informe o seu endereço de email!"),
    celular: yup.number().required("Informe o seu contato!"),
    password: yup.string().min(4,"Insira uma password com mais de 4 dígitos").required("Informe a sua password!"),
});

export default function Cadastro() {

    const {control, handleSubmit, formState: { errors}} = useForm({
        resolver: yupResolver(schema)
    });
    const { backendBaseServer } = config;

    const submitHandler = (data : any) => {
        delete data['celular'];
        delete data['nome'];
        fetch(backendBaseServer + 'register/',{
            method: 'POST',
            headers:{'Content-Type':'application/json'},
            body: JSON.stringify(data)
        }).then(response => response.json()).then((json) => { console.log('Cadastrado') }).catch(e => { console.log(e) }).finally(() => { alert('Usuário cadastrado com sucesso !')});
    }

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
                name='nome'
                render={
                    ({ field: { onBlur, onChange, value } }) => (
                        <TextInput
                            value={value}
                            onChangeText={onChange}
                            onBlur={onBlur}
                            style={[estilos.input,
                            {
                                borderWidth: errors.nome && 1,
                                borderColor: errors.nome && 'red'
                            }]}
                            placeholder='Insira o nome completo' />
                    )
                }
            />
            {errors.nome && <Texto style={estilos.erro}>{errors.nome?.message}</Texto>}
                  <Texto style={estilos.label}>Nome de usuário:</Texto>
                  <Controller
                      control={control}
                      name='username'
                      render={
                          ({ field: { onBlur, onChange, value } }) => (
                              <TextInput
                                  value={value}
                                  onChangeText={onChange}
                                  onBlur={onBlur}
                                  style={[estilos.input,
                                  {
                                      borderWidth: errors.username && 1,
                                      borderColor: errors.username && 'red'
                                  }]}
                                  placeholder='Insira o nome de usuário' />
                          )
                      }
                  />
                  {errors.username && <Texto style={estilos.erro}>{errors.username?.message}</Texto>}

            <Texto style={estilos.label}>Celular:</Texto>
            <Controller
                control={control}
                name='celular'
                render={
                    ({ field: { onBlur, onChange, value } }) => (
                        <TextInput
                            value={value}
                            onChangeText={onChange}
                            onBlur={onBlur}
                            style={[estilos.input,
                            {
                                borderWidth: errors.celular && 1,
                                borderColor: errors.celular && 'red'
                            }]}
                            keyboardType="name-phone-pad"
                            placeholder='Insira o contato' />
                    )
                }
            />
            {errors.celular && <Texto style={estilos.erro}>{errors.celular?.message}</Texto>}

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
    backgroundColor: "#0B4B54",
    height: "100%",
    alignItems: "center",
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
    color: "#fff",
    marginBottom: 1,
  },
    erro: {
        fontSize: 14,
        marginLeft: 5,
        color: "red",
        marginBottom: 1,
    },
  input: {
    backgroundColor: "#fff",
    height: 44,
    borderRadius: 10,
    marginBottom: 16,
    padding: 5,
  },
});
