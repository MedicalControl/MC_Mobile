import React, { useState } from 'react';
import { Text, View, StyleSheet, StyleProp } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import { globalColors } from '../../../theme/theme';
import { PrimaryButton } from '../../../components/shared/PrimaryButton';
import { DateTimeCita } from '../../../components/shared/DateTimeCita';

export const Agent = () => {


    const arr = [  //arreglo de citas 
        {

            hospital: "Hospital Roberto Huembe",
            date: "Miércoles 17 de Enero",
            time: "10:00 AM",
            estado: "Reasignada",
        },
        {

            hospital: "Clínica Dental Central",
            date: "Viernes 20 de Enero",
            time: "10:00 AM",
            estado: "Aceptada",
        },
        {

            hospital: "Hospital Metropolitano",
            date: "Lunes 22 de Enero",
            time: "10:00 AM",
            estado: "Revisión",
        },
    ]
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
                style={{
                    inputAndroid: styles.inputAndroid
                }}
                placeholder={{
                    label: 'Seleccione una opción...',
                    value: null,
                    color: '#0094B6',
                }}
            />

            <PrimaryButton
                label='Ver Historial de Citas'
                onPress={() => (console.log("hola"))}
                style={{
                    position: 'relative',
                    top: 50,
                    width: "50%",
                    justifyContent: 'center',
                
                }}
            />
            {
                arr.map((i, index) => (
                    <View
                        key={`${i.hospital}-${index}`}
                        style={{padding:10, position:'relative', bottom:20}}
                    >
                        <DateTimeCita
                            Hospital={i.hospital}
                            Estado={i.estado}
                            fecha={i.date}
                            hora={i.time}
                        />
                    </View>

                ))

            }

        </View>

    );
}
const styles = StyleSheet.create({
    titulo: {
        fontSize: 30,
        color: '#0094B6',
        fontWeight: 'bold',
        left: 48,
        position: 'relative',
        top: 15
    },
    inputAndroid: {
        fontSize: 16,
        color: globalColors.tertiary,
        backgroundColor: '#ffffff',
        marginLeft: 48,
        marginRight: 48,
        position: 'relative',
        top: 30,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 5

    },
});

