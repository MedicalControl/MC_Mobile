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
    button_Text: {
        fontSize: 15,
        color: '#fff',
        fontWeight: 'bold',
    },
    button_mine: {
        height: 48,
        backgroundColor: '#2AB9B7',
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
        width: 150,
        alignSelf: 'center',
        marginBottom: 95,
        marginTop: 15, // space
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
   
    label0: {
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 60,
        left: 30,
        color: '#66696E'

    },
    label: {
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: -120,
        left: 30,
        color: '#66696E'

    },
    label2: {
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: -120,
        left: 28,
        color: '#66696E'

    },
    label3: {
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: -140,
        left: 28,
        color: '#66696E'

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
        marginBottom: 0, 
        marginTop: -30,  
        width: 370,
    },
    input2: {
        height: 40,
        borderBottomWidth: 1,
        borderBottomColor: '#000',
        fontSize: 16,
        marginBottom: -110,
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
    },//ddel registro 1
    tittle: {
        fontSize: 27,
        fontWeight: 'bold',
        marginBottom: 0,
        left: 20,
        marginTop: 15, 
        color: "#AABCDF"
    },
    tittle2: {
        fontSize: 34,
        fontWeight: 'bold',
        marginBottom: 0, 
        left: 20,
        marginTop: -12, 
        color: "#6FA8DC"
    },
    tittle3: {
        fontSize: 16,

        marginBottom: 0,
        left: 20,
        marginTop: -9,
        color: "#474747"
    },
    tittle4: {
        fontSize: 16,

        marginBottom: -1, 
        left: 20,
        marginTop: -7,
        color: "#474747"
    },
    tittle5: {
        fontSize: 16,
        marginBottom: -1, 
        left: 20,
        marginTop: -3, 
        color: "#474747"
    },

   
});
//ESTOS ESTILOS MEL, LOS USO, EL PRIMARY BUTTON IGUAL, EL PRIMARY BUTTON LO USO EN EL 
//REGISTRO Y 2
//EL BOTON DEL LOGIN ES DIFERENTE
//LAS NAVEGACIONES POR STACK SE QUEDAN
//LA NAVEGACION POR BUTTOMS SE TIENE QUE CAMBIAR CON LO TUYO, POR ENDE LAS SCREENS