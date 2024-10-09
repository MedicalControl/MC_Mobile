import { createDrawerNavigator, DrawerContentComponentProps, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { Stack_Navigator } from './StackNavigator';
import { globalColors } from '../theme/theme';
import { View,  Text } from 'react-native';
import { IonIcon } from '../components/shared/Ionicon';
import { MessageScreen } from '../screens/SideBarMenu/Notification/Message/MessageScreen';
import { LabScreen } from '../screens/SideBarMenu/Result_Lab/LabScreen';
import { Notification } from '../screens/SideBarMenu/Notification/Notification';
import { LanguageScreen } from '../screens/SideBarMenu/Language/LanguageScreen';
import { DarkScreen } from '../screens/SideBarMenu/Dark/DarkScreen';
import { SettingScreen } from '../screens/SideBarMenu/Setting/SettingScreen';
import { DeviceScreen } from '../screens/SideBarMenu/Device/DeviceScreen';

const Drawer = createDrawerNavigator();

export const SideMenu = () => {
    return (
        <Drawer.Navigator

            drawerContent={(props) => <CustomDrawerContent{...props} />}
            screenOptions={{
                headerShown: false,
                drawerType: 'front',

                drawerActiveBackgroundColor: globalColors.primary,
                drawerActiveTintColor: globalColors.tertiary,
                drawerInactiveTintColor: globalColors.List_item,
                drawerItemStyle: {
                    borderRadius: 10,
                    paddingHorizontal: 20,

                }
            }}
        >
            <Drawer.Screen
                options={{ title: 'Inicio', drawerIcon: ({ color }) => (<IonIcon name='home' size={20} color={color} />) }}
                name="Stack" component={Stack_Navigator} />


            <Drawer.Screen
                options={{
                    headerShown: true,
                    title: 'Notificaciones', drawerIcon: ({ color }) => (<IonIcon name='notifications-sharp' size={20} color={color} />),
                    drawerItemStyle: {
                        paddingHorizontal: 20,
                        borderRadius: 10,
                        marginVertical: 70

                    }
                }}
                name="Notification" component={Notification} />
            <Drawer.Screen
                options={{
                    headerShown: true,
                    title: 'Mensajes', drawerIcon: ({ color }) => (<IonIcon name='chatbubble-ellipses-sharp' size={20} color={color} />),
                    drawerItemStyle: {
                        paddingHorizontal: 20,
                        borderRadius: 10,
                        bottom: 65
                    }
                }}
                name="Message" component={MessageScreen} />
            <Drawer.Screen
                options={{
                    headerShown: true,
                    title: 'Resultados de laboratorio', drawerIcon: ({ color }) => (<IonIcon name='flask' size={20} color={color} />),
                    drawerItemStyle: {
                        paddingHorizontal: 20,
                        borderRadius: 10,
                        bottom: 62
                    }
                }}
                name="Lab" component={LabScreen} />
            <Drawer.Screen
                options={{
                    headerShown: true,
                    title: 'Idioma', drawerIcon: ({ color }) => (<IonIcon name='language' size={20} color={color} />),
                    drawerItemStyle: {
                        paddingHorizontal: 20,
                        borderRadius: 10,
                        bottom: 10
                    }

                }}
                name="Language" component={LanguageScreen} />
            <Drawer.Screen
                options={{
                    headerShown: true,
                    title: 'Dispositivos', drawerIcon: ({ color }) => (<IonIcon name='watch-sharp' size={20} color={color} />),
                    drawerItemStyle: {
                        paddingHorizontal: 20,
                        borderRadius: 10,
                        bottom: 8

                    }
                }}
                name="Device" component={DeviceScreen} />

            <Drawer.Screen
                options={{
                    headerShown: true,
                    title: 'Modo oscuro', drawerIcon: ({ color }) => (<IonIcon name='moon' size={20} color={color} />),
                    drawerItemStyle: {
                        paddingHorizontal: 20,
                        borderRadius: 10,
                        bottom: 6
                    }
                }}
                name="Dark" component={DarkScreen} />

            <Drawer.Screen
                options={{
                    headerShown: true,
                    title: 'Configuracion', drawerIcon: ({ color }) => (<IonIcon name='settings-sharp' size={20} color={color} />),
                    drawerItemStyle: {
                        paddingHorizontal: 20,
                        borderRadius: 10,
                        bottom: 4

                    }
                }}
                name="Setting" component={SettingScreen} />

        </Drawer.Navigator>
    );
}

const CustomDrawerContent = (props: DrawerContentComponentProps) => {
    return (

        <DrawerContentScrollView>

            <View style={{
                height: 60,
                width: 60,
                backgroundColor: globalColors.success,
                margin: 30,
                borderRadius: 50
            }}>


            </View>
            <DrawerItemList {...props} />
            <Text style={{ borderBottomColor: '#ccc', borderBottomWidth: 2, bottom: 495, marginHorizontal: 18 }}></Text>
            <Text style={{ color: globalColors.tertiary, position: 'absolute', top: 230, fontWeight: 'bold', fontSize: 20, marginHorizontal: 40 }}>Comunicaciones</Text>
            <Text style={{ borderBottomColor: '#ccc', borderBottomWidth: 2, bottom: 292, marginHorizontal: 18 }}></Text>
            <Text style={{ color: globalColors.tertiary, position: 'absolute', bottom: 255, fontWeight: 'bold', fontSize: 20, marginHorizontal: 40 }}>Configuraciones</Text>
        </DrawerContentScrollView>
    )
}

