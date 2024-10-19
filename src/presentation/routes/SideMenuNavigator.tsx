import { createDrawerNavigator, DrawerContentComponentProps, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { Stack_Navigator } from './StackNavigator';
import { globalColors } from '../theme/theme';
import { View, Text, Image } from 'react-native';
import { IonIcon } from '../components/shared/Ionicon';
import { MessageScreen } from '../screens/SideBarMenu/Notification/Message/MessageScreen';
import { LabScreen } from '../screens/SideBarMenu/Result_Lab/LabScreen';

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
            }}
        >
            <Drawer.Screen
                options={{ title: 'Inicio', drawerIcon: ({ color }) => (<IonIcon name='home-outline' size={20} color={color} />) }}
                name="Stack" component={Stack_Navigator} />

            <Drawer.Screen
                options={{
                    headerShown: true,
                    title: 'Resultados de laboratorio', drawerIcon: ({ color }) => (<IonIcon name='flask' size={20} color={color} />),

                }}
                name="Lab" component={LabScreen} />
            <Drawer.Screen
                options={{
                    headerShown: true,
                    title: 'Configuración', drawerIcon: ({ color }) => (<IonIcon name='notifications-sharp' size={20} color={color} />),
                }}
                name="Setting" component={SettingScreen} />
            <Drawer.Screen
                options={{
                    headerShown: true,
                    title: 'Ayuda y soporte', drawerIcon: ({ color }) => (<IonIcon name='help-circle-outline' size={20} color={color} />),
                }}
                name="Message" component={MessageScreen} />
            <Drawer.Screen
                options={{
                    headerShown: true,
                    title: 'Planes de suscripcion', drawerIcon: () => (<IonIcon name='sparkles-sharp' size={20} color="yellow" />),
                }}
                name="Device" component={DeviceScreen} />
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

                <Image
                    source={require('../assets/Melanie.jpeg')}
                    style={{ width: 60, height: 60, borderRadius: 50 }}

                />
            </View>
            <DrawerItemList {...props} />

        </DrawerContentScrollView>
    )
}

