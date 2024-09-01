import React, { useState } from 'react'
import { Text, View, StyleSheet, TextInput } from 'react-native'
import { globalStyles } from '../../theme/theme';
import { PrimaryButton } from '../../components/shared/PrimaryButton'
import { useNavigation, type NavigationProp } from '@react-navigation/native'
import { type RootStack } from '../../routes/StackNavigator';
import Icon from 'react-native-vector-icons/Ionicons';
import { Alert } from 'react-native';

//se añadio iconos hoy
//listop

export const RegisterScreen_1 = () => {
    const navigation = useNavigation<NavigationProp<RootStack>>();
    const [nombres, setNombres] = useState('');
    const [apellidos, setApellidos] = useState('');
    const [telefono, setTelefono] = useState('');
    const [cedula, setCedula] = useState('');

        const handleCedulaChange = (text: string) => {
            
            const formattedText = text.replace(/[^a-zA-Z0-9-]/g, '');

            
            setCedula(formattedText);

            
            const regex = /^[a-zA-Z]{4}-\d{6}-\d{4}$/;
            if (formattedText.length === 17 && !regex.test(formattedText)) {
                Alert.alert('Formato incorrecto', 'Por favor, ingresa una cédula en el formato 000-000000-0000.');
            }
        };
    const handleTelefonoChange = (text: string) => {
        
        const formattedText = text.replace(/[^0-9]/g, '');

        
        setTelefono(formattedText);

     
        if (formattedText.length > 8) {
            Alert.alert('Número demasiado largo', 'El número de teléfono debe tener 8 dígitos.');
        }
    };

    return (
        <View style={globalStyles.container2}>
            <Icon name="chevron-back" size={25} color="black" style={styles.icon}
            onPress={() => navigation.navigate('Login')} />
            <Text style={globalStyles.tittle}>Primer Paso</Text>
            <Text style={globalStyles.label}>Nombres</Text>

            <TextInput
                style={globalStyles.input}
                placeholder="Ingresa tus nombres"
                placeholderTextColor="#888"
                value={nombres}
                onChangeText={text => setNombres(text)}
            />
            <Text style={globalStyles.label2}>Apellidos</Text>
            <TextInput
                style={globalStyles.input2}
                placeholder="Ingresa tus apellidos"
                placeholderTextColor="#888"
                value={apellidos}
                onChangeText={text => setApellidos(text)}
            />
            <Text style={globalStyles.label3}>Cedula</Text>
            <TextInput
                style={globalStyles.input3}
                placeholder="Ingresa tu numero de cedula"
                placeholderTextColor="#888"
                value={cedula}
                onChangeText={handleCedulaChange}
                maxLength={17} 
            />
            <Text style={globalStyles.label4}>Telefono</Text>
            <TextInput
                style={globalStyles.input4}
                placeholder="Ingresa tu numero de telefono"
                placeholderTextColor="#888"
                value={telefono}
                onChangeText={handleTelefonoChange}
                maxLength={8}
                keyboardType="numeric" 
            />

            <PrimaryButton
                onPress={() => navigation.navigate('Register_2')}
                label='Siguiente'
            />
        </View>
    )
}
const styles=StyleSheet.create({
//icono de arriba con navegacion
icon:{
        marginTop: 11,
        position: 'absolute',
        left: 0,
        top: 14,  
},
});
