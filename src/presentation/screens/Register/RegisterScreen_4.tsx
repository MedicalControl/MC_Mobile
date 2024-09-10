import React, { useState } from 'react'
import { Text, View, Image } from 'react-native'
import { globalStyles } from '../../theme/theme';
import { PrimaryButton } from '../../components/shared/PrimaryButton'
import { type NavigationProp, useNavigation } from '@react-navigation/native'
import type { RootStack } from '../../routes/StackNavigator'
import { TextInput, StyleSheet } from 'react-native'
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Picker } from '@react-native-picker/picker';


//poniendo icons navegacion

export const RegisterScreen_4 = () => {
    const navigation = useNavigation<NavigationProp<RootStack>>();
    const [sex, setSex] = useState('');

    return (
        <View style={globalStyles.container2}>
            <Image
                source={require('../Register/rectan.png')}
                style={styles.logo}
                resizeMode='contain'
            />
            <Icon name="chevron-back" size={25} color="black" style={styles.icon}
                onPress={() => navigation.navigate('Register_3')} />
            <Text style={globalStyles.tittle}>Cuarto Paso</Text>
            <Text style={styles.label}>Sexualidad</Text>
            <View style={styles.container}>
                <Picker
                    selectedValue={sex}
                    style={styles.picker}
                    onValueChange={(itemValue) => setSex(itemValue)}
                >
              
                <Picker.Item label="Heterosexual" value="heterosexual" />
                <Picker.Item label="Homosexual" value="homosexual" />
                <Picker.Item label="Bisexual" value="bisexual" />
                
            </Picker>
            </View>
            <Text style={globalStyles.label2}>Imagen</Text>
            <TouchableOpacity style={globalStyles.opc}>
                <Icon name="share-outline" size={27} color="white" style={styles.icon1} />
                <Text style={globalStyles.opcText}>Sube tu imagen aqui</Text>
            </TouchableOpacity>

            <Image
                source={require('../Register/rectan.png')}
                style={styles.logo2}
                resizeMode='contain'
            />

            <PrimaryButton
                onPress={() => navigation.navigate("Home")}
                label='Guardar'
            />
        </View>
    )
}
const styles = StyleSheet.create({
    //icono de arriba con navegacion
    container: {
    
        justifyContent: 'center', // Centra verticalmente
        alignItems: 'center',     // Centra horizontalmente
    },
    icon: {
        marginTop: 11,
        position: 'absolute',
        left: 0,
        top: 14,
    },
    icon1: {
        marginTop: 11,
        position: 'absolute',
        left: 160,
        top: 10,
    },
    logo: {
        width: 500,
        height: 500,
        alignSelf: 'center',
        position: 'absolute',
        marginTop: -270,
        top: 10,
        transform: [{ rotate: '-13deg' }],
    },
    logo2: {

        width: 500,
        height: 530,
        alignSelf: 'center',
        position: 'absolute',
        marginTop: 630,
        top: 10,
        transform: [{ rotate: '-9deg' }],
    },
    picker: {
        height: 40,
        width: '80%', 
        color: '#000',
        fontSize: 14,
        left:-110
    },
    label:{
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 40,
        left: 38
    },
});