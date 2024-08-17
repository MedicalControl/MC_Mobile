import React from 'react'
import { Text, View } from 'react-native'
import { globalStyles } from '../../theme/theme'
import { PrimaryButton } from '../../components/shared/PrimaryButton'
import { useNavigation, type NavigationProp } from '@react-navigation/native'
import { type RootStack } from '../../routes/StackNavigator';

export const RegisterScreen_1 = () => {
    const navigation = useNavigation<NavigationProp<RootStack>>();

    return (
        <View style={globalStyles.container}>
            <PrimaryButton
                onPress={() => navigation.navigate('Register_2')}
                label='Siguiente'
            />
        </View>
    )
}
