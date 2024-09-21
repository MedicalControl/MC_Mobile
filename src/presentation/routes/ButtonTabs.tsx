import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeScreen } from '../screens/Home/HomeScreen';
import { globalColors } from '../theme/theme';
import { IonIcon } from '../components/shared/Ionicon';
import { AboutScreen } from '../screens/About/AboutScreen';
import { DrugsScreen } from '../screens/Drugs/DrugsScreen';
import { Medical_appointments } from '../screens/Medical appointments/Medical_appointments';
import { LocationScreen } from '../screens/Location/LocationScreen';
import { Vaccine_card } from '../screens/Vaccine_card/Vaccine_card';
import { View, Text, StyleSheet } from 'react-native';



const Tab = createBottomTabNavigator();

export function ButtonTabs_Navigator() {
  return (
    <Tab.Navigator
      sceneContainerStyle={{
        backgroundColor: globalColors.background
      }}

      screenOptions={{
        tabBarActiveTintColor: globalColors.primary,
        tabBarLabelStyle: {
          marginBottom: 5,

        },
        headerStyle: {
          elevation: 0,
          borderTopWidth: 0,
          borderBottomWidth: 0,  
          shadowColor: 'transparent', //adios linea 

        },
}}>
      <Tab.Screen name="home"
        options={{ title: 'casa', tabBarIcon: ({ color }) => (<IonIcon name="home-outline" size={20} color={color} />) }}
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
      <Tab.Screen
        name="Vaccine_card"
        component={Vaccine_card}
        options={{
          headerTitle: () => (
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Tarjeta de Vacunación</Text>
            </View>
          ),
          tabBarIcon: ({ color }) => (
            <IonIcon name="reader-outline" size={20} color={color} />
          ),
        }}
      />
      <Tab.Screen name="About"
        options={{ title: 'Perfil', tabBarIcon: ({ color }) => (<IonIcon name="person-circle-outline" size={20} color={color} />) }}
        component={AboutScreen} />

    </Tab.Navigator>
  );
}

