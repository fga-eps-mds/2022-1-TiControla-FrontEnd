import { usuarioTeste } from "../../application/mocks/usuarioTeste";
import { RootStackScreenProps } from "../../application/types/RootStack";
import Botao from "../../components/Botao";
import Texto from "../../components/Texto";

export default function Login({navigation}: RootStackScreenProps<'Login'>){
    return <>
    <Texto>fasdadssa</Texto>
    <Botao tipo="grande" cor="verde" onPress={() => {navigation.navigate('Home', {usuario: usuarioTeste, id: usuarioTeste.id})}}>Entrar</Botao>
    </>
}