import { Lancamento } from '../types/Lancamento';
import { usuarioTeste } from './usuarioTeste';

export const lancamentosTeste: Lancamento[] = [
    {
        id: usuarioTeste,
        codigo: 'c6076c7b-e1dd-482b-be53-0f0fe4ef2854',
        tipo: 'credito',
        nome: 'Roupas de cama',
        apelidoCartao: 'nubank',
        data: new Date(),
        categoria: 'outros',
        descricao: 'Sint nisi adipisicing Lorem reprehenderit consectetur in officia et anim dolor voluptate qui magna reprehenderit. Lorem reprehenderit eiusmod et qui Lorem. Ea cillum consectetur cillum qui et officia dolor duis elit est pariatur aute ad. Officia fugiat velit dolore amet aliquip anim. Eiusmod cillum in irure officia culpa pariatur ea eu sint elit laborum enim mollit.',
        valor: 100,
        parcelas: 3
    },
    {
        id: usuarioTeste,
        codigo: '2347dd9c-0ebc-41a8-a9fe-ad6b70d9271b',
        tipo: 'credito',
        nome: 'Tênis',
        apelidoCartao: 'nubank',
        data: new Date(),
        categoria: 'roupa',
        descricao: 'Sint nisi adipisicing Lorem reprehenderit consectetur in officia et anim dolor voluptate qui magna reprehenderit. Lorem reprehenderit eiusmod et qui Lorem. Ea cillum consectetur cillum qui et officia dolor duis elit est pariatur aute ad. Officia fugiat velit dolore amet aliquip anim. Eiusmod cillum in irure officia culpa pariatur ea eu sint elit laborum enim mollit.',
        valor: 59.99,
        parcelas: 5
    },
    {
        id: usuarioTeste,
        codigo: 'fed96416-aa50-4fcd-9483-914a25a41a32',
        tipo: 'credito',
        nome: 'Viagem',
        apelidoCartao: 'nubank',
        data: new Date(),
        categoria: 'viagem',
        descricao: 'Sint nisi adipisicing Lorem reprehenderit consectetur in officia et anim dolor voluptate qui magna reprehenderit. Lorem reprehenderit eiusmod et qui Lorem. Ea cillum consectetur cillum qui et officia dolor duis elit est pariatur aute ad. Officia fugiat velit dolore amet aliquip anim. Eiusmod cillum in irure officia culpa pariatur ea eu sint elit laborum enim mollit.',
        valor: 300,
        parcelas: 3
    },
    {
        id: usuarioTeste,
        codigo: 'e6c390d5-74d1-4bc4-b49a-e83c4c97ad21',
        tipo: 'credito',
        nome: 'Petz',
        apelidoCartao: 'digio',
        data: new Date(),
        categoria: 'pet',
        descricao: 'Sint nisi adipisicing Lorem reprehenderit consectetur in officia et anim dolor voluptate qui magna reprehenderit. Lorem reprehenderit eiusmod et qui Lorem. Ea cillum consectetur cillum qui et officia dolor duis elit est pariatur aute ad. Officia fugiat velit dolore amet aliquip anim. Eiusmod cillum in irure officia culpa pariatur ea eu sint elit laborum enim mollit.',
        valor: 150,
        parcelas: 4
    },
    {
        id: usuarioTeste,
        codigo: '10aa5c78-17da-44aa-9b84-4a9bbe3a339e',
        tipo: 'credito',
        nome: 'Curso',
        apelidoCartao: 'digio',
        data: new Date(),
        categoria: 'outros',
        descricao: 'Sint nisi adipisicing Lorem reprehenderit consectetur in officia et anim dolor voluptate qui magna reprehenderit. Lorem reprehenderit eiusmod et qui Lorem. Ea cillum consectetur cillum qui et officia dolor duis elit est pariatur aute ad. Officia fugiat velit dolore amet aliquip anim. Eiusmod cillum in irure officia culpa pariatur ea eu sint elit laborum enim mollit.',
        valor: 49.99,
        parcelas: 12
    },
    {
        id: usuarioTeste,
        codigo: 'b267338e-6a20-418a-a48f-a169270b225e',
        tipo: 'debito',
        nome: 'Padaria',
        data: new Date(),
        categoria: 'comida',
        descricao: 'Sint nisi adipisicing Lorem reprehenderit consectetur in officia et anim dolor voluptate qui magna reprehenderit. Lorem reprehenderit eiusmod et qui Lorem. Ea cillum consectetur cillum qui et officia dolor duis elit est pariatur aute ad. Officia fugiat velit dolore amet aliquip anim. Eiusmod cillum in irure officia culpa pariatur ea eu sint elit laborum enim mollit.',
        valor: 30.00,
        parcelas: 'unica'
    },
    {
        id: usuarioTeste,
        codigo: 'cf71f2f1-b12b-47ac-acba-718d7c55d944',
        tipo: 'debito',
        nome: 'Padaria',
        data: new Date(),
        categoria: 'comida',
        descricao: 'Sint nisi adipisicing Lorem reprehenderit consectetur in officia et anim dolor voluptate qui magna reprehenderit. Lorem reprehenderit eiusmod et qui Lorem. Ea cillum consectetur cillum qui et officia dolor duis elit est pariatur aute ad. Officia fugiat velit dolore amet aliquip anim. Eiusmod cillum in irure officia culpa pariatur ea eu sint elit laborum enim mollit.',
        valor: 30.00,
        parcelas: 'unica'
    },
    {
        id: usuarioTeste,
        codigo: '5121685d-a687-4832-9f40-60c4ad3037ce',
        tipo: 'debito',
        nome: 'Cinema',
        data: new Date(),
        categoria: 'lazer',
        descricao: 'Sint nisi adipisicing Lorem reprehenderit consectetur in officia et anim dolor voluptate qui magna reprehenderit. Lorem reprehenderit eiusmod et qui Lorem. Ea cillum consectetur cillum qui et officia dolor duis elit est pariatur aute ad. Officia fugiat velit dolore amet aliquip anim. Eiusmod cillum in irure officia culpa pariatur ea eu sint elit laborum enim mollit.',
        valor: 24.50,
        parcelas: 'unica'
    },
    {
        id: usuarioTeste,
        codigo: 'bda1c249-d3fc-485f-acc5-ece48a7cc627',
        tipo: 'debito',
        nome: 'Remedio',
        data: new Date(),
        categoria: 'pessoal',
        descricao: 'Sint nisi adipisicing Lorem reprehenderit consectetur in officia et anim dolor voluptate qui magna reprehenderit. Lorem reprehenderit eiusmod et qui Lorem. Ea cillum consectetur cillum qui et officia dolor duis elit est pariatur aute ad. Officia fugiat velit dolore amet aliquip anim. Eiusmod cillum in irure officia culpa pariatur ea eu sint elit laborum enim mollit.',
        valor: 50.00,
        parcelas: 'unica'
    },
    {
        id: usuarioTeste,
        codigo: 'f49cb50b-9a0f-495a-9779-ad3e412adecb',
        tipo: 'debito',
        nome: 'Óleo do carro',
        data: new Date(),
        categoria: 'carro',
        descricao: 'Sint nisi adipisicing Lorem reprehenderit consectetur in officia et anim dolor voluptate qui magna reprehenderit. Lorem reprehenderit eiusmod et qui Lorem. Ea cillum consectetur cillum qui et officia dolor duis elit est pariatur aute ad. Officia fugiat velit dolore amet aliquip anim. Eiusmod cillum in irure officia culpa pariatur ea eu sint elit laborum enim mollit.',
        valor: 150.00,
        parcelas: 'unica'
    }
]