import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator, NativeStackHeaderProps} from '@react-navigation/native-stack'
import { Image, StyleSheet, TouchableOpacity, TouchableOpacityProps, View } from 'react-native';
import { getHeaderTitle } from '@react-navigation/elements';
import Cadastro from '../../views/cadastro';
import CreditoLancamentos from '../../views/creditoLancamentos';
import CadastroLancamentoCredito from '../../views/creditoLancamentos/views/cadastroLancamentoCredito';
import CreditoDetalhamento from '../../views/creditoLancamentos/views/creditoDetalhamento';
import EdicaoLancamentoCredito from '../../views/creditoLancamentos/views/edicaoLancamentoCredito';
import DebitoLancamentos from '../../views/debitoLancamentos';
import CadastroLancamentoDebito from '../../views/debitoLancamentos/views/cadastroLancamentoDebito';
import DebitoDetalhamento from '../../views/debitoLancamentos/views/debitoDetalhamento';
import EdicaoLancamentoDebito from '../../views/debitoLancamentos/views/edicaoLancamentoDebito';
import Home from '../../views/home';
import Login from '../../views/login';
import Texto from '../../components/Texto'
import { RootStackParamList } from '../types/RootStack';
import arrow_back from '../../assets/icons/arrow_back.png'
import GastosFixos from '../../views/gastosFixos';

export default function Navigation(){
    return (
        <NavigationContainer>
            <RootNavigator/>
        </NavigationContainer>
    )
}

const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator(){
    return (
    <Stack.Navigator screenOptions={{headerShown: true, header: Header}}>
        <Stack.Screen name='Login' component={Login} options={{headerShown: false}}/>
        <Stack.Screen name='Home' component={Home} options={{headerShown: false}}/>
        <Stack.Screen name='Cadastro' component={Cadastro} options={{headerShown: false}}/>
        <Stack.Screen name='DebitoLancamentos' component={DebitoLancamentos} options={{headerTitle: 'Lançamentos de débitos'}}/>
        <Stack.Screen name='DebitoDetalhamento' component={DebitoDetalhamento} options={{headerTitle: 'Detalhamento de débito'}}/>
        <Stack.Screen name='EdicaoLancamentoDebito' component={EdicaoLancamentoDebito} options={{headerTitle: 'Edição de débito'}}/>
        <Stack.Screen name='CadastroLancamentoDebito' component={CadastroLancamentoDebito} options={{headerTitle: 'Cadastro de débito'}}/>
        <Stack.Screen name='CreditoLancamentos' component={CreditoLancamentos} options={{headerTitle: 'Lançamentos de crédito'}}/>
        <Stack.Screen name='CreditoDetalhamento' component={CreditoDetalhamento} options={{headerTitle: 'Detalhamento de crédito'}}/>
        <Stack.Screen name='EdicaoLancamentoCredito' component={EdicaoLancamentoCredito} options={{headerTitle: 'Edição de crédito'}}/>
        <Stack.Screen name='CadastroLancamentoCredito' component={CadastroLancamentoCredito} options={{headerTitle: 'Cadastro de crédito'}}/>
        <Stack.Screen name='GastosFixos' component={GastosFixos} options={{headerTitle: 'Gastos fixos'}}/>
    </Stack.Navigator>
    )
}

function Header({navigation, route, options, back}: NativeStackHeaderProps){
    const title = getHeaderTitle(options, route.name)
    return<MyHeader title={title} leftButton={back ? <MyBackButton onPress={navigation.goBack}/>: undefined}/>
}

type MyHeaderProps = {
    title: string
    leftButton: any
}

function MyHeader({title, leftButton}: MyHeaderProps){
    return <View style={estilos.header}>
        <View>{leftButton}</View>
        <Texto tipo='negrito' style={estilos.title}>{title}</Texto>
    </View>
}

function MyBackButton({onPress}: TouchableOpacityProps) {
    return <TouchableOpacity onPress={onPress} style={{marginTop: 8}}>
        <Image source={arrow_back}/>
    </TouchableOpacity>
}

const estilos = StyleSheet.create({
    title: {
        color: '#fff',
        fontSize: 22,
        textAlign: 'center',
        flex: 1,
    },
    header: {
        flexDirection: 'row',
        backgroundColor: '#0B4B54',
        height: 96,
        alignItems: 'center',
        paddingHorizontal: 16,
    },
})