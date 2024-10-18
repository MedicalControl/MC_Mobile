import { View, Text } from 'react-native';
import { IonIcon } from './Ionicon';
import { StyleSheet } from 'react-native';
import { globalColors } from '../../theme/theme';

interface Props {
    Hospital: string;
    fecha: string;
    hora: string;
    Estado: string;
}

// colores circulitos x switchhhh
const getEstadoColor = (estado: string) => {
    switch (estado) {
        case "Reasignada":
            return { circleColor: "#0094B6", textColor: "#0094B6" };
        case "Aceptada":
            return { circleColor: "#529967", textColor: "#529967" };
        case "Revisión":
            return { circleColor: "#545454", textColor: "#545454" };
        case "Rechazada":
            return { circleColor: "#9F4E4E", textColor: "#9F4E4E" };
        default:
            return { circleColor: "#545454", textColor: "#545454" };
    }
};

// Componente de las cards de citas
export const DateTimeCita = ({ Hospital, fecha, hora, Estado }: Props) => {
    const { circleColor, textColor } = getEstadoColor(Estado); // colores según el estado

    return (
        <View style={styles.appointmentContainer}>
            <View style={styles.iconContainer}>
                <IonIcon name="calendar-outline" size={20} color="#545454" />
                <IonIcon name="time-outline" size={20} color="#545454" />
            </View>
            <View style={{ marginLeft: 10 }}>
                <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#545454' }}>{Hospital}</Text>

                {/* estado con círculito */}
                

                <Text style={{ fontSize: 14, color: '#545454' }}>{fecha}</Text>
                <Text style={{ fontSize: 14, color: '#545454' }}>{hora}</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 4 }}>

                    <View style={{
                        width: 10,
                        height: 10,
                        borderRadius: 5,
                        backgroundColor: circleColor,
                        marginRight: 6, //space 
                    }} />
                    {/* estado text */}
                    <Text style={{ fontSize: 14, color: textColor }}>{Estado}</Text>
                </View>
            </View>
            <View style={{ marginLeft: 'auto' }}>
                <IonIcon name="chevron-forward-outline" size={17} color="#545454" />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    appointmentContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#ffff',
        padding: 10,
        borderRadius: 10,
        justifyContent: 'center',
        elevation: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
    },
    iconContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
});
