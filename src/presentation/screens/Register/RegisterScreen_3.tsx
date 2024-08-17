import React from 'react'
import { Text, View } from 'react-native'
import { PrimaryButton } from '../../components/shared/PrimaryButton'
import { globalStyles } from '../../theme/theme'
import { type NavigationProp, useNavigation } from '@react-navigation/native'
import type {  RootStack } from '../../routes/StackNavigator'

export const RegisterScreen_3 = () => {
    const navigation = useNavigation<NavigationProp<RootStack>>();
    return (
        <View style={globalStyles.container}>
            <PrimaryButton
                onPress={() => navigation.navigate("Home")}
                label='Submit'
            />
        </View>
    )
}
