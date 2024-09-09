import React from 'react'
import { Text, View } from 'react-native'
import { HamburgerMenu } from '../../components/shared/HamburgerMenu'
import { Img_Picture } from '../../components/shared/img_Picture'

export const LocationScreen = () => {
    return (
        <View> 
            <HamburgerMenu />
            <Img_Picture />
        </View>
    )
}
