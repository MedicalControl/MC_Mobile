import { Pressable, StyleProp, Text, View, ViewStyle, StyleSheet, Image } from 'react-native';
import { globalColors, globalStyles } from "../../theme/theme";
import Icon from 'react-native-vector-icons/Ionicons';
import { IonIcon } from './Ionicon';


//Interface
interface Props {

    medication_name: string;
    frecuency: number;
    dose: string
    style?: StyleProp<ViewStyle>;
    name_2: string;
    size_2: number;
    color_2: string;


}

export const ThreeButton = ({ medication_name, style, dose, name_2, size_2, color_2, frecuency }: Props) => {

    return (

        <Pressable
            style={globalStyles.three_Button}>
            <View style={styles.iconBox}>
                <Image 
                source={require('../../assets/Pill.png')}
                style = {{width: 40, height: 40}}
                />

            </View>

            <View style={{ bottom: 5, right: 30, flex: 1 }}>
                <Text style={{ fontSize: 25, fontWeight: 'bold' }}>{medication_name}</Text>
                <Text style={{ color: '#82A0AA', fontWeight: 'bold' }}>Frecuencia: <Text style={{ color: 'black' }}>{frecuency}</Text></Text>
                <Text style={{ color: '#82A0AA', fontWeight: 'bold' }}>Dosis restante: <Text style={{ color: 'black' }}>{dose}</Text></Text>
            </View>

            <View style={{ position: 'relative', right: 10 }}>
                <IonIcon
                    name={name_2}
                    size={size_2}
                    color={color_2}
                />
            </View>
        </Pressable>

    )
}

const styles = StyleSheet.create({
    iconBox: {
        width: 70,
        height: 70,
        backgroundColor: globalColors.items,  // Color de fondo del cuadro
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 50,
        elevation: 2
    },
}


)
