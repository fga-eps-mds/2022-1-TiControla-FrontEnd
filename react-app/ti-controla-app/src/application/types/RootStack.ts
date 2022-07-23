import { NativeStackScreenProps } from '@react-navigation/native-stack';
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
}

export type RootStackScreenProps<Screen extends keyof RootStackParamList> = NativeStackScreenProps<
  RootStackParamList,
  Screen
>;