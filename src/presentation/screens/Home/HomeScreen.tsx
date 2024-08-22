import React, { useEffect } from 'react'
import { Text, View } from 'react-native'
import { globalColors, globalStyles } from '../../theme/theme'
import { PrimaryButton } from '../../components/shared/PrimaryButton'
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { RootStack } from '../../routes/StackNavigator'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { HamburgerMenu } from '../../components/shared/HamburgerMenu';

export const HomeScreen = () => {

    const navigation = useNavigation<NavigationProp<RootStack>>();
    const { top } = useSafeAreaInsets();


    return (
        <View style={globalStyles.container}>
            <Text>HomeScreen</Text>
            <HamburgerMenu
                IconName='person-outline'
                onPress={() => navigation.navigate("About")}
            />

        </View>
    )
}
