import React from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'
import { HamburgerMenu } from '../../components/shared/HamburgerMenu'
import { globalColors, globalStyles } from '../../theme/theme'
import { PrimaryButton } from '../../components/shared/PrimaryButton'
import { DrawerActions, NavigationProp, useNavigation } from '@react-navigation/native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { RootStack } from '../../routes/StackNavigator'

export const AboutScreen = () => {

    const navigation = useNavigation<NavigationProp<RootStack>>();
    const { top } = useSafeAreaInsets();

    return (
        <View style={globalStyles.container}>
            <Text style={{ fontSize: 35, marginTop: top + 20 }}>Menu</Text>
            <PrimaryButton
                label='Servicio de Ayuda'
                onPress={() => navigation.navigate('Help_Desk')}
            />
            <PrimaryButton
                label='Reportar un problema'
                onPress={() => navigation.navigate('Report_problem')}
            />
        </View>
    )
}

const style = StyleSheet.create({


})
