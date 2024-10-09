import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import React from 'react';
import { Header } from '../components/shared/Header';
import { BuyScreen } from '../screens/MaterialBottom/Buy_Drug/BuyScreen';
import { SearchScreen } from '../screens/MaterialBottom/Search_Drug/SearchScreen';
import { globalColors } from '../theme/theme';
import { IonIcon } from '../components/shared/Ionicon';
import { DrugsScreen } from '../screens/MaterialBottom/Drugs/DrugsScreen';


const Tab = createMaterialTopTabNavigator();

export const TopTabsNavigator = () => {
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
                <Tab.Screen name="Drug" options={{
                    title: 'Medicamentos',
                    tabBarIcon: ({ color }) => (
                        <IonIcon
                            name='medkit'
                            size={20}
                            color={color}
                        />
                    )
                }} component={DrugsScreen} />
                <Tab.Screen name="Search"
                    options={{
                        title: "Buscar",
                        tabBarIcon: ({ color }) => (
                            <IonIcon name="search-sharp" size={20} color={color} />
                        ),
                    }}

                    component={SearchScreen} />
                <Tab.Screen name="Buy"
                    options={{
                        title: 'Comprar',
                        tabBarIcon: ({ color }) => (
                            <IonIcon name='cart' size={20} color={color} />
                        )
                    }}
                    component={BuyScreen} />

            </Tab.Navigator>
        </>

    );
}