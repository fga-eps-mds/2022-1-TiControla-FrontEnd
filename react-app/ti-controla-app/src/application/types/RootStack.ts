import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Lancamento } from './Lancamento';
import { Usuario } from "./Usuario"

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList { }
  }
}

export type RootStackParamList = {
    Login: undefined
    Cadastro: undefined
    Home: {usuario: Usuario, id: string}
    Perfil: {usuario: Usuario}
    DebitoLancamentos: {id: string}
    CreditoLancamentos: {id: string}
    DebitoDetalhamento: {lancamento: Lancamento}
    CreditoDetalhamento: {lancamento: Lancamento}
    CadastroLancamentoDebito: {id: string}
    EdicaoLancamentoDebito: {lancamento: Lancamento}
    CadastroLancamentoCredito: {id: string}
    EdicaoLancamentoCredito: {lancamento: Lancamento}
}

export type RootStackScreenProps<Screen extends keyof RootStackParamList> = NativeStackScreenProps<
  RootStackParamList,
  Screen
>;