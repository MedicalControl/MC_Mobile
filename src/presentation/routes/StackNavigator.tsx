import { createStackNavigator } from '@react-navigation/stack';
import { LoginScreen } from '../screens/Login/LoginScreen';
import { RegisterScreen_1 } from '../screens/Register/RegisterScreen_1';
import { HomeScreen } from '../screens/Home/HomeScreen';
import { RegisterScreen_2 } from '../screens/Register/RegisterScreen_2';
import { SettingScreen } from '../screens/Setting/SettingScreen';
import { ButtonTabs_Navigator } from './ButtonTabs'
import { Report_problemScreen } from '../screens/Report_problem/Report_problemScreen';
import { Help_DeskScreen } from '../screens/Help_Desk/Help_DeskScreen';
import { AboutScreen } from '../screens/About/AboutScreen';
import { DarkScreen } from '../screens/Dark/DarkScreen';
import { Notification } from '../screens/Notification/Notification';
import { DeviceScreen } from '../screens/Device/DeviceScreen';
import { globalColors } from '../theme/theme';
import { MessageScreen } from '../screens/Message/MessageScreen';


//Type of router_Navigation object

export type RootStack = {
    Login: undefined,
    Home: undefined,
    Register_1: undefined,
    Register_2: undefined,
    Register_3: undefined,
    About: undefined,
    Help_Desk: undefined,
    Report_problem: undefined,
    Notification: undefined,
    Dark: undefined,
    Device: undefined,
    Message: undefined

}


const Stack = createStackNavigator<RootStack>();


export const Stack_Navigator = () => {
    return (
        <Stack.Navigator screenOptions={{
            headerShown: false,
            headerStyle: {
                elevation: 0,
                shadowColor: 'transparent',
            }
        }}>
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Home" component={ButtonTabs_Navigator} />
            <Stack.Screen name="Register_1" component={RegisterScreen_1} />
            <Stack.Screen name="Register_2" component={RegisterScreen_2} />
            <Stack.Screen
                options={{
                    headerShown: true,
                    title: 'Perfil',
                    headerStyle: {
                        shadowColor: globalColors.primary,
                    },


                }}

                name="About" component={AboutScreen} />

            <Stack.Screen name="Help_Desk" component={Help_DeskScreen} />
            <Stack.Screen name="Report_problem" component={Report_problemScreen} />
            <Stack.Screen name="Notification" component={Notification} />
            <Stack.Screen name="Dark" component={DarkScreen} />
            <Stack.Screen
                options={{
                    headerShown: true,
                    headerStyle : {
                        shadowColor: globalColors.primary
                    }
                }}
                name="Device" component={DeviceScreen} />
            <Stack.Screen name='Message' component = {MessageScreen} />



        </Stack.Navigator>

    );
}