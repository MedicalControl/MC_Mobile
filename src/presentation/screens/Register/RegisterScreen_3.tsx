import React, { useState } from 'react'
import { Text, View, StyleSheet } from 'react-native';
import { PrimaryButton } from '../../components/shared/PrimaryButton'
import { globalStyles } from '../../theme/theme'
import { type NavigationProp, useNavigation } from '@react-navigation/native'
import type { RootStack } from '../../routes/StackNavigator'
import { TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Alert } from 'react-native';
import { Controller, useForm } from 'react-hook-form';
import { Picker } from '@react-native-picker/picker';
 //tengo que personalizar bien!!!!

interface IFormInput {
    inss: string;
    name: string;
    tel: string;
    paren: string;
}

//en este uso mis propios estilos debido a la diferencia!!!
//añadimos iconos hoy
export const RegisterScreen_3 = () => {
    const { control, handleSubmit, formState: { errors } } = useForm<IFormInput>();
    const navigation = useNavigation<NavigationProp<RootStack>>();
    const [sangre, setSangre] = useState('');
    const [sexo, setSexo] = useState('');



    const onSubmit = (_data: any) => {
        // Navegar a register_2 solo si no hay errores
        if (Object.keys(errors).length === 0) {
            navigation.navigate('Register_4');
        }
    };



    return (
        <View style={styles.container}>
            <Icon name="chevron-back" size={25} color="black" style={styles.icon}
                onPress={() => navigation.navigate('Register_2')} />
            <Text style={styles.tittle}>Tercer Paso</Text>
            <Text style={styles.label}>Numero de Inss</Text>

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



            <View style={styles.horizontalGroup}>
                <View style={styles.fieldContainer}>
                    <Text style={styles.label2}>Tipo de Sangre</Text>
                    <Picker
                        selectedValue={sangre}
                        style={{ height: 50, width: '50%', color: '#000', fontSize: 16 }}
                        onValueChange={(itemValue) => setSangre(itemValue)}
                    >
                        <Picker.Item label="Seleccione su tipo de sangre" value="" />
                        <Picker.Item label="A+" value="a+" />
                        <Picker.Item label="A-" value="a-" />
                        <Picker.Item label="B+" value="b+" />
                        <Picker.Item label="B-" value="b-" />
                        <Picker.Item label="AB+" value="ab+" />
                        <Picker.Item label="AB-" value="ab-" />
                        <Picker.Item label="O+" value="o+" />
                        <Picker.Item label="O-" value="o-" />
                    </Picker>
                </View>
                <View style={styles.fieldContainer}>
                    <Text style={styles.label3}>Sexo</Text>
                    <Picker
                        selectedValue={sexo}
                        style={{ height: 50, width: '50%', color: '#000', fontSize: 16 }}
                        onValueChange={(itemValue) => setSexo(itemValue)}
                    >
                        <Picker.Item label="Femenino" value="femenino" />
                        <Picker.Item label="Masculino" value="masculino" />
                        <Picker.Item label="Otro" value="otro" />
                    </Picker>
                </View>
            </View>

            <Text style={styles.label4}>Contacto de emergencia</Text>
            <Text style={styles.contact}>Nombre completo:</Text>
            <Controller
                control={control}
                name="name"
                rules={{
                    required: 'El nombre completo es obligatorio',
                    pattern: {
                        value: /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/,
                        message: 'El nombre completo solo puede contener letras',
                    },
                    maxLength: {
                        value: 30,
                        message: 'El nombre no puede tener más de 17 caracteres',
                    },
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                    <View style={styles.container}>
                        <TextInput
                            style={styles.input4}
                            placeholder="Ingresa tu nombre"
                            placeholderTextColor="#888"
                            onBlur={onBlur}
                            onChangeText={(text) => {
                                const filteredText = text.replace(/[^A-Za-zÁÉÍÓÚáéíóúÑñ\s]/g, '');
                                onChange(filteredText);
                            }}
                            value={value}
                            autoCapitalize="words"
                            maxLength={30}
                        />
                        {errors.name && (
                            <Text style={styles.errorText}>{errors.name.message}</Text>
                        )}
                    </View>
                )}
            />



            <Text style={styles.tel}>Telefono</Text>
            <Controller
                control={control}
                name="tel"
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
                            style={styles.input5}
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
                        {errors.tel && (
                            <Text style={styles.errorText}>{errors.tel.message}</Text>
                        )}
                    </View>
                )}
            />


            <Text style={styles.parentesco}>Parentesco</Text>
            <Controller
                control={control}
                name="paren"
                rules={{
                    required: 'El parentesco es obligatorio',
                    pattern: {
                        value: /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/,
                        message: 'El parentesco solo puede contener letras',
                    },
                    maxLength: {
                        value: 10,
                        message: 'El parentesco no puede tener más de 10 caracteres',
                    },
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                    <View style={styles.container}>
                        <TextInput
                            style={styles.input6}
                            placeholder="Ingresa parentesco"
                            placeholderTextColor="#888"
                            onBlur={onBlur}
                            onChangeText={(text) => {
                                const filteredText = text.replace(/[^A-Za-zÁÉÍÓÚáéíóúÑñ\s]/g, '');
                                onChange(filteredText);
                            }}
                            value={value}
                            autoCapitalize="words"
                            maxLength={10}
                        />
                        {errors.paren && (
                            <Text style={styles.errorText}>{errors.paren.message}</Text>
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
    errorText: {
        color: 'red',
        left: -5,
        fontSize: 14,
        marginTop: -40,

    }
});

