import React from 'react'
import { Header } from '../../../components/shared/Header';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { globalColors } from '../../../theme/theme';
import { IonIcon } from '../../../components/shared/Ionicon';
import { Agent } from '../../MaterialBottom/agenda/agenda';
import { Medical } from '../../MaterialBottom/medicamentos/medica';
import { Result} from '../../MaterialBottom/resultados/resultados';

const Tab = createMaterialTopTabNavigator();

export const Control_Parental = () => {
    return (
        <>
            <Header />
            <Tab.Navigator

                sceneContainerStyle={{
                    backgroundColor: globalColors.background,
                }}
                screenOptions={{
                    tabBarActiveTintColor: globalColors.tertiary,
                    tabBarInactiveTintColor: globalColors.List_item,
                    tabBarIndicatorStyle: {
                        backgroundColor: globalColors.tertiary,
                        height: 3,
                    },
                    tabBarIconStyle: {
                        width: 25,
                    },
                    tabBarStyle: {
                        backgroundColor: globalColors.background,
                    },
                    tabBarLabelStyle: {
                        fontSize: 12,
                    },
                }}
            >
                <Tab.Screen name="agenda" options={{
                    title: 'Agenda',
                    tabBarIcon: ({ color }) => (
                        <IonIcon
                            name='calendar-clear-outline'
                            size={20}
                            color={color}
                        />
                    )
                }} component={Agent} />

                <Tab.Screen name="medicamentos" options={{
                    title: 'Medicamentos',
                    tabBarIcon: ({ color }) => (
                        <IonIcon
                            name='medkit-outline'
                            size={20}
                            color={color}
                        />
                    )
                }} component={Medical} />

                <Tab.Screen name="resultados" options={{
                    title: 'Resultados',
                    tabBarIcon: ({ color }) => (
                        <IonIcon
                            name='logo-buffer'
                            size={20}
                            color={color}
                        />
                    )
                }} component={Result} />
            </Tab.Navigator>
        </>
    );
}