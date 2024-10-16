import React, { useState } from 'react'
import { Button, Text, View, Image, TouchableOpacity } from 'react-native'
import { globalStyles } from '../../../theme/theme'
import { PrimaryButton } from '../../../components/shared/PrimaryButton'
import { type NavigationProp, useNavigation } from '@react-navigation/native'
import type { RootStack } from '../../../routes/StackNavigator'
import { TextInput, StyleSheet, Platform } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import { Controller, useForm } from 'react-hook-form';
import { Picker } from '@react-native-picker/picker';



//quitar logos(listo)
//cambiar icono (listo)
//componer inputs y pickers (listo)
//usar los inputs del tercero aca

interface IFormInput {
  address: string;
  cedula: string;
  date: string;
  telefono: string;


}

export const RegisterScreen_2 = () => {
  const { control, handleSubmit, formState: { errors } } = useForm<IFormInput>();
  const navigation = useNavigation<NavigationProp<RootStack>>();
  const [municipio, setMunicipio] = useState('');
  const [depar, setDepar] = useState('');
  const [estado, setEstado] = useState('');
  const [sexo, setSexo] = useState('');
  const [ocupa, setOcupa] = useState('');
  const [sangre, setSangre] = useState('');


  //-------------------------------------------------


  //-------------------------------------------------



  const onSubmit = (_data: any) => {
    // Navegar a register_2 solo si no hay errores
    if (Object.keys(errors).length === 0) {
      navigation.navigate('Home');
    }
  };


  return (
    <View style={globalStyles.container2}>




      <Icon name="arrow-back-circle-sharp" size={25} color="#616161" style={styles.icon}
        onPress={() => navigation.navigate('Register_1')} />
      <Text style={styles.label0}>Departamento de nacimiento</Text>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Picker
          selectedValue={depar}
          style={{
            height: 40,
            width: 310,
            color: '#66696E',
            fontSize: 14,
            marginTop: -70 // Ajusta este valor para subir el Picker
          }}
          onValueChange={(itemValue) => setDepar(itemValue)}
        >
          <Picker.Item label="  " value="  " />
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


      <Text style={styles.label}>Municipio de nacimiento</Text>

      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Picker
          selectedValue={municipio}
          style={{
            height: 40,
            width: 310,
            color: '#66696E',
            fontSize: 14,
            marginTop: -110
          }}
          onValueChange={(itemValue) => setMunicipio(itemValue)}
        >
          <Picker.Item label="  " value="  " />
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

      <Text style={styles.label2}>Fecha de nacimiento</Text>

      <Controller
        control={control}
        name="date"
        rules={{
          required: 'La fecha de nacimiento es obligatoria',
          pattern: {
            value: /^\d{2}\/\d{2}\/\d{4}$/,
            message: 'La fecha debe estar en el formato dd/mm/yyyy',
          },
          maxLength: {
            value: 10,
            message: 'La fecha no puede tener más de 10 caracteres',
          },
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <View style={globalStyles.container2}>
            <Icon name="calendar-clear-outline" size={20} color="#545454" style={styles.icon2} />
            <TextInput
              style={styles.input2}
              placeholder="  dd/mm/yyyy"
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





      <Text style={styles.label3}>No. de cédula</Text>
      <Controller
        control={control}
        name="cedula"
        rules={{
          required: 'El número de cédula es obligatorio',
          pattern: {
            value: /^[0-9]{3}-[0-9]{6}-[0-9]{4}[A-Z]$/,
            message: 'El formato debe ser 000-000000-0000T',
          },
          minLength: {
            value: 17,
            message: 'La cédula debe tener exactamente 17 caracteres',
          },
          maxLength: {
            value: 17,
            message: 'La cédula debe tener exactamente 17 caracteres',
          },
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <View style={globalStyles.container2}>
            <TextInput
              style={styles.input4}
              placeholder="000-000000-0000T"
              placeholderTextColor="#888"
              onBlur={onBlur}
              onChangeText={(text) => {

                const filteredText = text.replace(/[^A-Za-z0-9-]/g, '');
                onChange(filteredText);
              }}
              value={value}
              autoCapitalize="characters"
              maxLength={17}
            />
            {errors.cedula && (
              <Text style={styles.errorText1}>{errors.cedula.message}</Text>
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
            message: 'El número debe contener exactamente 8 dígitos',
          },
          minLength: {
            value: 8,
            message: 'El número debe tener exactamente 8 dígitos',
          },
          maxLength: {
            value: 8,
            message: 'El número debe tener exactamente 8 dígitos',
          },
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <View style={globalStyles.container2}>
            <TextInput
              style={styles.input4}
              placeholder="Ingrese su número de teléfono"
              placeholderTextColor="#888"
              onBlur={onBlur}
              onChangeText={(text) => {
                const filteredText = text.replace(/[^0-9]/g, '');
                onChange(filteredText);
              }}
              value={value}
              keyboardType="numeric"
              maxLength={8}
            />
            {errors.telefono && (
              <Text style={styles.errorText1}>{errors.telefono.message}</Text>
            )}
          </View>
        )}
      />

      <View>
        {/* Primer Grupo: Estado Civil y Sexo */}
        <View style={[styles.horizontalGroup, { marginTop: 20 }]}>
          <View style={styles.fieldContainer}>
            <Text style={styles.label5}>Estado Civil</Text>
            <Picker
              selectedValue={estado}
              style={{
                height: 40,
                width: '70%',
                color: '#66696E',
                fontSize: 14,
                marginLeft: 22
              }}
              onValueChange={(itemValue) => setEstado(itemValue)}
            >
              <Picker.Item label=" " value="" />
              <Picker.Item label="Soltero" value="soltero" />
              <Picker.Item label="Casado" value="casado" />
            </Picker>
          </View>

          <View style={styles.fieldContainer}>
            <Text style={styles.label6}>Sexo</Text>
            <View style={styles.genderContainer}>
              <TouchableOpacity
                style={[styles.circleButton, sexo === 'masculino' && styles.selectedButton]}
                onPress={() => setSexo('masculino')}
              >
              </TouchableOpacity>
              <Text style={styles.labelText}>M</Text>
              <TouchableOpacity
                style={[styles.circleButton, sexo === 'femenino' && styles.selectedButton]}
                onPress={() => setSexo('femenino')}
              >
              </TouchableOpacity>
              <Text style={styles.labelText}>F</Text>
            </View>
          </View>
        </View>

        {/* Segundo Grupo: Ocupación y Tipo de Sangre */}
        <View style={styles.horizontalGroup}>
          <View style={styles.fieldContainer}>
            <Text style={styles.label7}>Ocupación</Text>
            <Picker
              selectedValue={ocupa}
              style={{
                height: 40,
                width: '70%',
                color: '#66696E',
                fontSize: 14,
                marginLeft: 22
              }}
              onValueChange={(itemValue) => setOcupa(itemValue)}
            >
              <Picker.Item label=" " value="" />
              <Picker.Item label="Conductor" value="opc1" />
              <Picker.Item label="Abogada" value="opc2" />
              <Picker.Item label="Comerciante" value="opc3" />
              <Picker.Item label="Distribuidor" value="opc4" />
              <Picker.Item label="Maestro" value="opc5" />
            </Picker>
          </View>

          <View style={styles.fieldContainer}>
            <Text style={styles.label8}>Tipo de Sangre</Text>
            <Picker
              selectedValue={sangre}
              style={{
                height: 40,
                width: '70%',
                color: '#66696E',
                fontSize: 14,
                marginLeft: 5
              }}
              onValueChange={(itemValue) => setSangre(itemValue)}
            >
              <Picker.Item label=" " value="" />
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
        </View>
      </View>

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
    left: 20,
    top: 14,
  },
  errorText: {
    color: 'red',
    left: 10,
    fontSize: 14,
    marginTop: -10,

  },
  errorText1: {
    color: 'red',
    left: 10,
    fontSize: 14,
    marginTop: -10,

  },
  // Estilos
  label0: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 25,
    left: 30,
    color: '#66696E',
  },
  input2: {
    height: 40,
    borderWidth: 1,
    borderColor: '#66696E',
    borderRadius: 5,
    fontSize: 16,
    paddingHorizontal: 10,
    marginBottom: 10,
    width: 315,
    marginHorizontal: 5,
  },


  label2: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: -90,
    left: 28,
    color: '#66696E',
  },
  input4: {
    height: 40,
    borderWidth: 1,
    borderColor: '#66696E',
    borderRadius: 5,
    fontSize: 16,
    paddingHorizontal: 10,
    marginBottom: 10,
    width: 315,
    marginHorizontal: 5,
  },
  input5: {
    height: 40,
    borderWidth: 1,
    borderColor: '#66696E',
    borderRadius: 5,
    fontSize: 16,
    paddingHorizontal: 10,
    marginBottom: 10,
    width: 315,
    marginHorizontal: 5,
  },


  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: -70,
    left: 30,
    color: '#66696E',
  },
  label3: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: -110,
    left: 28,
    color: '#66696E',
  },
  label4: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: -110,
    left: 28,
    color: '#66696E',
  },
  icon2: {
    position: 'absolute',
    left: 300,
    top: 26,
  },

  genderContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  circleButton: {
    width: 20,
    height: 20,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#66696E',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 5,
    backgroundColor: 'transparent',
  },
  selectedButton: {
    backgroundColor: '#2AB9B7',
  },
  labelText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#66696E',
    marginHorizontal: 5,
  }, //los ultimos

  //nueva inserccion
  horizontalGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginVertical: 0, // Reducimos aún más el espaciado vertical
  },
  fieldContainer: {
    flex: 1,
    alignItems: 'flex-start',
    marginHorizontal: 3, // Reducimos más el espaciado horizontal
    marginBottom: 0, // Reducimos más el margen inferior
  },

  label5: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: -130,
    left: 19,
    color: '#66696E',
  },
  label6: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: -125,
    left: 8,
    color: '#66696E',
  },
  label7: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: -30, // Ajuste para el segundo grupo
    left: 19,
    color: '#66696E',
  },
  label8: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: -30, // Ajuste para el segundo grupo
    left: 8,
    color: '#66696E',
  },

});

