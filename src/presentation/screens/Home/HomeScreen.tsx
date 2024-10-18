import { Pressable, StyleSheet, Text, View } from 'react-native'
import { globalColors, globalStyles } from '../../theme/theme';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { RootStack } from '../../routes/StackNavigator'
import { Header } from '../../components/shared/Header';
import { SecondButton, SecondButton_home } from '../../components/shared/SecondButton';
import { useSafeAreaInsets } from 'react-native-safe-area-context';



export const HomeScreen = () => {

    const navigation = useNavigation<NavigationProp<RootStack>>();
    const { top } = useSafeAreaInsets();
    const name = 'Melanie Arias';


    return (
        <View style={globalStyles.container}>
            <Header />
            <Text style={globalStyles.Text_Style}>Bienvenida,</Text>
            <Text style={globalStyles.Text_Style}>{name}</Text>
            <Text style={{ marginVertical: 30, fontSize: 30, color: globalColors.tertiary, fontWeight: 'bold', marginHorizontal: 5 }}>Actividad Diaria</Text>
            <View style={{ flexDirection: 'row', alignItems: 'stretch', marginHorizontal: 5, justifyContent: 'space-between' }}>
                <SecondButton
                    Title='Pasos'
                    label='100'
                    name='footsteps-sharp'
                    style={{ width: '40%', backgroundColor: globalColors.background }}
                    color={globalColors.success}
                    label_2='Meta 10.000 pasos'

                />
                <SecondButton_home
                    Title='Ejercicio'
                    label='0:30 hr'
                    name='alarm-outline'
                    style={{ width: '40%', backgroundColor: globalColors.background }}
                    color='#EC9F48'
                    name_2='flame'
                    color_2='#EC9F48'
                    label_2='248 cal'
                />
            </View>
            <Text style={{ fontSize: 30, fontWeight: 'bold', marginHorizontal: 5 }}>Wearable device</Text>
            <View style={{ flexDirection: 'row', padding: 4, marginHorizontal: 5 }}>
                <Text>No hay dispositivos conectados</Text>
            </View>
        </View>
    )
}

