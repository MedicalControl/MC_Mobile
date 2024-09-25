import React, { useState } from 'react'
import { Text, View, StyleSheet, TextInput, Image, TouchableOpacity } from 'react-native'
import { globalStyles } from '../../theme/theme';
import { PrimaryButton } from '../../components/shared/PrimaryButton'
import { useNavigation, type NavigationProp } from '@react-navigation/native'
import { type RootStack } from '../../routes/StackNavigator';
import Icon from 'react-native-vector-icons/Ionicons';
import { Alert } from 'react-native';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';

//quitar titulo y logos (listo)
//cambiar icono de atras (listo)
//cambiar estilo inputs 
//cambiar estructura en si de los inputs
//añadir texto arribaa (listo)
//poner espacio de foto en borde punteado(listo)
//modificar boton(listo)

interface IFormInput {
    nombres: string;
    apellidos: string;
    password: string;
    gmail: string;
    inss: string;
}

export const RegisterScreen_1 = () => {
    const { control, handleSubmit, formState: { errors } } = useForm<IFormInput>();
    const navigation = useNavigation<NavigationProp<RootStack>>();

    const onSubmit = (_data: any) => {
        // Navegar a register_2 solo si no hay errores
        if (Object.keys(errors).length === 0) {
            navigation.navigate('Register_2');
        }
    };
    //__________________________________________________________________________________________________________________________________
    return (
        <View style={styles.container}>


            <Icon name="arrow-back-circle-sharp" size={25} color="#616161" style={styles.icon}
                onPress={() => navigation.navigate('Login')} />
            <Text style={globalStyles.tittle}>¡Bienvenido a</Text>
            <Text style={globalStyles.tittle2}>Medical control!</Text>
            <Text style={globalStyles.tittle3}>Por favor, proporcióna algunos datos</Text>
            <Text style={globalStyles.tittle4}>personales para empezar a cuidar de tu </Text>
            <Text style={globalStyles.tittle5}>salud.</Text>

            <TouchableOpacity style={styles.button}>
                <Icon name="images-outline" size={29} color="#545454" style={styles.icon2} />
                <Text style={styles.buttonText}>Agregar foto de perfil</Text>
            </TouchableOpacity>

            <Text style={styles.label}>Nombres</Text>

            <Controller
                control={control}
                name="nombres"
                rules={{
                    required: 'El nombre es obligatorio',
                    pattern: {
                        value: /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/,
                        message: 'El nombre solo puede contener letras',
                    },
                    maxLength: {
                        value: 17,
                        message: 'El nombre no puede tener más de 17 caracteres',
                    },
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                    <View style={styles.container}>

                        <TextInput
                            style={styles.input}
                            placeholder="Ingresa tu nombre"
                            placeholderTextColor="#888"
                            onBlur={onBlur}
                            onChangeText={(text) => {
                                const filteredText = text.replace(/[^A-Za-zÁÉÍÓÚáéíóúÑñ\s]/g, '');
                                onChange(filteredText);
                            }}
                            value={value}
                            autoCapitalize="words"
                            maxLength={17}
                        />
                        {errors.nombres && (
                            <Text style={styles.errorText}>{errors.nombres.message}</Text>
                        )}
                    </View>
                )}
            />



            <Text style={styles.label2}>Apellidos</Text>
            <Controller
                control={control}
                name="apellidos"
                rules={{
                    required: 'El apellido es obligatorio',
                    pattern: {
                        value: /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/,
                        message: 'El apellido solo puede contener letras',
                    },
                    maxLength: {
                        value: 25,
                        message: 'El apellido no puede tener más de 25 caracteres',
                    },
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                    <View style={styles.container}>
                        <TextInput
                            style={styles.input2}
                            placeholder="Ingresa tus apellidos"
                            placeholderTextColor="#888"
                            onBlur={onBlur}
                            onChangeText={(text) => {
                                const filteredText = text.replace(/[^A-Za-zÁÉÍÓÚáéíóúÑñ\s]/g, '');
                                onChange(filteredText);
                            }}
                            value={value}
                            autoCapitalize="words"
                            maxLength={25}
                        />
                        {errors.apellidos && (
                            <Text style={styles.errorText}>{errors.apellidos.message}</Text>
                        )}
                    </View>
                )}
            />
            <Text style={styles.label3}>Email</Text>
            <Controller
                control={control}
                name="gmail"
                rules={{
                    required: 'El gmail es obligatorio',
                    pattern: {
                        value: /^[A-Za-z0-9._-]+@gmail\.com$/,
                        message: 'El gmail debe ser un correo válido de Gmail.',
                    },
                    maxLength: {
                        value: 30,
                        message: 'El gmail no puede tener más de 25 caracteres.',
                    },
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                    <View style={styles.container}>
                        <TextInput
                            style={styles.input3}
                            placeholder="Ingresa tu correo"
                            placeholderTextColor="#888"
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                            autoCapitalize="none"
                            maxLength={30}
                        />
                        {errors.gmail && (
                            <Text style={styles.errorText}>{errors.gmail.message}</Text>
                        )}
                    </View>
                )}
            />




            <Text style={styles.label4}>Contraseña</Text>

            <Controller
                control={control}
                name="password"
                rules={{
                    required: 'La contraseña es obligatoria',
                    pattern: {
                        value: /^[A-Za-z0-9]+$/,
                        message: 'La contraseña solo puede tener letras y números, sin espacios',
                    },
                    minLength: {
                        value: 8,
                        message: 'La contraseña debe tener al menos 8 caracteres',
                    },
                    maxLength: {
                        value: 16,
                        message: 'La contraseña no puede tener más de 16 caracteres',
                    },
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                    <View style={styles.container}>
                        <TextInput
                            style={styles.input4}
                            placeholder="Ingresa tu contraseña"
                            placeholderTextColor="#888"
                            onBlur={onBlur}
                            onChangeText={(text) => {
                                const sanitizedText = text.replace(/\s/g, '');
                                onChange(sanitizedText);
                            }}
                            value={value}
                            autoCapitalize="none"
                            maxLength={16}
                            secureTextEntry
                        />
                        {errors.password && (
                            <Text style={styles.errorText}>{errors.password.message}</Text>
                        )}
                    </View>
                )}
            />
            <Text style={styles.label5}>No.Inss</Text>
            <Controller
                control={control}
                name="inss"
                rules={{
                    required: 'El número INSS es obligatorio',
                    pattern: {
                        value: /^[0-9]{3}-[0-9]{5}-[0-9]{3}$/,
                        message: 'El número INSS debe tener el formato XXX-XXXXX-XXX',
                    },
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                    <View style={styles.container}>
                        <TextInput
                            style={styles.input5}
                            placeholder="Ingresa tu número INSS"
                            placeholderTextColor="#888"
                            onBlur={() => {
                                onBlur();

                                if (!/^[0-9]{3}-[0-9]{5}-[0-9]{3}$/.test(value)) {

                                    onChange('');
                                }
                            }}
                            onChangeText={(text) => {

                                const filteredText = text.replace(/[^0-9]/g, '');


                                if (filteredText.length <= 3) {
                                    onChange(filteredText);
                                } else if (filteredText.length <= 8) {
                                    onChange(`${filteredText.slice(0, 3)}-${filteredText.slice(3)}`);
                                } else if (filteredText.length <= 11) {
                                    onChange(`${filteredText.slice(0, 3)}-${filteredText.slice(3, 8)}-${filteredText.slice(8)}`);
                                }
                            }}
                            value={value}
                            maxLength={13}
                            keyboardType="numeric"
                        />
                        {errors.inss && (
                            <Text style={styles.errorText}>{errors.inss.message}</Text>
                        )}
                    </View>
                )}
            />



            <PrimaryButton
                onPress={handleSubmit(onSubmit)}
                label='Siguiente'
            />
        </View>
    )
}
//______________________________________________________________________________________________________________________
//RECORDA SUBIR ESTOS COMPONENTES!
const styles = StyleSheet.create({
    //icono de arriba con navegacion
    icon: {
        marginTop: 10,
        position: 'absolute',
        left: 20,
        top: 12,
    }, //sms de error
    errorText: {
        color: 'red',
        left: 10,
        fontSize: 14,
        marginTop: 0,

    },
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        paddingHorizontal: 20,
        paddingTop: 20,
        backgroundColor: '#fff',
    },
    label: {
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 20,
        left: 30,
        color: '#66696E'
    },
    label2: {
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 10,
        left: 28,
        color: '#66696E'
    },
    label3: {
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 5,
        left: 28,
        color: '#66696E'
    },
    label4: {
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 10,
        left: 30,
        color: '#66696E'
    },
    label5: { //inss

        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 5,
        left: 30,
        color: '#66696E'

    },
    input: {
        height: 40,
        borderWidth: 1,
        borderColor: '#66696E',
        borderRadius: 8,
        fontSize: 16,
        paddingHorizontal: 10,
        backgroundColor: 'white',
        marginHorizontal: 5,
        width: 316,
    },
    input2: {
        height: 40,
        borderWidth: 1,
        borderColor: '#66696E',
        borderRadius: 8,
        fontSize: 16,
        paddingHorizontal: 10,
        backgroundColor: 'white',
        marginHorizontal: 5,
        width: 316,
    },
    input3: {
        height: 40,
        borderWidth: 1,
        borderColor: '#66696E',
        borderRadius: 8,
        fontSize: 16,
        paddingHorizontal: 10,
        backgroundColor: 'white',
        marginHorizontal: 5,
        width: 316,
    },
    input4: {
        height: 40,
        borderWidth: 1,
        borderColor: '#66696E',
        borderRadius: 8,
        fontSize: 16,
        paddingHorizontal: 10,
        backgroundColor: 'white',
        marginHorizontal: 5,
        width: 316,
    },
    input5: { //inss
        height: 40,
        borderWidth: 1,
        borderColor: '#66696E',
        borderRadius: 8,
        fontSize: 16,
        paddingHorizontal: 10,
        backgroundColor: 'white',
        marginHorizontal: 5,
        width: 316,
    },
    button: {

        width: 325,
        height: 135,
        borderRadius: 8,
        borderWidth: 2,
        borderColor: 'gray',
        borderStyle: 'dotted',
        justifyContent: 'center',
        alignItems: 'center',
        left: 20
    },
    icon2: {
        marginRight: 10,
    },
    buttonText: {
        color: '#2AB9B7',
        fontSize: 15,
        fontWeight: 'bold',
        marginLeft: 10,
        left: 0
    },
});
