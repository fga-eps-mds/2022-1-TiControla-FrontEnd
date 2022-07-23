import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import {createAppContainer} from 'react-navigation'
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
    </Stack.Navigator>
    )
}