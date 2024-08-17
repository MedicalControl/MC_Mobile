import React from 'react'
import { Text, View } from 'react-native'
import { globalStyles } from '../../theme/theme'
import { PrimaryButton } from '../../components/shared/PrimaryButton'
import { type NavigationProp, useNavigation } from '@react-navigation/native'
import type { RootStack } from '../../routes/StackNavigator'

export const RegisterScreen_2 = () => {
  const navigation = useNavigation<NavigationProp<RootStack>>();
  return (
    <View style={globalStyles.container}>
      <PrimaryButton
      onPress={() => navigation.navigate("Register_3")}
      label='Siguiente'
      />
    </View>
  )
}
