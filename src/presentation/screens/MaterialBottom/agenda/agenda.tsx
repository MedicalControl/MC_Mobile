import React, { useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

export const agenda = () => {
    const [selectedValue, setSelectedValue] = useState<string | null>(null);

    return (
        <View>
            <Text style={styles.titulo}>Agenda</Text>
            <RNPickerSelect
                onValueChange={(value) => setSelectedValue(value)}
                items={[
                    { label: 'Madre', value: 'madre' },
                    { label: 'Padre', value: 'padre' },
                    { label: 'Hijo', value: 'hijo' },
                    { label: 'Hija', value: 'hija' },
                ]}
                style={pickerSelectStyles}
                placeholder={{
                    label: 'Seleccione una opción...',
                    value: null,
                    color: '#0094B6', 
                }}
            />
        </View>
    );
}

//MELANIE, ESTE PICKER ESTA MALO, BORRALO Y USA EL QUE TE DESEE, ESTE LO DEJE A PATA
const styles = StyleSheet.create({
    titulo: {
        fontSize: 27,
        color: '#0094B6',
        fontWeight: 'bold',
        left: 48,
    },
});


const pickerSelectStyles = StyleSheet.create({
    inputIOS: {
        fontSize: 16,
        color: '#0094B6',
        paddingVertical: 10,
        paddingHorizontal: 12,
        borderRadius: 0,
        borderWidth: 0,
        backgroundColor: '#ffffff', 
        marginLeft: 48,
        marginRight: 48,
        height: 40, 
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputAndroid: {
        fontSize: 16,
        color: '#0094B6',
        paddingVertical: 10,
        paddingHorizontal: 12,
        borderRadius: 0,
        borderWidth: 0,
        backgroundColor: '#ffffff', 
        marginLeft: 48,
        marginRight: 48,
        height: 40, 
        alignItems: 'center',
        justifyContent: 'center',
        
    },
});
