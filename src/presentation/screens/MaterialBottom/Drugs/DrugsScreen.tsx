import React from 'react'
import { ScrollView, Text, View, Dimensions } from 'react-native'
import { Header } from '../../../components/shared/Header';
import { ThreeButton } from '../../../components/shared/ThreeButton';
import { StyleSheet } from 'react-native';
import { Notification } from '../../SideBarMenu/Notification/Notification';
import * as Notifications from 'expo-notifications'

const {width, height} = Dimensions.get('window');

const arr = [
    {
        name: "Acetominafen",
        frecuency: 8,
        dose: "5 dosis mg"
    },
    {
        name: "Malta",
        frecuency: 8,
        dose: "10 dosis mg"
    },
    {
        name: "Ibuprofeno",
        frecuency: 6,
        dose: "15 dosis mg"
    },
    {
        name: "Paracetamol",
        frecuency: 12,
        dose: "20 dosis mg"
    },
    {
        name: "Amoxicilina",
        frecuency: 8,
        dose: "500 mg"
    },
    {
        name: "Loratadina",
        frecuency: 24,
        dose: "10 mg"
    },
    {
        name: "Metformina",
        frecuency: 12,
        dose: "850 mg"
    },
    {
        name: "Omeprazol",
        frecuency: 24,
        dose: "40 mg"
    },
    {
        name: "Clorfenamina",
        frecuency: 6,
        dose: "4 mg"
    },
    {
        name: "Prednisona",
        frecuency: 12,
        dose: "20 mg"
    },
    {
        name: "Enalapril",
        frecuency: 24,
        dose: "10 mg"
    },
    {
        name: "Losartan",
        frecuency: 24,
        dose: "50 mg"
    }
];

export const DrugsScreen = () => {

    


    return (
        <ScrollView>
            <Header />
            {
                arr.map((i, index) => (
                    <View
                        key={`${i.name}-${index}`}
                        style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <ThreeButton
                            medication_name={i.name}
                            frecuency={i.frecuency}
                            dose={i.dose}
                            name_2='alarm-outline'
                            size_2={25}
                            color_2='black'
                        />
                    </View>
                ))
            }
        </ScrollView>
    )
}
