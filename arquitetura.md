# Documentação da arquitetura geral do TiControla

## Objetivo
Este documento tem como finalidade uma breve apresentação da arquitetura do projeto, descrevendo como as diferentes partes interagem entre si e como funcionam num todo.

## Escopo

A arquitetura do projeto é totalmente fundamentada e detalhada, para moldar
uma base para a equipe de desenvolvimento, apresentando como será o comportamento do sistema.
Este documento contem os registros e tópicos importantes relacionados à arquitetura do sistema,
dando diretrizes, e total apoio para o uso de suas tecnologias .

## Definições, Acrônimos e Abreviações

Back-End - Parte da programação voltada ao funcionamento interno de um software;
* **Front-End** - Parte visual de um site ou software .
* **Servidor** - software ou computador, com sistema de computação centralizada que fornece
serviços a uma rede de computadores, chamada de cliente.
* **JSON** - é um formato de troca de dados, utilizado para estruturar dados em formato de
texto e permitir a troca de dados entre aplicações de forma simples, leve e rápida.
* **HTTP** - Hypertext Transfer Protocol, é um protocolo de comunicação utilizado para
sistemas de informação de hipermídia, distribuídos e colaborativos .
* **HTTPS** - Hypertext Transfer Protocol Secure, é uma implementação do protocolo HTTP
sobre uma camada adicional de segurança .
* **NodeJS** - ambiente de execução Javascript comumente utilizado em server-side.
* **React Native** - Framework baseado no já aclamado React, desenvolvido pela equipe do Facebook, que possibilita o desenvolvimento de aplicações mobile, tanto para Android, como para iOS, utilizando apenas Javascript. 
* **MySQL** - Sistema de gestão de banco de dados . 
* **ExpressJS** - Framework para o desenvolvimento de aplicações JavaScript com o uso do Node.js

## Representação arquitetural

A aplicação possui vários núcleos independentes e os mesmos interajem-se entre si enviando
requisições por intermédio do HTTP/HTTPS e cada núcleo foi desenvolvido usando tecnologias
diferentes, cuja base é a linguagem JavaScript e a ferramenta Node.JS . Pelo fato de cada núcleo
possuir uma determinada tecnologia distinta , o sistema no geral possui arquitetura de
microsserviços.

Eis a lista dos componetnes do sistema :

* **Aplicativo Mobile** : responsável pela visualização de dados e interação com o usuário, ou seja, é ponto de partida inicial do sistema.
* **Servidor central** :  responsável pelo recebimento e processamento das demandas do usuário.
* **Servidor de banco de dados** : responsável pelo armazenamento dos dados do cliente.

![diagrama de arquitetura](https://user-images.githubusercontent.com/9947506/176018987-5ac04711-7778-4571-850d-b674dda9ab3e.png)


##  Visualização dos casos de uso

Uma descrição da visualização de casos de uso da arquitetura de software. A Visualização de Caso de Uso é uma entrada importante na seleção do conjunto de cenários e/ou casos de uso que são o foco de uma interação. Ela descreve o conjunto de cenários e/ou os casos de uso que representam alguma funcionalidade central e significativa. Os casos de uso nesse sistema são listado abaixo. Todos os casos de uso são significativos para a arquitetura. Uma descrição desses casos de uso pode ser localizada posteriormente nessa secção.


