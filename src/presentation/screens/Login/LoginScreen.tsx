import { NavigationProp, useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { RootStack } from '../../routes/StackNavigator';





export const LoginScreen = () => {

  const navigation = useNavigation<NavigationProp<RootStack>>();

  return (
    <View style={styles.container}>

     <Image
     source={require('../Login/logo.png')}
        style={styles.logo}
        resizeMode='contain'
      />


      <Text style={styles.title}>Medical Control</Text>


      <TextInput
        style={styles.input}
        placeholder="Correo"
        placeholderTextColor="#888"
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        placeholderTextColor="#888"
        secureTextEntry
      />

      <TouchableOpacity style={styles.button}>
        <Text
          style={styles.buttonText}
          onPress={() => navigation.navigate("Home")}
        >Acceder</Text>
        <Text style={styles.sentences}>¿Olvidaste la contraseña?</Text>
        <Text style={styles.sentences2}>¿No tienes una cuenta?</Text>
        <Text
          style={styles.link}
          onPress={()=> navigation.navigate("Register_1")}
          >
          Registrate</Text>
      </TouchableOpacity>
    </View>
  );
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
    color: '#333',

  },
  input: {
    height: 50,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 20,
    paddingHorizontal: 15,
    fontSize: 12,
    marginBottom: 15,
    color: '#333',
    width: 250,
    alignSelf: 'center',
  },
  button: {
    height: 45,
    backgroundColor: '#26A699',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    width: 190,
    alignSelf: 'center',
  },
  buttonText: {
    fontSize: 14,
    color: '#fff',
    fontWeight: 'bold',
  },
  sentences: {
    position: 'absolute',
    top: 100,
    left: 0,
    right: 0,
    fontSize: 12,
    color: 'black',
    marginBottom: 20,
    textAlign: 'center',

  },
  sentences2: {
    position: 'absolute',
    top: 130,
    left: -60,
    right: 0,
    fontSize: 12,
    color: 'black',
    marginBottom: 20,
    textAlign: 'center',

  },
  link: {
    fontSize: 12,
    color: '#26A699',
    textDecorationLine: 'underline',
    position: 'absolute',
    top: 130,
    left: 120,
    right: 0,
    marginBottom: 20,
    textAlign: 'center',

  },
  logo: {
    width: 230,
    height: 230,
    alignSelf: 'center',
    marginBottom: 50,
  }

});