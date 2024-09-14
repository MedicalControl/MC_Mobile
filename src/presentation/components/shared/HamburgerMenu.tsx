import { DrawerActions, StackActions, useNavigation } from '@react-navigation/native'
import React, { useEffect } from 'react'
import { Pressable, Text } from 'react-native';
import { IonIcon } from './Ionicon';
import { globalColors } from '../../theme/theme';




export const HamburgerMenu = () => {
    const navigation = useNavigation();

    useEffect(() => {
        navigation.setOptions({
            headerLeft: () => (
                <Pressable 
                style = {{marginLeft : 15}}
                onPress={() => navigation.dispatch(DrawerActions.toggleDrawer)}>
                    <IonIcon
                        name='menu-outline'
                        color= {globalColors.tertiary}
                        size={30}
                    />
                </Pressable>
            )
        })

    }, [])


    return (<></>);


}
