import { BottomTabBarProps, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeScreen } from '../screens/Home/HomeScreen';
import { globalColors } from '../theme/theme';
import { Control_Parental } from '../screens/tabsScreens/Control_Parental/Control_Parental';
import { MyTabBar } from '../components/shared/TabBar';
import { TopTabsNavigator } from './TopTabsNavigator';
import { Medical_appointments } from '../screens/tabsScreens/Medical appointments/Medical_appointments';


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
      <Tab.Screen name="ControlParental" options={{ title: 'Control Parental' }} component={Control_Parental} />
    </Tab.Navigator>
  );
}

