import React from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity, Dimensions, ScrollView } from 'react-native';
import { useNavigation, type NavigationProp } from '@react-navigation/native';
import { Controller, useForm } from 'react-hook-form';
import Icon from 'react-native-vector-icons/Ionicons';
import { PrimaryButton } from '../../components/shared/PrimaryButton';
import { globalStyles } from '../../theme/theme';

interface IFormInput {
    nombres: string;
    apellidos: string;
    password: string;
    gmail: string;
    inss: string;
}

export const RegisterScreen_1 = () => {
    const { control, handleSubmit, formState: { errors } } = useForm<IFormInput>();
    const navigation = useNavigation<NavigationProp<any>>();

    const onSubmit = (data: IFormInput) => {
        if (Object.keys(errors).length === 0) {
            navigation.navigate('Register_2');
        }
    };

    const { width } = Dimensions.get('window');

    return (
        <ScrollView contentContainerStyle={styles.scrollViewContainer}>
            <View style={styles.container}>
                <Icon name="arrow-back-circle-sharp" size={25} color="#616161" style={styles.icon}
                    onPress={() => navigation.navigate('Login')} />
                <Text style={globalStyles.tittle}>¡Bienvenido a</Text>
                <Text style={globalStyles.tittle2}>Medical control!</Text>
                <Text style={globalStyles.tittle3}>Por favor, proporcióna algunos datos</Text>
                <Text style={globalStyles.tittle4}>personales para empezar a cuidar de tu</Text>
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

                <Text style={styles.label}>Apellidos</Text>
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
                                style={styles.input}
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

                <Text style={styles.label}>Email</Text>
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
                            message: 'El gmail no puede tener más de 30 caracteres.',
                        },
                    }}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <View style={styles.container}>
                            <TextInput
                                style={styles.input}
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

                <Text style={styles.label}>Contraseña</Text>
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
                                style={styles.input}
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

                <Text style={styles.label}>No.Inss</Text>
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
                                style={styles.input}
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
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    scrollViewContainer: {
        flexGrow: 1,
        paddingBottom: 20,
    },
    container: {
        padding: 20,
        backgroundColor: 'white',
    },
    icon: {
        marginTop: 10,
        position: 'absolute',
        left: 20,
        top: 12,
    },
    errorText: {
        color: 'red',
        fontSize: 14,
        marginTop: 5,
    },
    label: {
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 10,
        color: '#666',
        width: '100%',
    },
    
    input: {
        height: 50,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 10,
        marginTop: 5,
        width: '100%',
    },
    button: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#E8E8E8',
        borderRadius: 8,
        height: 50,
        width: '100%',
        marginTop: 10,
    },
    buttonText: {
        marginLeft: 10,
        color: '#545454',
    },
    icon2: {
        marginRight: 10,
    },
});
