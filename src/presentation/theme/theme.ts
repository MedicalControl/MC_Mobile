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
        backgroundColor: globalColors.background,
    },
    primary_Button: {
        backgroundColor: globalColors.primary,
        borderRadius: 5,
        padding: 10,
        marginBottom: 10,
        width: '100%',
        alignItems: 'center',
    },
    button_Text: {
        fontSize: 14,
        color: '#fff',
        fontWeight: 'bold',
    },
    button_mine: {
        height: 45,
        backgroundColor: '#00B7EB',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        width: 150,
        alignSelf: 'center',
        marginBottom: 70,
    },
    container2: {
        flex: 1,
        justifyContent: 'flex-start',
        paddingHorizontal: 20,
        paddingTop: 20,
        backgroundColor: '#fff',

    },
    inputContainer: {
        marginTop: 10,
    },
    //de aca cambie
    label0: {
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 60,
        left: 30

    },
    label: {
        fontSize: 16,
        fontWeight: 'bold',
        marginTop:25,
        left: 30

    },
    label2: {
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 30,
        left: 28,

    },
    label3: {
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 10,
        left: 28,

    },
    label4: {
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 10,

        left: 30,
    },
    input: {
        height: 40,
        borderBottomWidth: 1,
        borderBottomColor: '#000',
        fontSize: 16,
        paddingHorizontal: 0,
        marginBottom: 80,
        width: 370,

    },
    input2: {
        height: 40,
        borderBottomWidth: 1,
        borderBottomColor: '#000',
        fontSize: 16,
        marginBottom: 80,
        width: 300,
        marginHorizontal: 5,


    },
    input3: {
        height: 40,
        borderBottomWidth: 1,
        borderBottomColor: '#000',
        fontSize: 16,
        marginBottom: 80,
        width: 300,
        marginHorizontal: 5,
    },
    input4: {
        height: 40,
        borderBottomWidth: 1,
        borderBottomColor: '#000',
        fontSize: 16,
        paddingHorizontal: 0,
        marginBottom: 80,
        width: 300,
    },
    tittle: {
        fontSize: 25,
        fontWeight: 'bold',
        marginBottom: 80,
    },
    opc: {
        height: 100,
        backgroundColor: '#00B7EB',
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        width: 350,
        alignSelf: 'center',
        marginBottom: -10,
        marginTop: -10,
        borderColor: '#ccc',


    },
    opcText: {
        fontSize: 14,
        color: '#fff',
        fontWeight: 'bold',
        top: 10
    },

});