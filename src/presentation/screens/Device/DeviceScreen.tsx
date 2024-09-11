import React from 'react'
import { Text, View } from 'react-native'
import { HamburgerMenu } from '../../components/shared/HamburgerMenu'
import { globalColors, globalStyles } from '../../theme/theme'

export const DeviceScreen = () => {
  return (
    <View style = {globalStyles.container}>
      <HamburgerMenu />
    </View>
  )
}
