import React from 'react'
import { View, Text, Pressable } from 'react-native'
import { globalStyles } from '../../theme/theme'
import { NavigationProp, useNavigation } from '@react-navigation/native'
import { PrimaryButton } from '../../components/shared/PrimaryButton'
import type { RootStack } from '../../routes/StackNavigator'

export const LoginScreen = () => {

  const navigation = useNavigation<NavigationProp<RootStack>>();

  return (
    <View style={globalStyles.container}>
      <PrimaryButton
        onPress={() => navigation.navigate("Home")}
        label='Acceder'
      />
      <PrimaryButton
        onPress={() => navigation.navigate("Register_1")}
        label='Regístrase'
      />
    </View>
  )
}
