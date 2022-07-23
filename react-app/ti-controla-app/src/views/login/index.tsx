import { usuarioTeste } from "../../application/mocks/usuarioTeste";
import { RootStackScreenProps } from "../../application/types/RootStack";
import {
  Image,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import Botao from "../../components/Botao";
import Texto from "../../components/Texto";
import logo from "../../assets/icons/logo.png";
import { dimensao } from "../../utils/dimensoesDoDipositivo";

export default function Login({ navigation }: RootStackScreenProps<"Login">) {
  return (
    <View style={estilos.container}>
      <View style={{alignItems: 'center'}}>
        <Image source={logo} style={estilos.logo}></Image>
        <View style={estilos.formulario}>
          <Texto style={estilos.label}>Email:</Texto>
          <TextInput keyboardType="email-address" style={estilos.input} />
          <Texto style={estilos.label}>Senha:</Texto>
          <TextInput keyboardType="visible-password" style={estilos.input} />
        </View>
        <Botao
          tipo="grande"
          cor="verde"
          onPress={() => {
            navigation.navigate("Home", {
              usuario: usuarioTeste,
              id: usuarioTeste.id,
            });
          }}
          style={{ marginTop: 24 }}
        >
          Entrar
        </Botao>
        <TouchableOpacity>
          <Texto tipo="negrito" style={estilos.esqueciSenha}>
            Esqueci a minha senha
          </Texto>
        </TouchableOpacity>
        <TouchableOpacity  onPress={() => navigation.navigate('Cadastro')}>
          <Texto tipo="negrito" style={estilos.naoPossuoConta}>
            Não possuo conta
          </Texto>
        </TouchableOpacity>
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
  input: {
    backgroundColor: "#fff",
    height: 44,
    borderRadius: 10,
    marginBottom: 16,
    padding: 5,
  },
  esqueciSenha: {
    color: "#fff",
    marginTop: 16,
  },
  naoPossuoConta: {
    color: "#fff",
    marginTop: 32,
  },
});
