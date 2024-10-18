import React from 'react';
import { Text, View, StyleSheet, ScrollView, Image } from 'react-native';

export const resultados = () => {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.titulo}>Resultados de</Text>
            <Text style={[styles.titulo, styles.espacioReducido]}>Laboratorio</Text>


            <View style={styles.resultadoContainer}>
                <Image
                    source={{ uri: 'https://img.icons8.com/color/96/000000/urine-collection.png' }}
                    style={styles.icono}
                />
                <View style={styles.textContainer}>
                    <Text style={styles.tituloExamen}>Examen de Orina</Text>
                    <Text style={styles.subtitulo}>Realizado en el Hospital Militar</Text>
                    <Text style={styles.subtitulo}>16/10/24 10:30 am</Text>
                </View>
            </View>


            <View style={styles.resultadoContainer}>
                <Image
                    source={{ uri: 'https://img.icons8.com/color/96/000000/poo.png' }}
                    style={styles.icono}
                />
                <View style={styles.textContainer}>
                    <Text style={styles.tituloExamen}>Examen de Heces</Text>
                    <Text style={styles.subtitulo}>Realizado en el Hospital Militar</Text>
                    <Text style={styles.subtitulo}>10/10/24  2:00 pm</Text>
                </View>
            </View>


            <View style={styles.resultadoContainer}>
                <Image
                    source={{ uri: 'https://img.icons8.com/color/96/000000/test-tube.png' }}
                    style={styles.icono}
                />
                <View style={styles.textContainer}>
                    <Text style={styles.tituloExamen}>Examen de Sangre</Text>
                    <Text style={styles.subtitulo}>Realizado en el Hospital Militar</Text>
                    <Text style={styles.subtitulo}>06/10/24  11:30 am</Text>
                </View>
            </View>
        </ScrollView>
    );
};

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
    espacioReducido: {
        marginTop: -10,
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
        color:"#545454"
    },
    subtitulo: {
        fontSize: 14,
        color: '#545454',
    },
});
