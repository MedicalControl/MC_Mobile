import { DrawerActions, StackActions, useNavigation } from '@react-navigation/native'
import React, { useEffect } from 'react'
import { Image, Pressable, Text } from 'react-native';
import { IonIcon } from './Ionicon';
import { globalColors } from '../../theme/theme';




export const Img_Picture = () => {
    const navigation = useNavigation();

    useEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <Image
                source={require('../../assets/Medi.jpeg')}
                style = {{width: 90, height: 30, right: 30}}
                />
            )
        })

    }, [])


    return (<></>);


}
