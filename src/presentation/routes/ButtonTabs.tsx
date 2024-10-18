
import { HomeScreen } from '../screens/Home/HomeScreen';
import { globalColors } from '../theme/theme';
import { MyTabBar } from '../components/shared/TabBar';
import { Medical_appointments } from '../screens/tabsScreens/Medical appointments/Medical_appointments';
import { DrugsScreen } from '../screens/MaterialBottom/Drugs/DrugsScreen';
import { TopTabsNavigator } from './TopTabsNavigator';
import { createBottomTabNavigator, BottomTabBarProps } from '@react-navigation/bottom-tabs';

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
      <Tab.Screen name="Drugs" options={{ title: 'Medicamentos' }} component={DrugsScreen} />
      <Tab.Screen name="Medical_appointments" options={{ title: 'Citas Medicas' }} component={Medical_appointments} />
      <Tab.Screen name="ControlParental" options={{ title: 'Control Parental' }} component={TopTabsNavigator} />
    </Tab.Navigator>
  );
}
