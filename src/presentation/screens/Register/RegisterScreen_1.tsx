import React, { useState } from 'react'
import { Text, View, StyleSheet, TextInput } from 'react-native'
import { globalStyles } from '../../theme/theme';
import { PrimaryButton } from '../../components/shared/PrimaryButton'
import { useNavigation, type NavigationProp } from '@react-navigation/native'
import { type RootStack } from '../../routes/StackNavigator';
import Icon from 'react-native-vector-icons/Ionicons';
import { Alert } from 'react-native';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';

//pendiente subir los componentes
//validacion x hooks
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
        <View style={globalStyles.container2}>
            <Icon name="chevron-back" size={25} color="black" style={styles.icon}
                onPress={() => navigation.navigate('Login')} />
            <Text style={globalStyles.tittle}>Primer Paso</Text>
            <Text style={globalStyles.label}>Nombres</Text>

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
                    <View style={globalStyles.container2}>
                        <TextInput
                            style={globalStyles.input}
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

            <Text style={globalStyles.label2}>Apellidos</Text>
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
                    <View style={globalStyles.container2}>
                        <TextInput
                            style={globalStyles.input2}
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
            <Text style={globalStyles.label3}>Cedula</Text>
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
                    <View style={globalStyles.container2}>
                        <TextInput
                            style={globalStyles.input3}
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



            <Text style={globalStyles.label4}>Telefono</Text>

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
                    <View style={globalStyles.container2}>
                        <TextInput
                            style={globalStyles.input4}
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
        marginTop: -80,

    }
});
