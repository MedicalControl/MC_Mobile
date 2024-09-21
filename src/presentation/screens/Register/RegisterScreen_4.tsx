import React, { useState } from 'react';
import { Text, View, Image } from 'react-native';
import { globalStyles } from '../../theme/theme';
import { PrimaryButton } from '../../components/shared/PrimaryButton';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { TextInput, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Picker } from '@react-native-picker/picker';
import { useForm, Controller } from 'react-hook-form';
import { RootStack } from '../../routes/StackNavigator';

interface IFormInput {
    password: string;
    gmail: string;
}

export const RegisterScreen_4 = () => {
    const { control, handleSubmit, formState: { errors } } = useForm<IFormInput>();
    const navigation = useNavigation<NavigationProp<RootStack>>();
    const [sex, setSex] = useState('');

    const onSubmit = (_data: any) => {
        if (Object.keys(errors).length === 0) {
            navigation.navigate('Home');
        }
    };

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
            <View style={styles.pickerContainer}>
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

            <Text style={styles.label}>Correo</Text>
            <Controller
                control={control}
                name="gmail"
                rules={{
                    required: 'El gmail es obligatorio',
                    pattern: {
                        value: /^[A-Za-z0-9@._-]+$/,
                        message: 'El gmail solo puede tener letras, números y los caracteres',
                    },
                    maxLength: {
                        value: 10,
                        message: 'El gmail no puede tener más de 10 caracteres',
                    },
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                    <View style={globalStyles.container2}>
                        <TextInput
                            style={styles.correo}
                            placeholder="Ingresa tu correo"
                            placeholderTextColor="#888"
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                            autoCapitalize="none"
                            maxLength={10}
                        />
                        {errors.gmail && (
                            <Text style={styles.errorText}>{errors.gmail.message}</Text>
                        )}
                    </View>
                )}
            />
            <Text style={styles.label2}>Contraseña</Text>
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
                    <View style={globalStyles.container2}>
                        <TextInput
                            style={styles.password}
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
                            <Text style={styles.error2}>{errors.password.message}</Text>
                        )}
                    </View>
                )}
            />


            <Text style={styles.labelopc}>Imagen</Text>
            <TouchableOpacity style={styles.boton}>
                <Icon name="share-outline" size={27} color="white" style={styles.icon1} />
                <Text style={styles.textOpc}>Sube tu imagen aquí</Text>
            </TouchableOpacity>

            <Image
                source={require('../Register/rectan.png')}
                style={styles.logo2}
                resizeMode='contain'
            />

            <PrimaryButton
                onPress={handleSubmit(onSubmit)}
                label='Guardar'
            />
        </View>
    );
};

const styles = StyleSheet.create({
    pickerContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 2,
    },
    icon: {
        marginTop: 10,
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
        top: 20,
        transform: [{ rotate: '-13deg' }],
    },
    logo2: {
        width: 500,
        height: 530,
        alignSelf: 'center',
        position: 'absolute',
        marginTop: 620,
        top: 10,
        transform: [{ rotate: '-9deg' }],
    },
    picker: {
        height: 40,
        width: '80%',
        color: '#000',
        fontSize: 14,
        marginBottom: 5,
    },
    label: {
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 5,
        marginBottom: 3,
        left: 38,
    },
    errorText: {
        color: 'red',
        fontSize: 14,
        marginTop: 3,
        left: 10,
    },
    error2:{
        
            color: 'red',
            fontSize: 14,
            marginTop:-75,
            left: 10,
    },
    correo: {
        height: 40,
        borderBottomWidth: 1,
        borderBottomColor: '#000',
        fontSize: 16,
        width: 300,
        marginHorizontal: 5,
        marginBottom: 5,
    },
    label2: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 3,
        left: 55,
        position: 'absolute', 
        top:350, 
    },

    password: {
        height: 40,
        borderBottomWidth: 1,
        borderBottomColor: '#000',
        fontSize: 16,
        width: 300,
        marginHorizontal: 5,
        marginBottom: 5,
        position: 'absolute', 
        top: -110, 
    },


    labelopc: {
        fontSize: 16,
        fontWeight: 'bold',
        position: 'absolute', 
        top: 520, 
        left: 55,
    },
    boton: {
        height: 100,
        backgroundColor: '#00B7EB',
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        width: 350,
        alignSelf: 'center',
        position: 'absolute', 
        top: 570, 
        borderColor: '#ccc',
    },
    guardarButton: {
        height: 50,
        backgroundColor: '#4CAF50',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        width: 300,
        alignSelf: 'center',
        marginTop: 10,
    },
    labelImagen: {
        fontSize: 16,
        fontWeight: 'bold',
        alignSelf: 'center',
        marginTop: 20,
    },
    textOpc: {
        fontSize: 14,
        color: '#fff',
        fontWeight: 'bold',
        top: 10,
    },
});
