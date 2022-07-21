import { Lancamento } from '../types/Lancamento';
import { usuarioTest } from './usuarioTest';

export const lancamentosTeste: Lancamento[] = [
    {
        id: usuarioTest,
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
        id: usuarioTest,
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
        id: usuarioTest,
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
        id: usuarioTest,
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
        id: usuarioTest,
        codigo: '10aa5c78-17da-44aa-9b84-4a9bbe3a339e',
        tipo: 'credito',
        nome: 'Curso',
        apelidoCartao: 'digio',
        data: new Date(),
        categoria: 'outros',
        descricao: 'Sint nisi adipisicing Lorem reprehenderit consectetur in officia et anim dolor voluptate qui magna reprehenderit. Lorem reprehenderit eiusmod et qui Lorem. Ea cillum consectetur cillum qui et officia dolor duis elit est pariatur aute ad. Officia fugiat velit dolore amet aliquip anim. Eiusmod cillum in irure officia culpa pariatur ea eu sint elit laborum enim mollit.',
        valor: 49.99,
        parcelas: 12
    }
]