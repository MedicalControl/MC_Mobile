import React, { useState } from 'react'
import { Text, View } from 'react-native'
import { globalStyles } from '../../theme/theme';
import { PrimaryButton } from '../../components/shared/PrimaryButton'
import { type NavigationProp, useNavigation } from '@react-navigation/native'
import type { RootStack } from '../../routes/StackNavigator'
import { TextInput } from 'react-native'
import { TouchableOpacity } from 'react-native';

export const RegisterScreen_4 = () => {
    const navigation = useNavigation<NavigationProp<RootStack>>();
    const [sex, setSex] = useState('');
    return (
        <View style={globalStyles.container2}>

        <Text style={globalStyles.tittle}>Cuarto Paso</Text>
        <Text style={globalStyles.label}>Sexualidad</Text>
          <TextInput
                style={globalStyles.input}
                placeholder="Sexualidad..."
                placeholderTextColor="#888"
                value={sex}
                onChangeText={text => setSex(text)}
            />
            <Text style={globalStyles.label2}>Imagen</Text>
              <TouchableOpacity style={globalStyles.opc}>
                <Text style={globalStyles.opcText}>Sube tu imagen aqui</Text>
            </TouchableOpacity>
            <PrimaryButton
                onPress={() => navigation.navigate("Home")}
                label='Guardar'
            />
        </View>
    )
}