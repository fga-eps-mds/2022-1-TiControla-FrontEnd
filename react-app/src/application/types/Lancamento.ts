import { Usuario } from './Usuario';

export type Lancamento = {
    id: Usuario,
    codigo: string,
    tipo: 'credito' | 'debito',
    nome: string,
    apelidoCartao?: string,
    data: Date,
    categoria: 'lazer' | 'carro' | 'comida' | 'mercado' | 'pet' | 'pessoal' | 'outros' | 'viagem' | 'roupa',
    descricao: string,
    valor: number,
    parcelas: 'unica' | 'fixa' | number
}