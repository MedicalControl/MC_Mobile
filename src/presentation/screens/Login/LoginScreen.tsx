import { NavigationProp, useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Dimensions} from 'react-native';
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
        source={require('../Login/medical.jpg')}
        style={styles.photo}
        resizeMode='contain'
      />
      <Image
        source={require('../Login/med.png')}
        style={styles.photo1}
        resizeMode='contain'
      />
      <Image
        source={require('../Login/logo.png')}
        style={styles.photo2}
        resizeMode='contain'
      />

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
            <Icon name="person-outline" size={20} color="black" style={styles.icon} />
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
            <Icon name="key-outline" size={20} color="black" style={styles.icon} />
            <TextInput
              style={styles.input}
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
        onPress={() => navigation.navigate('Register_1')}
      >
        Regístrate
      </Text>
    </View>
  );
};
const { width, height } = Dimensions.get('window');


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start', 
    marginTop: 400, //bajar los inputs

    alignItems: 'center',
    
  },
  input: { //el unico que estoy usando
    paddingHorizontal: 40,
    fontSize: 15,
    color: 'black',
    width: '100%', 
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 12,
    paddingLeft: 38, 
    paddingRight: 10,
   
    

  },
  input2: {
    paddingHorizontal: 35,
    fontSize: 15,
    color: 'black',
    width: '80%',
    alignSelf: 'center',
    marginTop: 15, //bajarlo subirlo 
    marginBottom: 5,
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 12,
    paddingLeft: 40,
    paddingRight: 10,

  },


  button: {
    height: 48,
    backgroundColor: '#2AB9B7',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    width: 170,
    alignSelf: 'center',
    marginTop: 10,
    marginBottom: 15,
  },
  buttonText: {
    fontSize: 15,
    color: '#fff',
    fontWeight: 'bold',
  },
  sentences: {
    fontSize: 14,
    color: 'black',
    textAlign: 'center',
    marginTop: 5,
  },
  sentences2: {
    fontSize: 14,
    color: 'black',
    textAlign: 'center',
    marginTop: 2,
    left: -30,
  },
  link: {
    fontSize: 14,
    color: '#2AB9B7',
    textDecorationLine: 'underline',
    textAlign: 'center',
    marginTop: -20,
    left: 75,
  },
  //iconos
  //el unico que estoy usando
  icon: {
    position: 'absolute',
    left: 10, 
    top: 13, 
  },

  errorText: {
    color: 'red',
    left: 100,
    fontSize: 14,
    marginTop: 5,
  },
  inputContainer: {
    position: 'relative', 
    width: 300, 
    marginBottom: 15,
   
    
  },
  photo: {
    width: '100%', 
    height: 450,
    alignSelf: 'center',
    position: 'absolute',
    top: -520, 
    // marginTop: -20, 
  },
  photo1: { //elipse
    width: '60%',
    height: 450,
    alignSelf: 'center',
    position: 'absolute',
    top: -370, 
  },
  photo2: {
    width: 332, 
    height: 222,
    position: 'absolute',
    top: -165, 
    left: '49%',
    transform: [{ translateX: -166 }, { translateY: -111 }], 
    
  },

  
});


