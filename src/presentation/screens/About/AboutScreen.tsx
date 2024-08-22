import React from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'
import { HamburgerMenu } from '../../components/shared/HamburgerMenu'
import { globalColors, globalStyles } from '../../theme/theme';
import { PrimaryButton } from '../../components/shared/PrimaryButton'
import { DrawerActions, NavigationProp, StackActions, useNavigation } from '@react-navigation/native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { RootStack } from '../../routes/StackNavigator'
import { useWindowDimensions } from 'react-native'
import { IonIcon } from '../../components/shared/Ionicon';


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

            <PrimaryButton
                onPress={() => navigation.navigate("Help_Desk")}
                label='Servicio de Ayuda'
            />


            <PrimaryButton
                onPress={() => navigation.navigate("Report_problem")}
                label='Reportar un problema'
            />
            <View style={style.container}>
                <IonIcon
                    name='settings-outline'
                    size={35}
                    color='black'
                />
                <Text style={style.title}>Configuación</Text>
            </View>
            <PrimaryButton
                onPress={() => navigation.navigate("Notification")}
                label='Notifiaciones'
            />
            <PrimaryButton
                onPress={() => navigation.navigate("Dark")}
                label='Modo Oscuro'
            />
            <PrimaryButton
                onPress={() => navigation.navigate("Help_Desk")}
                label='Dispositvo'
            />
            <PrimaryButton
                onPress={() => navigation.dispatch(StackActions.popToTop())}
                label='Cerrar Sesión'
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
