import React from 'react'
import { Text, View } from 'react-native'
import { globalStyles } from '../../../theme/theme'
import { HamburgerMenu } from '../../../components/shared/Header'
import { PrimaryButton } from '../../../components/shared/PrimaryButton'
import { DrawerActions, useNavigation } from '@react-navigation/native'

export const SettingScreen = () => {

    const navigation = useNavigation();
    return (
        <View style={globalStyles.container}>
            <PrimaryButton
                label='Menu'
                onPress={() => navigation.dispatch(DrawerActions.toggleDrawer)
                }
            />
        </View>
    )
}
