import React, { useState } from 'react'
import { Text, View, StyleSheet } from 'react-native';
import { PrimaryButton } from '../../components/shared/PrimaryButton'
import { globalStyles } from '../../theme/theme'
import { type NavigationProp, useNavigation } from '@react-navigation/native'
import type { RootStack } from '../../routes/StackNavigator'
import { TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Alert } from 'react-native';

//en este uso mis propios estilos debido a la diferencia!!!
//añadimos iconos hoy
export const RegisterScreen_3 = () => {
    const navigation = useNavigation<NavigationProp<RootStack>>();
    const [inss, setInss] = useState('');
    const [sangre, setSangre] = useState('');
    const [sexo, setSexo] = useState('');
    const [name, setName] = useState('');
    const [tel, setTel] = useState('');
    const [par, setPar] = useState('');
    const handleTelefonoChange = (text: string) => {

        const formattedText = text.replace(/[^0-9]/g, '');

        setTel(formattedText);

        if (formattedText.length > 8) {
            Alert.alert('Número demasiado largo', 'El número de teléfono debe tener 8 dígitos.');
        }
    };



    return (
        <View style={styles.container}>
            <Icon name="chevron-back" size={25} color="black" style={styles.icon}
                onPress={() => navigation.navigate('Register_2')} />
            <Text style={styles.tittle}>Tercer Paso</Text>
            <Text style={styles.label}>Numero de Inss</Text>

            <TextInput
                style={styles.input}
                placeholder="Ingresa tu numero de inss"
                placeholderTextColor="#888"
                value={inss}
                onChangeText={text => setInss(text)}
            />

            <View style={styles.horizontalGroup}>
                <View style={styles.fieldContainer}>
                    <Text style={styles.label2}>Tipo de Sangre</Text>
                    <TextInput
                        style={styles.input2}
                        placeholder="Ingresa tu tipo de sangre"
                        placeholderTextColor="#888"
                        value={sangre}
                        onChangeText={text => setSangre(text)}
                    />
                </View>
                <View style={styles.fieldContainer}>
                    <Text style={styles.label3}>Sexo</Text>
                    <TextInput
                        style={styles.input3}
                        placeholder="Ingresa sexo"
                        placeholderTextColor="#888"
                        value={sexo}
                        onChangeText={text => setSexo(text)}
                    />
                </View>
            </View>

            <Text style={styles.label4}>Contacto de emergencia</Text>
            <Text style={styles.contact}>Nombre completo:</Text>
            <TextInput
                style={styles.input4}
                placeholder="Escribe nombre completo"
                placeholderTextColor="#888"
                value={name}
                onChangeText={text => setName(text)}
            />
            <Text style={styles.tel}>Telefono</Text>
            <TextInput
                style={styles.input5}
                placeholder="Escribe numero de telefono"
                placeholderTextColor="#888"
                value={tel}
                onChangeText={handleTelefonoChange}
                maxLength={8}
                keyboardType="numeric"
            />
            <Text style={styles.parentesco}>Parentesco</Text>
            <TextInput
                style={styles.input6}
                placeholder="Escriba  el parentesco"
                placeholderTextColor="#888"
                value={par}
                onChangeText={text => setPar(text)}
            />


            <PrimaryButton
                onPress={() => navigation.navigate("Register_4")}
                label='Siguiente'
            />
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#ffff",
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingHorizontal: 20,
        marginTop: 10,

    },
    horizontalGroup: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        maxWidth: 350,
        marginVertical: 30, // Mayor separación vertical
    },
    fieldContainer: {
        flex: 1,
        marginHorizontal: 10,
    },
    label: {
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 20,
        marginBottom: 15,
        left: -110,
    },
    label2: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    label3: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    contact: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 10,
        left: -100,
    },
    tel: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 10,
        left: -120,
    },
    parentesco: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 15,
        left: -120,
    },
    label4: {
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 60,
        marginBottom: 20, // Más cerca del último input
    },
    input: {
        height: 40,
        borderBottomWidth: 1,
        borderBottomColor: '#000',
        fontSize: 16,
        paddingHorizontal: 10,
        marginBottom: 40,
        width: 350,
    },
    input2: {
        height: 40,
        borderBottomWidth: 1,
        borderBottomColor: '#000',
        fontSize: 16,
        marginBottom: 40,
        width: 150,
    },
    input3: {
        height: 40,
        borderBottomWidth: 1,
        borderBottomColor: '#000',
        fontSize: 16,
        marginBottom: 40,
        width: 150,
    },
    input4: {
        height: 40,
        borderBottomWidth: 1,
        borderBottomColor: '#000',
        fontSize: 16,
        paddingHorizontal: 10,
        marginBottom: 40,
        width: 350,
    },
    input5: {
        height: 40,
        borderBottomWidth: 1,
        borderBottomColor: '#000',
        fontSize: 16,
        paddingHorizontal: 10,
        marginBottom: 40,
        width: 350,
    },
    input6: {
        height: 40,
        borderBottomWidth: 1,
        borderBottomColor: '#000',
        fontSize: 16,
        paddingHorizontal: 10,
        marginBottom: 40,
        width: 350,
    },
    tittle: {
        fontSize: 25,
        fontWeight: 'bold',
        marginBottom: 30,
        left: -110,
    },
    icon: {
        marginTop: 11,
        position: 'absolute',
        left: 6,
        top: -7,
    },
});

