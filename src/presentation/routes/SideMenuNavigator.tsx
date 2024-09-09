import { createDrawerNavigator, DrawerContentComponentProps, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { Stack_Navigator } from './StackNavigator';
import { AboutScreen } from '../screens/About/AboutScreen';
import { globalColors } from '../theme/theme';
import { View, Image } from 'react-native';
import { IonIcon } from '../components/shared/Ionicon';

const Drawer = createDrawerNavigator();

export const SideMenu = () => {
    return (
        <Drawer.Navigator

            drawerContent={(props) => <CustomDrawerContent{...props} />}
            screenOptions={{
                headerShown: false,
                drawerType: 'slide',

                drawerActiveBackgroundColor: globalColors.primary,
                drawerActiveTintColor: 'white',
                drawerInactiveBackgroundColor: globalColors.primary,
                drawerItemStyle: {
                    borderRadius: 100,
                    paddingHorizontal: 20
                }
            }}
        >
            <Drawer.Screen 
            options={{drawerIcon: ({color}) => (<IonIcon name='document-text-outline' size={20} color={globalColors.background}/>)}}
            name="Stack" component={Stack_Navigator} />
            <Drawer.Screen name="About" component={AboutScreen} />
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
                <Image
                    source={require('../assets/eliezer.jpeg')}
                    style={{ width: 80, height: 80, borderRadius : 40 }}
                />

            </View>




            <DrawerItemList {...props} />
        </DrawerContentScrollView>
    )
}