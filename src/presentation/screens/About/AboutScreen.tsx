import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { globalColors, globalStyles } from '../../theme/theme';
import { PrimaryButton } from '../../components/shared/PrimaryButton'
import { NavigationProp, StackActions, useNavigation } from '@react-navigation/native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { RootStack } from '../../routes/StackNavigator'
import { useWindowDimensions } from 'react-native'
import { IonIcon } from '../../components/shared/Ionicon';
import { SecondButton } from '../../components/SecondButton';



export const AboutScreen = () => {
    const { width, height } = useWindowDimensions();

    const navigation = useNavigation<NavigationProp<RootStack>>();
    const { top } = useSafeAreaInsets();

    return (
        <View style={globalStyles.container}>

            <View style={{
                ...style.blueBox,
                width: width * 0.9,
                height: height * 0.2
            }}>
            </View>
            <View style={style.container}>
                <IonIcon
                    name='help-circle-outline'
                    size={35}
                    color={'black'}
                />
                <Text style={style.title}>Ayuda y soporte técnico</Text>
            </View>


            <SecondButton
                onPress={() => navigation.navigate("Help_Desk")}
                label="Servicio de ayuda"
                style={{ backgroundColor: globalColors.primary }}
                name='information-circle-outline'
                size={20}
                color='black'
            />


            <SecondButton
                onPress={() => navigation.navigate("Report_problem")}
                label="Reportar un problema"
                style={{ backgroundColor: globalColors.primary }}
                name='alert-circle-outline'
                size={20}
                color='black'
            />
            <View style={style.container}>
                <IonIcon
                    name='settings-outline'
                    size={35}
                    color='black'
                />
                <Text style={style.title}>Configuación</Text>
            </View>
            <SecondButton
                onPress={() => navigation.navigate("Notification")}
                label="Notificaciones"
                style={{ backgroundColor: globalColors.primary }}
                name='notifications-outline'
                size={20}
                color='black'
            />
            <SecondButton
                onPress={() => navigation.dispatch(StackActions.popToTop)}
                label="Idioma y región"
                style={{ backgroundColor: globalColors.primary }}
                name='language-outline'
                size={20}
                color='black'
            />


            <SecondButton
                onPress={() => navigation.navigate("Device")}
                label="Modo oscuro"
                style={{ backgroundColor: globalColors.primary }}
                name='moon-outline'
                size={20}
                color='black'
            />

            <SecondButton
                onPress={() => navigation.navigate("Device")}
                label="Dispositivos"
                style={{ backgroundColor: globalColors.primary }}
                name='watch-outline'
                size={20}
                color='black'
            />

            <SecondButton
                onPress={() => navigation.dispatch(StackActions.popToTop)}
                label="Cerrar Sesión"
                style={{ backgroundColor: globalColors.danger}}
                name='exit-outline'
                size={20}
                color='black'
            />

        </View>
    )
}

const style = StyleSheet.create({


    blueBox: {
        backgroundColor: globalColors.primary,
        borderRadius: 10,
        height: '19%',
        marginBottom: 5,
        padding: 15,
        elevation: 5,
    },

    circle: {
        borderRadius: 50,
        color: globalColors.background
    },
    title: {
        fontSize: 25,
        fontWeight: 'bold'
    },
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,

    }
}


)
