import { BottomTabBarProps, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeScreen } from '../screens/Home/HomeScreen';
import { globalColors } from '../theme/theme';

import { Medical_appointments } from '../screens/tabsScreens/Medical appointments/Medical_appointments';
import { Vaccine_card } from '../screens/tabsScreens/Vaccine_card/Vaccine_card';
import { MyTabBar } from '../components/shared/TabBar';
import { TopTabsNavigator } from './TopTabsNavigator';


const Tab = createBottomTabNavigator();



export function ButtonTabs_Navigator() {
  return (
    <Tab.Navigator
      tabBar={(props: BottomTabBarProps) => <MyTabBar {...props} />}
      
      sceneContainerStyle={{
        backgroundColor: globalColors.background
      }}
    >
      <Tab.Screen name="home" options={{ title: 'Inicio'}} component={HomeScreen} />
      <Tab.Screen name="Drugs" options={{ title: 'Medicamentos' }} component={TopTabsNavigator} />
      <Tab.Screen name="Medical_appointments" options={{ title: 'Citas Medicas' }} component={Medical_appointments} />
      <Tab.Screen name="Vaccine_card" options={{ title: 'Tarjeta de Vacuna' }} component={Vaccine_card} />
    </Tab.Navigator>
  );
}

