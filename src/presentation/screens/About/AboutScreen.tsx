import React from 'react'
import { Pressable, Text, View } from 'react-native'
import { HamburgerMenu } from '../../components/shared/HamburgerMenu'
import { globalColors, globalStyles } from '../../theme/theme'
import { PrimaryButton } from '../../components/shared/PrimaryButton'
import { DrawerActions, useNavigation } from '@react-navigation/native'

export const AboutScreen = () => {

    const navigation = useNavigation();

    return (
        <View style={globalStyles.container}>
          <PrimaryButton 
          label='Menu'
          onPress={() => navigation.dispatch(DrawerActions.toggleDrawer)}
          />
        </View>
    )
}
