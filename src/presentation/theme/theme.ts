import { StyleSheet } from "react-native"


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
        marginBottom : 20,
        width: '100%',
        alignItems: 'center'
    },
    button_Text: {
        color: globalColors.background,
        fontSize: 20
    },
    

})