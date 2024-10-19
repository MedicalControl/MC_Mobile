import React from 'react';
import { Text, View, StyleSheet, ScrollView, Image } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';  

export const Medical = () => {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.titulo}>Medicamentos</Text>

            <View style={styles.resultadoContainer}>
                <Image
                    source={{ uri: 'https://img.icons8.com/color/96/000000/pill.png' }}  
                    style={styles.icono}
                />
                <View style={styles.textContainer}>
                    <Text style={styles.tituloExamen}>Paracetamol 750 mg</Text>
                    <Text style={styles.subtitulo}>Aztra Zeneca</Text>
                    <Text style={styles.subtitulo}>Esemeprazol</Text>
                </View>
                <Ionicons name="alarm-outline" size={23} color="#545454" style={styles.iconoReloj} /> 
            </View>
            <View style={styles.resultadoContainer}>
                <Image
                    source={{ uri: 'https://img.icons8.com/color/96/000000/cream-tube.png' }}  
                    style={styles.icono}
                />
                <View style={styles.textContainer}>
                    <Text style={styles.tituloExamen}>Acetaminafén 500 mg</Text>
                    <Text style={styles.subtitulo}>Aztra Zeneca</Text>
                    <Text style={styles.subtitulo}>Esemeprazol</Text>
                </View>
                <Ionicons name="alarm-outline" size={23} color="#545454" style={styles.iconoReloj} />  
            </View>
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
