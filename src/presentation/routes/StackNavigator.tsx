import { createStackNavigator } from '@react-navigation/stack';
import { RegisterScreen_1 } from '../screens/StacksScreens/Register/RegisterScreen_1';
import { RegisterScreen_2 } from '../screens/StacksScreens/Register/RegisterScreen_2';
import { ButtonTabs_Navigator } from './ButtonTabs'
import { Report_problemScreen } from '../screens/Report_problem/Report_problemScreen';
import { Help_DeskScreen } from '../screens/Help_Desk/Help_DeskScreen';
import { AboutScreen } from '../screens/About/AboutScreen';
import { DarkScreen } from '../screens/SideBarMenu/Dark/DarkScreen';
import { Notification } from '../screens/SideBarMenu/Notification/Notification';

import { globalColors } from '../theme/theme';
import { MessageScreen } from '../screens/SideBarMenu/Notification/Message/MessageScreen';
import { LoginScreen } from '../screens/StacksScreens/Login/LoginScreen';
import { DeviceScreen } from '../screens/SideBarMenu/Device/DeviceScreen';


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