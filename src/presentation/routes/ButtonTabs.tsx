import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeScreen } from '../screens/Home/HomeScreen';
import { globalColors } from '../theme/theme';
import { IonIcon } from '../components/shared/Ionicon';
import { AboutScreen } from '../screens/About/AboutScreen';
import { DrugsScreen } from '../screens/Drugs/DrugsScreen';
import { Medical_appointments } from '../screens/Medical appointments/Medical_appointments';
import { LocationScreen } from '../screens/Location/LocationScreen';
import { Vaccine_card } from '../screens/Vaccine_card/Vaccine_card';



const Tab = createBottomTabNavigator();

export function ButtonTabs_Navigator() {
  return (
    <Tab.Navigator
      sceneContainerStyle={{
        backgroundColor: globalColors.background
      }}

      screenOptions={{
        tabBarActiveTintColor: globalColors.tertiary,
        headerShown: true,
        tabBarLabelStyle: {
          marginBottom: 5,

        },
        headerStyle: {
          elevation: 0
        }

      }}
    >
      <Tab.Screen name="home"
        options={{ title: 'Casa', tabBarIcon: ({ color }) => (<IonIcon name="home-outline" size={20} color={color} />) }}
        component={HomeScreen} />
      <Tab.Screen name="Drugs"
        options={{ title: 'Medicamentos', tabBarIcon: ({ color }) => (<IonIcon name="medkit-outline" size={20} color={color} />) }}
        component={DrugsScreen} />
      <Tab.Screen name="Medical_appointments"
        options={{ title: 'Citas Medicas', tabBarIcon: ({ color }) => (<IonIcon name="calendar-outline" size={20} color={color} />) }}
        component={Medical_appointments} />
      <Tab.Screen name="Location"
        options={{ title: 'Mapa', tabBarIcon: ({ color }) => (<IonIcon name="location-outline" size={20} color={color} />) }}
        component={LocationScreen} />
      <Tab.Screen name="Vaccine_card"
        options={{ title: 'Tarjeta de Vacuna', tabBarIcon: ({ color }) => (<IonIcon name="reader-outline" size={20} color={color} />) }}
        component={Vaccine_card} />






    </Tab.Navigator>
  );
}


/*      <Tab.Screen name="Home"
        options={{ title: 'casa', tabBarIcon: ({ color }) => (<IonIcon name="home-outline" size={20} color={color} />) }}
        component={HomeScreen} /> */