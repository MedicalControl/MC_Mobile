import { DrawerActions, StackActions, useNavigation } from '@react-navigation/native'
import React, { useEffect } from 'react'
import { Pressable, Text } from 'react-native';
import { IonIcon } from './Ionicon';
import { globalColors } from '../../theme/theme';


interface Props {
    onPress: () => void;
    IconName: string

}

export const HamburgerMenu = ({ onPress, IconName }: Props) => {
    const navigation = useNavigation();
    useEffect(() => {
        navigation.setOptions({
            headerLeft: () =>
            (
                <Pressable
                    style={{
                        position: 'absolute',
                        marginLeft: 360,
                    }}
                    onPress={() => onPress()}>
                    <IonIcon
                        name= {IconName}
                        size={30}
                        color={globalColors.primary}
                    />
                </Pressable>
            )
        });
    }, []);


    return (<></>);


}
