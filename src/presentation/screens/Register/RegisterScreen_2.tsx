import React, { useState } from 'react'
import { Text, View } from 'react-native'
import { globalStyles } from '../../theme/theme'
import { PrimaryButton } from '../../components/shared/PrimaryButton'
import { type NavigationProp, useNavigation } from '@react-navigation/native'
import type { RootStack } from '../../routes/StackNavigator'
import { TextInput } from 'react-native'

export const RegisterScreen_2 = () => {
  const navigation = useNavigation<NavigationProp<RootStack>>();
  const [municipio, setMunicipio] = useState('');
  const [direccion, setDireccion] = useState('');
  const [fecha, setFecha] = useState('');
  const [lugar, setLugar] = useState('');

  
  return (
    <View style={globalStyles.container2}>
      <Text style={globalStyles.tittle}>Segundo Paso</Text>
      <Text style={globalStyles.label}>Municipio</Text>

      <TextInput
        style={globalStyles.input}
        placeholder="Ingresa tu municipio"
        placeholderTextColor="#888"
        value={municipio}
        onChangeText={text => setMunicipio(text)}
      />
      <Text style={globalStyles.label2}>Direccion</Text>
      <TextInput
        style={globalStyles.input2}
        placeholder="Ingresa tu direccion"
        placeholderTextColor="#888"
        value={direccion}
        onChangeText={text => setDireccion(text)}
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
      <TextInput
        style={globalStyles.input4}
        placeholder="Ingresa tu lugar de nacimiento"
        placeholderTextColor="#888"
        value={lugar}
        onChangeText={text => setLugar(text)}
      />
   
      <PrimaryButton
      onPress={() => navigation.navigate("Register_3")}
      label='Siguiente'
      />
    </View>
  )
}
