import { StyleSheet, useWindowDimensions } from "react-native"
import { useSafeAreaInsets } from "react-native-safe-area-context";



export const globalColors = {
    primary: '#2AB9B7',
    secondary: '#f72585',
    tertiary: '#3a0ca3',
    success: '#4cc9f0',
    warning: '#fca311',
    danger: '#e71d36',
    dark: '#22223b',
    background: '#fff'
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
        height: '50%',
        width : '80%',
        backgroundColor: '#f5f5f5', // Color de fondo del cuadro
        borderRadius: 10,
        marginVertical: 5,
    },

})