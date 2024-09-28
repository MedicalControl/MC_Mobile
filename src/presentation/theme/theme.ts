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
        color: '#66696E',
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

    Text_Style : {
        color : 'black',
        fontWeight : 'bold',
        fontSize : 45
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