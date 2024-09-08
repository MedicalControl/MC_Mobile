import React, { useState } from 'react'
import { Text, View } from 'react-native'
import { globalStyles } from '../../theme/theme'
import { PrimaryButton } from '../../components/shared/PrimaryButton'
import { type NavigationProp, useNavigation } from '@react-navigation/native'
import type { RootStack } from '../../routes/StackNavigator'
import { TextInput, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import { Controller, useForm } from 'react-hook-form';
import { Picker } from '@react-native-picker/picker';


//Haciendo validacion aca
//recorda despues subir los componentes

interface IFormInput {
  address: string;
  place: string;


}

export const RegisterScreen_2 = () => {
  const { control, handleSubmit, formState: { errors } } = useForm<IFormInput>();
  const navigation = useNavigation<NavigationProp<RootStack>>();
  const [municipio, setMunicipio] = useState('');
  const [fecha, setFecha] = useState('');
 

  const onSubmit = (_data: any) => {
    // Navegar a register_2 solo si no hay errores
    if (Object.keys(errors).length === 0) {
      navigation.navigate('Register_3');
    }
  };


  return (
    <View style={globalStyles.container2}>
      <Icon name="chevron-back" size={25} color="black" style={styles.icon}
        onPress={() => navigation.navigate('Register_1')} />
      <Text style={globalStyles.tittle}>Segundo Paso</Text>
      <Text style={globalStyles.label}>Municipio</Text>

      <Picker
        selectedValue={municipio}
        style={{ height: 50, width: '100%', color: '#000', fontSize: 16 }}
        onValueChange={(itemValue) => setMunicipio(itemValue)}
       >
        <Picker.Item label="Seleccione su municipio" value="" />
        <Picker.Item label="Municipio 1" value="municipio1" />
        <Picker.Item label="Municipio 2" value="municipio2" />
        <Picker.Item label="Municipio 3" value="municipio3" />
        <Picker.Item label="Municipio 4" value="municipio4" />
        <Picker.Item label="Municipio 5" value="municipio5" />
        <Picker.Item label="Municipio 6" value="municipio6" />
        <Picker.Item label="Municipio 7" value="municipio7" />
        <Picker.Item label="Municipio 8" value="municipio8" />
        <Picker.Item label="Municipio 9" value="municipio9" />
        <Picker.Item label="Municipio 10" value="municipio10" />
      </Picker>


      <Text style={globalStyles.label2}>Direccion</Text>
      <Controller
        control={control}
        name="address"
        rules={{
          required: 'La direccion es obligatoria',
          pattern: {
            value: /^[A-Za-z0-9-]+$/,
            message: 'La direccion solo puede contener letras, numeros y guiones',
          },
          maxLength: {
            value: 30,
            message: 'La direccion no puede tener más de 30 caracteres',
          },
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <View style={globalStyles.container2}>
            <TextInput
              style={globalStyles.input2}
              placeholder="Ingresa tu direccion"
              placeholderTextColor="#888"
              onBlur={onBlur}
              onChangeText={(text) => {
                const filteredText = text.replace(/[^A-Za-z0-9-]/g, '');
                onChange(filteredText);
              }}
              value={value}
              autoCapitalize="words"
              maxLength={30}
            />
            {errors.address && (
              <Text style={styles.errorText}>{errors.address.message}</Text>
            )}
          </View>
        )}
      />

      <Text style={globalStyles.label3}>Fecha de nacimiento</Text>
      <TextInput
        style={globalStyles.input3}
        placeholder="Ingresa tu fecha de nacimiento"
        placeholderTextColor="#888"
        value={fecha}
        onChangeText={text => setFecha(text)}
      />






      <Text style={globalStyles.label4}>Lugar de nacimiento</Text>
      <Controller
        control={control}
        name="place"
        rules={{
          required: 'El lugar es obligatorio',
          pattern: {
            value: /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/,
            message: 'El lugar solo puede contener letras',
          },
          maxLength: {
            value: 10,
            message: 'El lugar no puede tener mas de 10 caracteres',
          },
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <View style={globalStyles.container2}>
            <TextInput
              style={globalStyles.input4}
              placeholder="Ingresa tu lugar de nacimiento"
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
            {errors.place && (
              <Text style={styles.errorText}>{errors.place.message}</Text>
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
  //icono de arriba con navegacion
  icon: {
    marginTop: 11,
    position: 'absolute',
    left: 0,
    top: 14,
  },
  errorText: {
    color: 'red',
    left: 10,
    fontSize: 14,
    marginTop: -80,

  },
  picker: {
    height: 50,
    width: '100%',
    color: '#888',
  },
  pickLabel:{
  fontSize:10,
  color:'pink',

  },
});