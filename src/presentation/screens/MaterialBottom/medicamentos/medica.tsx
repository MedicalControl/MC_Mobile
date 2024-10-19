import React from 'react';
import { Text, View, StyleSheet, ScrollView, Image } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { ThreeButton } from '../../../components/shared/ThreeButton';


const arr = [
    {
        name: "Acetominafen",
        frecuency: 8,
        dose: "5 dosis mg"
    },
    {
        name: "Malta",
        frecuency: 8,
        dose: "10 dosis mg"
    },
    {
        name: "Ibuprofeno",
        frecuency: 6,
        dose: "15 dosis mg"
    },
    {
        name: "Paracetamol",
        frecuency: 12,
        dose: "20 dosis mg"
    },
];

export const Medical = () => {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            {
                arr.map((i, index) => (
                    <View
                        key={`${i.name}-${index}`}
                        style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <ThreeButton
                            medication_name={i.name}
                            frecuency={i.frecuency}
                            dose={i.dose}
                            name_2='alarm-outline'
                            size_2={25}
                            color_2='black'
                        />
                    </View>
                ))
            }
        </ScrollView>
    );
};

//estilos
const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    titulo: {
        fontSize: 27,
        color: '#0094B6',
        fontWeight: 'bold',
        textAlign: 'left',
        marginLeft: 20,
    },
    resultadoContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        padding: 15,
        borderRadius: 10,
        marginVertical: 10,
        elevation: 3,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
    },
    icono: {
        width: 40,
        height: 40,
        marginRight: 15,
    },
    textContainer: {
        flex: 1,
    },
    tituloExamen: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 4,
        color: "#545454",
    },
    subtitulo: {
        fontSize: 14,
        color: '#545454',
    },
    iconoReloj: {
        marginLeft: 10,
    },
});
