import { NavigationProp, useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Alert } from 'react-native';
import { RootStack } from '../../routes/StackNavigator';
import Icon from 'react-native-vector-icons/Ionicons';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';


interface IFormInput {
  email: string;
  password: string;
}
//validacion de errores de login screen con melanie code
export const LoginScreen = () => {

  const { control, handleSubmit, formState: { errors } } = useForm<IFormInput>();
  const navigation = useNavigation<NavigationProp<RootStack>>();
  const onSubmit: SubmitHandler<IFormInput> = data => {
    console.log('Datos del formulario:', data);
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>

      <Image
        source={require('../Login/logo.png')}
        style={styles.logo}
        resizeMode='contain'
      />

      <Text style={styles.title}>Medical Control</Text>



      <Controller
        control={control}
        name="email"
        rules={{
          required: 'El correo es obligatorio',
          pattern: {
            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            message: 'El formato del correo no es válido',
          },
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <View style={styles.inputContainer}>
            <Icon name="person-outline" size={20} color="black" style={styles.icon2} />
            <TextInput
              style={styles.input}
              placeholder="Correo"
              placeholderTextColor="#888"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              keyboardType="email-address"
              autoCapitalize="none"
            />
            {errors.email && <Text style={styles.errorText}>{errors.email.message}</Text>}
          </View>
        )}
      />





      <Controller
        control={control}
        name="password"
        rules={{
          required: 'La contraseña es obligatoria',
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
          <View style={styles.inputContainer}>
            <Icon name="key-outline" size={20} color="black" style={styles.icon1} />
            <TextInput
              style={styles.input2}
              placeholder="Contraseña"
              placeholderTextColor="#888"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              secureTextEntry
              maxLength={16}
            />
            {errors.password && <Text style={styles.errorText}>{errors.password.message}</Text>}
          </View>
        )}
      />




      <TouchableOpacity style={styles.button}
        onPress={handleSubmit(onSubmit)}>
        <Text style={styles.buttonText}>Acceder</Text>
      </TouchableOpacity>

      <Text style={styles.sentences}>¿Olvidaste la contraseña?</Text>
      <Text style={styles.sentences2}>¿No tienes una cuenta?</Text>
      <Text
        style={styles.link}
        onPress={() => navigation.navigate('Register_4')}
      >
        Regístrate
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start', // arriba
    paddingTop: 160, // more space
    backgroundColor: '#fff',
  },
  logo: {
    width: 270,
    height: 270,
    alignSelf: 'center',
    marginBottom: -60,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#333',
    marginBottom: 10,
  },
  input: {

    paddingHorizontal: 40,
    fontSize: 14,
    color: 'black',
    width: 250,
    alignSelf: 'center',
    marginTop: 5,
    marginBottom: 5,
    backgroundColor: '#d8d9ed',
    height: 45,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 18,
    paddingLeft: 38,
    paddingRight: 10,
  },
  input2: {
    paddingHorizontal: 35,
    fontSize: 14,
    color: 'black',
    width: 250,
    alignSelf: 'center',
    marginTop: 5,
    marginBottom: 10,
    backgroundColor: '#d8d9ed',
    height: 45,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 18,
    paddingLeft: 40,
    paddingRight: 10,

  },
  button: {
    height: 45,
    backgroundColor: '#26A699',
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
    width: 170,
    alignSelf: 'center',
    marginTop: 10,
    marginBottom: 15,
  },
  buttonText: {
    fontSize: 14,
    color: '#fff',
    fontWeight: 'bold',
  },
  sentences: {
    fontSize: 13,
    color: 'black',
    textAlign: 'center',
    marginTop: 5,
  },
  sentences2: {
    fontSize: 13,
    color: 'black',
    textAlign: 'center',
    marginTop: 2,
    left: -30,
  },
  link: {
    fontSize: 13,
    color: '#26A699',
    textDecorationLine: 'underline',
    textAlign: 'center',
    marginTop: -17,
    left: 68,
  },
  //iconos
  icon1: {

    marginTop: 7,
    position: 'absolute',
    left: 100,
    top: 10,


  },
  icon2: {
    marginTop: 3,
    position: 'absolute',
    left: 100,
    top: 10,

  },
  errorText: {
    color: 'red',
    left: 100,
    fontSize: 14,
    marginTop: 5,
  },
  inputContainer: {
    position: 'relative',
    width: '100%',
    justifyContent: 'center',
  }

});


