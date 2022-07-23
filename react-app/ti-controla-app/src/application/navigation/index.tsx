import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
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
import { RootStackParamList } from '../types/RootStack';

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
    <Stack.Navigator>
        <Stack.Screen name='Login' component={Login} options={{headerShown: false}}/>
        <Stack.Screen name='Home' component={Home} options={{headerShown: false}}/>
        <Stack.Screen name='Cadastro' component={Cadastro} options={{headerShown: false}}/>
        <Stack.Screen name='DebitoLancamentos' component={DebitoLancamentos} options={{headerShown: true}}/>
        <Stack.Screen name='DebitoDetalhamento' component={DebitoDetalhamento} options={{headerShown: true}}/>
        <Stack.Screen name='EdicaoLancamentoDebito' component={EdicaoLancamentoDebito} options={{headerShown: true}}/>
        <Stack.Screen name='CadastroLancamentoDebito' component={CadastroLancamentoDebito} options={{headerShown: true}}/>
        <Stack.Screen name='CreditoLancamentos' component={CreditoLancamentos} options={{headerShown: true}}/>
        <Stack.Screen name='CreditoDetalhamento' component={CreditoDetalhamento} options={{headerShown: true}}/>
        <Stack.Screen name='EdicaoLancamentoCredito' component={EdicaoLancamentoCredito} options={{headerShown: true}}/>
        <Stack.Screen name='CadastroLancamentoCredito' component={CadastroLancamentoCredito} options={{headerShown: true}}/>
    </Stack.Navigator>
    )
}