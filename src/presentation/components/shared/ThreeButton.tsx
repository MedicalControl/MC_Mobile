import { Pressable, StyleProp, Text, View, ViewStyle, StyleSheet, Image, Alert } from 'react-native';
import { globalColors, globalStyles } from "../../theme/theme";
import { IonIcon } from './Ionicon';
import { useState } from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';
import * as Notifications from 'expo-notifications';
import { scheduleFlushOperations } from 'react-native-gesture-handler/lib/typescript/handlers/gestureHandlerCommon';


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

    const [showTimePicker, setShowTimePicker] = useState(false);
    const [selectedTime, setSelectedTime] = useState<Date | null>(null);

    const onSetAlarm = () => {
        setShowTimePicker(true);
    };

    const onTimeChange = (event: any, selectedTime: Date | undefined) => {
        setShowTimePicker(false);
        if (selectedTime) {
            setSelectedTime(selectedTime);
            scheduleTodoNotification(medication_name, selectedTime)
        }
    };

    const scheduleTodoNotification = async (medication: string, date: Date) => {
    
        try {
            await Notifications.scheduleNotificationAsync({
                content: {
                    title: 'vos hpta tomate la m',
                    body: 'Recuerda tomar tus dosis :D'
                },
                trigger: {
                    date,
                    repeats: false
                },
            });
            Alert.alert("Notificacion programada");
        } catch (e) {
            Alert.alert("Errorno sirve su porra");
        }
    };

    return (

        <Pressable
            style={globalStyles.three_Button}>
            <View style={styles.iconBox}>
                <Image
                    source={require('../../assets/Pill.png')}
                    style={{ width: 40, height: 40 }}
                />

            </View>

            <View style={{ bottom: 5, right: 30, flex: 1 }}>
                <Text style={{ fontSize: 25, fontWeight: 'bold' }}>{medication_name}</Text>
                <Text style={{ color: '#82A0AA', fontWeight: 'bold' }}>Frecuencia: <Text style={{ color: 'black' }}>{frecuency}</Text></Text>
                <Text style={{ color: '#82A0AA', fontWeight: 'bold' }}>Dosis restante: <Text style={{ color: 'black' }}>{dose}</Text></Text>
            </View>

            <View style={{ position: 'relative', right: 10 }}>

                <Pressable onPress={onSetAlarm}>
                    <IonIcon
                        name={name_2}
                        size={size_2}
                        color={color_2}
                    />
                </Pressable>
                {
                    showTimePicker && (
                        <DateTimePicker
                            mode="time"
                            value={selectedTime || new Date()}
                            is24Hour={true}
                            display='clock'
                            onChange={onSetAlarm}

                        />
                    )

                }

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