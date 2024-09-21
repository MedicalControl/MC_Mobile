import React, { useState } from 'react'
import { Button, Text, View, Image } from 'react-native'
import { globalStyles } from '../../theme/theme'
import { PrimaryButton } from '../../components/shared/PrimaryButton'
import { type NavigationProp, useNavigation } from '@react-navigation/native'
import type { RootStack } from '../../routes/StackNavigator'
import { TextInput, StyleSheet, Platform } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import { Controller, useForm } from 'react-hook-form';
import { Picker } from '@react-native-picker/picker';



//Haciendo validacion aca
//recorda despues subir los componentes

interface IFormInput {
  address: string;
  place: string;
  date: string;


}

export const RegisterScreen_2 = () => {
  const { control, handleSubmit, formState: { errors } } = useForm<IFormInput>();
  const navigation = useNavigation<NavigationProp<RootStack>>();
  const [municipio, setMunicipio] = useState('');
  const [depar, setDepar] = useState('');
  //-------------------------------------------------


  //-------------------------------------------------



  const onSubmit = (_data: any) => {
    // Navegar a register_2 solo si no hay errores
    if (Object.keys(errors).length === 0) {
      navigation.navigate('Register_3');
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
        onPress={() => navigation.navigate('Register_1')} />
      <Text style={globalStyles.tittle}>Segundo Paso</Text>
      <Text style={globalStyles.label0}>Departamento</Text>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Picker
          selectedValue={depar}
          style={{
            height: 40,
            width: 310,
            color: '#000',
            fontSize: 14,
          }}
          onValueChange={(itemValue) => setDepar(itemValue)}
        >
          <Picker.Item label="Boaco" value="boaco" />
          <Picker.Item label="Carazo" value="carazo" />
          <Picker.Item label="Chinandega" value="chinan" />
          <Picker.Item label="Chontales" value="chon" />
          <Picker.Item label="Costa Caribe Norte" value="costa1" />
          <Picker.Item label="Costa Caribe Sur" value="costa2" />
          <Picker.Item label="Estelí" value="este" />
          <Picker.Item label="Granada" value="grana" />
          <Picker.Item label="Jinotega" value="jino" />
          <Picker.Item label="León" value="leon" />
          <Picker.Item label="Madriz" value="madriz" />
          <Picker.Item label="Managua" value="mana" />
          <Picker.Item label="Masaya" value="masa" />
          <Picker.Item label="Matagalpa" value="mata" />
          <Picker.Item label="Nueva Segovia" value="sego" />
          <Picker.Item label="Río San Juan" value="rio" />
          <Picker.Item label="Rivas" value="rivas" />
        </Picker>
      </View>


      <Text style={globalStyles.label}>Municipio</Text>

      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Picker
          selectedValue={municipio}
          style={{
            height: 40,
            width: 310,
            color: '#000',
            fontSize: 14,
          }}
          onValueChange={(itemValue) => setMunicipio(itemValue)}
        >
          <Picker.Item label="Managua" value="managua" />
          <Picker.Item label="El Crucero" value="el_crucero" />
          <Picker.Item label="San Rafael del Sur" value="san_rafael_del_sur" />
          <Picker.Item label="Ticuantepe" value="ticuantepe" />
          <Picker.Item label="Villa El Carmen" value="villa_el_carmen" />
          <Picker.Item label="Mateare" value="mateare" />
          <Picker.Item label="Ciudad Sandino" value="ciudad_sandino" />
          <Picker.Item label="Tipitapa" value="tipitapa" />
        </Picker>
      </View>

      <Text style={globalStyles.label2}>Dirección</Text>
      <Controller
        control={control}
        name="address"
        rules={{
          required: 'La dirección es obligatoria',
          pattern: {
            value: /^[A-Za-z0-9\s]+$/,
            message: 'La dirección solo puede contener letras, números y espacios',
          },
          maxLength: {
            value: 30,
            message: 'La dirección no puede tener más de 30 caracteres',
          },
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <View style={globalStyles.container2}>
            <TextInput
              style={globalStyles.input2}
              placeholder="Ingresa tu dirección"
              placeholderTextColor="#888"
              onBlur={onBlur}
              onChangeText={(text) => {
                const filteredText = text.replace(/[^A-Za-z0-9\s]/g, '');
                onChange(filteredText);
              }}
              value={value}
              autoCapitalize="words"
              maxLength={30}
            />
            {errors.address && (
              <Text style={styles.errorText1}>{errors.address.message}</Text>
            )}
          </View>
        )}
      />

      <Text style={globalStyles.label3}>Fecha de nacimiento</Text>
      <Controller
        control={control}
        name="date"
        rules={{
          required: 'La fecha de nacimiento es obligatoria',
          pattern: {
            value: /^\d{2}\/\d{2}\/\d{4}$/,
            message: 'La fecha debe estar en el formato dd/mm/aa',
          },
          maxLength: {
            value: 10, 
            message: 'La fecha no puede tener más de 10 caracteres',
          },
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <View style={globalStyles.container2}>
            <TextInput
              style={globalStyles.input4}
              placeholder="  Dia/Mes/Año"
              placeholderTextColor="#888"
              keyboardType="numeric"
              onBlur={onBlur}
              onChangeText={(text) => {
                
                const filteredText = text.replace(/[^0-9]/g, '');
                let formattedText = filteredText;
                if (filteredText.length > 2) {
                  formattedText = `${filteredText.slice(0, 2)}/${filteredText.slice(2)}`;
                }
                if (filteredText.length > 4) {
                  formattedText = `${formattedText.slice(0, 5)}/${filteredText.slice(4, 8)}`;
                }

                onChange(formattedText);
              }}
              value={value}
              maxLength={10} 
            />
            {errors.date && (
              <Text style={styles.errorText1}>{errors.date.message}</Text>
            )}
          </View>
        )}
      />




      <Text style={globalStyles.label4}>Lugar de nacimiento</Text>
      <Controller
        control={control}
        name="place"
        rules={{
          required: 'El lugar es obligatorio',
          pattern: {
            value: /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/,
            message: 'El lugar solo puede contener letras y espacios',
          },
          maxLength: {
            value: 10,
            message: 'El lugar no puede tener más de 10 caracteres',
          },
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <View style={globalStyles.container2}>
            <TextInput
              style={styles.input4}
              placeholder="Ingresa tu lugar de nacimiento"
              placeholderTextColor="#888"
              onBlur={onBlur}
              onChangeText={onChange}
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
    marginTop: -20,

  },
  errorText1: {
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
  pickLabel: {
    fontSize: 10,
    color: 'pink',

  },
  logo: {
    width: 500,
    height: 450,
    alignSelf: 'center',
    position: 'absolute',
    marginTop: -235,
    top: 10,
    transform: [{ rotate: '-13deg' }],
  },
  logo2: {

    width: 500,
    height: 530,
    alignSelf: 'center',
    position: 'absolute',
    marginTop: 630,
    top: 10,
    transform: [{ rotate: '-10deg' }],
    zIndex: -1,
  },
  input4: {
    height: 40,
    borderBottomWidth: 1,
    borderBottomColor: '#000',
    fontSize: 16,
    paddingHorizontal: 0,
    marginBottom: 20,
    width: 300,
    zIndex: 1,

  }
});

