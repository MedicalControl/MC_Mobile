import React, { useState } from 'react'
import { Text, View, StyleSheet, TextInput, Image } from 'react-native'
import { globalStyles } from '../../theme/theme';
import { PrimaryButton } from '../../components/shared/PrimaryButton'
import { useNavigation, type NavigationProp } from '@react-navigation/native'
import { type RootStack } from '../../routes/StackNavigator';
import Icon from 'react-native-vector-icons/Ionicons';
import { Alert } from 'react-native';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';

//pendiente subir los componentes
//validacion x hooks
//cedula si o si son 17 caracteres
//tambien corregir ortografia registro bien
//componer componentes de largo tambien

interface IFormInput {
    nombres: string;
    apellidos: string;
    cedula: string;
    telefono: string;
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
            <Image
                source={require('../Register/rectan.png')}
                style={styles.logo}
                resizeMode='contain'
            />
            <Icon name="chevron-back" size={25} color="black" style={styles.icon}
                onPress={() => navigation.navigate('Login')} />
            <Text style={globalStyles.tittle}>Primer Paso</Text>
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
            <Text style={styles.label3}>Cédula</Text>
            <Controller
                control={control}
                name="cedula"
                rules={{
                    required: 'El número de cédula es obligatorio',
                    pattern: {
                        value: /^[A-Za-z0-9-]+$/,
                        message: 'La cédula solo puede contener letras, números y guiones',
                    },
                    maxLength: {
                        value: 17,
                        message: 'La cédula no puede tener más de 17 caracteres',
                    },
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                    <View style={styles.container}>
                        <TextInput
                            style={styles.input3}
                            placeholder="Ingresa tu número de cédula"
                            placeholderTextColor="#888"
                            onBlur={onBlur}
                            onChangeText={(text) => {
                                const filteredText = text.replace(/[^A-Za-z0-9-]/g, '');
                                onChange(filteredText);
                            }}
                            value={value}
                            maxLength={17}
                        />
                        {errors.cedula && (
                            <Text style={styles.errorText}>{errors.cedula.message}</Text>
                        )}
                    </View>
                )}
            />



            <Text style={styles.label4}>Teléfono</Text>

            <Controller
                control={control}
                name="telefono"
                rules={{
                    required: 'El número de teléfono es obligatorio',
                    pattern: {
                        value: /^[0-9]{8}$/,
                        message: 'El número de teléfono debe tener exactamente 8 dígitos',
                    },
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                    <View style={styles.container}>
                        <TextInput
                            style={styles.input4}
                            placeholder="Ingresa tu número de teléfono"
                            placeholderTextColor="#888"
                            onBlur={onBlur}
                            onChangeText={(text) => {
                                const filteredText = text.replace(/[^0-9]/g, '');
                                onChange(filteredText);
                            }}
                            value={value}
                            maxLength={8}
                            keyboardType="numeric"
                        />
                        {errors.telefono && (
                            <Text style={styles.errorText}>{errors.telefono.message}</Text>
                        )}
                    </View>
                )}
            />

            <Image
                source={require('../Register/rectan.png')}
                style={styles.logo2}
                resizeMode='contain'
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
        marginTop: 11,
        position: 'absolute',
        left: 0,
        top: 14,
    }, //sms de error
    errorText: {
        color: 'red',
        left: 10,
        fontSize: 14,
        marginTop: -10,

    },
    logo: {
        width: 500,
        height: 500,
        alignSelf: 'center',
        position: 'absolute',
        marginTop: -270,
        top: 10,
        transform: [{ rotate: '-11deg' }],
    },
    logo2: {

        width: 500,
        height: 530,
        alignSelf: 'center',
        position: 'absolute',
        marginTop: 630,
        top: 10,
        transform: [{ rotate: '-10deg' }],
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
    },
    label2: {
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 10, 
        left: 28,
    },
    label3: {
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 5, 
        left: 28,
    },
    label4: {
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 10, 
        left: 30,
    },
    input: {
        height: 40,
        borderBottomWidth: 1,
        borderBottomColor: '#000',
        fontSize: 16,
        paddingHorizontal: 0,
        marginBottom: 20, 
        width: 300,
    },
    input2: {
        height: 40,
        borderBottomWidth: 1,
        borderBottomColor: '#000',
        fontSize: 16,
        marginBottom: 20, 
        width: 300,
        marginHorizontal: 5,
    },
    input3: {
        height: 40,
        borderBottomWidth: 1,
        borderBottomColor: '#000',
        fontSize: 16,
        marginBottom: 20, 
        width: 300,
        marginHorizontal: 5,
    },
    input4: {
        height: 40,
        borderBottomWidth: 1,
        borderBottomColor: '#000',
        fontSize: 16,
        paddingHorizontal: 0,
        marginBottom: 20, 
        width: 300,
    }
});
