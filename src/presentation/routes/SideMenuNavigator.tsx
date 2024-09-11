import { createDrawerNavigator, DrawerContentComponentProps, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { Stack_Navigator } from './StackNavigator';
import { AboutScreen } from '../screens/About/AboutScreen';
import { globalColors } from '../theme/theme';
import { View, Image, Text } from 'react-native';
import { IonIcon } from '../components/shared/Ionicon';
import { DeviceScreen } from '../screens/Device/DeviceScreen';
import { MessageScreen } from '../screens/Message/MessageScreen';
import { LabScreen } from '../screens/Result_Lab/LabScreen';
import { Notification } from '../screens/Notification/Notification';
import { LanguageScreen } from '../screens/Language/LanguageScreen';
import { DarkScreen } from '../screens/Dark/DarkScreen';
import { SettingScreen } from '../screens/Setting/SettingScreen';

const Drawer = createDrawerNavigator();

export const SideMenu = () => {
    return (
        <Drawer.Navigator

            drawerContent={(props) => <CustomDrawerContent{...props} />}
            screenOptions={{
                headerShown: false,
                drawerType: 'front',

                drawerActiveBackgroundColor: globalColors.success,
                drawerActiveTintColor: 'white',
                drawerInactiveTintColor: globalColors.success,
                drawerItemStyle: {
                    borderRadius: 10,
                    paddingHorizontal: 20,

                }
            }}
        >
            <Drawer.Screen
                options={{ title: 'Inicio', drawerIcon: ({ color }) => (<IonIcon name='home-outline' size={20} color={color} />) }}
                name="Stack" component={Stack_Navigator} />
           
           
            <Drawer.Screen
                options={{
                    headerShown: true,
                    title: 'Notificaciones', drawerIcon: ({ color }) => (<IonIcon name='notifications-outline' size={20} color={color} />)
                }}
                name="Notification" component={Notification} />
            <Drawer.Screen
                options={{
                    headerShown: true,
                    title: 'Mensajes', drawerIcon: ({ color }) => (<IonIcon name='mail-unread-outline' size={20} color={color} />)
                }}
                name="Message" component={MessageScreen} />
            <Drawer.Screen
                options={{
                    headerShown: true,
                    title: 'Resultados de laboratorio', drawerIcon: ({ color }) => (<IonIcon name='home-outline' size={20} color={color} />)
                }}
                name="Lab" component={LabScreen} />
            <Drawer.Screen
                options={{
                    headerShown: true,
                    title: 'Idioma', drawerIcon: ({ color }) => (<IonIcon name='language-outline' size={20} color={color} />)
                }}
                name="Language" component={LanguageScreen} />
            <Drawer.Screen
                options={{
                    headerShown: true,
                    title: 'Dispositivos', drawerIcon: ({ color }) => (<IonIcon name='tv-outline' size={20} color={color} />)
                }}
                name="Device" component={DeviceScreen} />
            <Drawer.Screen
                options={{
                    headerShown: true,
                    title: 'Modo oscuro', drawerIcon: ({ color }) => (<IonIcon name='moon-outline' size={20} color={color} />)
                }}
                name="Dark" component={DarkScreen} />
            <Drawer.Screen
                options={{
                    headerShown: true,
                    title: 'Configuracion', drawerIcon: ({ color }) => (<IonIcon name='settings-outline' size={20} color={color} />)
                }}
                name="Setting" component={SettingScreen} />
        </Drawer.Navigator>
    );
}


const CustomDrawerContent = (props: DrawerContentComponentProps) => {
    return (

        <DrawerContentScrollView>

            <View style={{
                height: 80,
                width: 80,
                backgroundColor: globalColors.primary,
                margin: 30,
                borderRadius: 50
            }}>


            </View>
            <DrawerItemList {...props} />
            <Text style={{ borderBottomColor: '#ccc', borderBottomWidth: 2, marginVertical: 10, bottom: 375, marginHorizontal: 10 }}></Text>

        </DrawerContentScrollView>
    )
}

