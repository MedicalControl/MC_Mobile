import { StyleSheet, useWindowDimensions } from "react-native"
import { useSafeAreaInsets } from "react-native-safe-area-context";



export const globalColors = {
    primary: '#A0E7E5',
    secondary: '#2AB9B7',
    tertiary: '#0094B6',
    success: '#4cc9f0',
    List_item: '#818181',
    letter : '#C0C0C0',
    danger: '#e71d36',
    dark: '#22223b',
    background: '#fff',
    items : '#D3D3D3'
}

export const globalStyles = StyleSheet.create({

    container: {
        flex: 1,
        padding: 20,
        backgroundColor: globalColors.background
    },
    primary_Button: {
        backgroundColor: globalColors.primary,
        borderRadius: 5,
        padding: 10,
        marginBottom: 20,
        width: '100%',
        alignItems: 'center',
        elevation: 5
    },
    button_Text: {
        color: globalColors.background,
        fontSize: 20
    },
    buttonText: {
        color: globalColors.dark,
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    three_Button: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        width : '80%',
        backgroundColor: '#fff', // Color de fondo del cuadro
        borderRadius: 10,
        marginVertical: 20,
        elevation : 2
    },

})