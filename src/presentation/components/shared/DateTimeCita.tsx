import { View, Text } from 'react-native';
import { IonIcon } from './Ionicon'
import { StyleSheet } from 'react-native'
import { globalColors } from '../../theme/theme';


interface Props {

    asunto: string;
    Hospital: string;
    fecha: string;
    hora: string;


}


export const DateTimeCita = ({ asunto, Hospital, fecha, hora }: Props) => {
    return (
        <View style={styles.appointmentContainer}>
            <View style={styles.iconContainer}>
                <IonIcon name="calendar-outline" size={20} color="#545454" />
                <IonIcon name="time-outline" size={20} color="#545454" />
            </View>
            <View style={{ marginLeft: 10 }}>
                <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#545454' }}>{asunto}</Text>
                <Text style={{ fontSize: 14, color: '#545454' }}>{Hospital}</Text>
                <Text style={{ fontSize: 14, color: '#545454' }}>{fecha}</Text>
                <Text style={{ fontSize: 14, color: '#545454' }}>{hora}</Text>
            </View>
            <View style={{ marginLeft: 'auto' }}>
                <IonIcon name="chevron-forward-outline" size={17} color="#545454" />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({

    appointmentContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#f8f8f8',
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

})
