import { NativeStackScreenProps } from '@react-navigation/native-stack';
// import { Lancamento } from './Lancamento';
import { UsuarioLogado } from './Usuario';

declare global {
  namespace ReactNavigation {
    type RootParamList = RootStackParamList
  }
}

export type RootStackParamList = {
    Login: undefined
    Cadastro: undefined
    Home: {usuarioLogado: UsuarioLogado}
    Perfil: {usuarioLogado: UsuarioLogado}
    DebitoLancamentos: {usuarioLogado: UsuarioLogado}
    CreditoLancamentos: {usuarioLogado: UsuarioLogado}
    DebitoDetalhamento: {usuarioLogado: UsuarioLogado}
    CreditoDetalhamento: {usuarioLogado: UsuarioLogado}
    CadastroLancamentoDebito: {usuarioLogado: UsuarioLogado}
    EdicaoLancamentoDebito: {usuarioLogado: UsuarioLogado}
    CadastroLancamentoCredito: {usuarioLogado: UsuarioLogado}
    EdicaoLancamentoCredito: {usuarioLogado: UsuarioLogado}
    GastosFixos: {usuarioLogado: UsuarioLogado}
}

export type RootStackScreenProps<Screen extends keyof RootStackParamList> = NativeStackScreenProps<
  RootStackParamList,
  Screen
>;