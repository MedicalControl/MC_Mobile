import { Pressable, Text, View } from 'react-native'
import { globalStyles } from '../../theme/theme'
import { useNavigation, NavigationProp, DrawerActions } from '@react-navigation/native';
import { RootStack } from '../../routes/StackNavigator'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { HamburgerMenu } from '../../components/shared/HamburgerMenu';
import { useEffect } from 'react';
import { Img_Picture } from '../../components/shared/img_Picture';


export const HomeScreen = () => {

    const navigation = useNavigation<NavigationProp<RootStack>>();
    const { top } = useSafeAreaInsets();


    return (
        <View style={globalStyles.container}>
            <HamburgerMenu />
            <Img_Picture />
            <Text>HomeScreen</Text>
        </View>
    )
}
