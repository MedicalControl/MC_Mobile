import React, { useState } from 'react'
import { Text, View, StyleSheet, TextInput } from 'react-native'
import { globalStyles } from '../../theme/theme';
import { PrimaryButton } from '../../components/shared/PrimaryButton'
import { useNavigation, type NavigationProp } from '@react-navigation/native'
import { type RootStack } from '../../routes/StackNavigator';

export const RegisterScreen_1 = () => {
    const navigation = useNavigation<NavigationProp<RootStack>>();
    const [nombres, setNombres] = useState('');
    const [apellidos, setApellidos] = useState('');
    const [cedula, setCedula] = useState('');
    const [telefono, setTelefono] = useState('');

    return (
        <View style={globalStyles.container2}>
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
                onChangeText={text => setCedula(text)}
            />
            <Text style={globalStyles.label4}>Telefono</Text>
            <TextInput
                style={globalStyles.input4}
                placeholder="Ingresa tu numero de telefono"
                placeholderTextColor="#888"
                value={telefono}
                onChangeText={text => setTelefono(text)}
            />

            <PrimaryButton
                onPress={() => navigation.navigate('Register_2')}
                label='Siguiente'
            />
        </View>
    )
}

