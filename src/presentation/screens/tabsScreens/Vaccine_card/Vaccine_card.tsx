import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import { Header } from '../../../components/shared/Header';
//esta es la de vacunas a editar
//hay que poner botones en la parte de arriba
//poner busqueda debajo
//y la flatlist
// a la flatlist poner navegacinon
//hay que poner el .json en el login
//en la parte de la fecha poner un  formato dia, fecha valido, menos del 2010
export const Vaccine_card = () => {
    return (
        <View style={styles.container}>
            <Header />

        </View>
    )
}


const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'flex-start', // arriba
        paddingTop: 160, // more space
        backgroundColor: '#fff',
    },


});