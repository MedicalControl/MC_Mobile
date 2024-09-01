import React, { useState } from 'react'
import { Text, View } from 'react-native'
import { PrimaryButton } from '../../components/shared/PrimaryButton'
import { globalStyles } from '../../theme/theme'
import { type NavigationProp, useNavigation } from '@react-navigation/native'
import type {  RootStack } from '../../routes/StackNavigator'
import { TextInput } from 'react-native'

export const RegisterScreen_3 = () => {
    const navigation = useNavigation<NavigationProp<RootStack>>();
    const [inss, setInss] = useState('');
    const [sangre, setSangre] = useState('');
    const [sexo, setSexo] = useState('');
    const [name, setName] = useState('');
    const [tel, setTel] = useState('');
    
    
    return (
        <View style={globalStyles.container2}>

            <Text style={globalStyles.tittle}>Tercer Paso</Text>
            <Text style={globalStyles.label}>Numero de Inss</Text>

            <TextInput
                style={globalStyles.input}
                placeholder="Ingresa tu numero de inss"
                placeholderTextColor="#888"
                value={inss}
                onChangeText={text => setInss(text)}
            />
            <Text style={globalStyles.label2}>Tipo de Sangre</Text>
            <TextInput
                style={globalStyles.input2}
                placeholder="Ingresa tu tipo de sangre"
                placeholderTextColor="#888"
                value={sangre}
                onChangeText={text => setSangre(text)}
            />
            <Text style={globalStyles.label3}>Sexo</Text>
            <TextInput
                style={globalStyles.input3}
                placeholder="Ingresa sexo"
                placeholderTextColor="#888"
                value={sexo}
                onChangeText={text => setSexo(text)}
            />
            <Text style={globalStyles.label4}>Contacto de emergencia</Text>
            <TextInput
                style={globalStyles.input4}
                placeholder="Escribe nombre completo"
                placeholderTextColor="#888"
                value={name}
                onChangeText={text => setName(text)}
            />
    
            <PrimaryButton
                onPress={() => navigation.navigate("Register_4")}
                label='Siguiente'
            />
        </View>
    )
}
