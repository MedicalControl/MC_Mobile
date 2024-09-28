import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeScreen } from '../screens/Home/HomeScreen';
import { globalColors } from '../theme/theme';
import { DrugsScreen } from '../screens/Drugs/DrugsScreen';
import { Medical_appointments } from '../screens/Medical appointments/Medical_appointments';
import { Vaccine_card } from '../screens/Vaccine_card/Vaccine_card';
import { MyTabBar } from '../components/shared/TabBar';


const Tab = createBottomTabNavigator();



export function ButtonTabs_Navigator() {
  return (
    <Tab.Navigator
      tabBar={props => <MyTabBar {...props} />}
      
      sceneContainerStyle={{
        backgroundColor: globalColors.background
      }}
    >
      <Tab.Screen name="home" options={{ title: 'Inicio'}} component={HomeScreen} />
      <Tab.Screen name="Drugs" options={{ title: 'Medicamentos' }} component={DrugsScreen} />
      <Tab.Screen name="Medical_appointments" options={{ title: 'Citas Medicas' }} component={Medical_appointments} />
      <Tab.Screen name="Vaccine_card" options={{ title: 'Tarjeta de Vacuna' }} component={Vaccine_card} />
    </Tab.Navigator>
  );
}

