import { Pressable, StyleProp, Text, View, ViewStyle, StyleSheet, Image, Dimensions } from 'react-native';
import { globalColors, globalStyles } from "../../theme/theme";
import { IonIcon } from './Ionicon';



const { width } = Dimensions.get('window');

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
            style={[globalStyles.three_Button, { padding: width * 0.02 }]}>
            <View style={styles.iconBox}>
                <Image
                    source={{ uri: 'https://img.icons8.com/color/96/000000/pill.png' }}
                    style={{ width: width * 0.1, height: width * 0.1, justifyContent: 'center' }}
                />
            </View>

            <View style={{ bottom: 5, right: width * 0.08, flex: 1 }}>
                <Text style={{ fontSize: 25, fontWeight: 'bold' }}>{medication_name}</Text>
                <Text style={{ color: '#82A0AA', fontWeight: 'bold', fontSize: width * 0.045 }}>Frecuencia: <Text style={{ color: 'black' }}>{frecuency}</Text></Text>
                <Text style={{ color: '#82A0AA', fontWeight: 'bold', fontSize: width * 0.038 }}>Dosis restante: <Text style={{ color: 'black' }}>{dose}</Text></Text>
            </View>

            <View style={{ position: 'relative', right: width * 0.02 }}>
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
        width: width * 0.18,
        height: width * 0.18,
        backgroundColor: globalColors.background,  // Color de fondo del cuadro
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: width * 0.12,
        elevation: 2
    },
}


)
