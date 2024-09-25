import React, { useEffect } from 'react'
import { Pressable, Text, View } from 'react-native'
import { globalColors, globalStyles } from '../../theme/theme'
import { PrimaryButton } from '../../components/shared/PrimaryButton'
import { DrawerActions, NavigationContainerProps, StackActions, useNavigation, NavigationProp } from '@react-navigation/native';
import { HamburgerMenu } from '../../components/shared/HamburgerMenu';
import { RootStack } from '../../routes/StackNavigator'

export const HomeScreen = () => {

    const navigation = useNavigation<NavigationProp<RootStack>>();

    return (
        <View style={globalStyles.container}>
        </View>
    )
}
