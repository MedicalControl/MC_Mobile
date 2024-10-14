import { View, Pressable, Modal, Text, StyleSheet } from "react-native"
import { IonIcon } from "./Ionicon"
import DatePicker from 'react-native-modern-datepicker';
import { getFormatedDate } from "react-native-modern-datepicker";
import { useState } from "react";

const today: Date = new Date();
today.setDate(today.getDate() + 1);
const startDate: string = getFormatedDate(today, 'DD/MM/YYYY');


interface PropsPicker {
    open: boolean;
    startDate: string;
    handleOnPress: () => void;
    handleDateChange: (date: string) => void;
}

export const Calendar = ({open,  startDate, handleDateChange, handleOnPress}:PropsPicker) => {
    const [date,setDate] = useState<string>('13/10/2024');
    return (
        <Modal
            animationType='fade'
            transparent={true}
            visible={open}
        >
            <View style={styles.modalContainer}>
                <View style={styles.datePickerContainer}>
                    <DatePicker
                        mode="calendar"
                        minimumDate={startDate}
                        selected={date}
                        onDateChange={handleDateChange}
                        onSelectedChange={(date: string) => setDate(date)}
                        options={{
                            backgroundColor: '#FFFFFF',
                            textHeaderColor: '#469ab6',
                            textDefaultColor: 'black',
                            selectedTextColor: '#FFF',
                            mainColor: '#2AB9B7',
                            textSecondaryColor: '#2AB9B7',
                            borderColor: 'rgba(122,146,165,0.1)',
                        }}
                    />
                    {/* Botón para cerrar el DatePicker */}
                    <Pressable onPress={handleOnPress}>
                        <Text>Close</Text>
                    </Pressable>
                </View>
            </View>
        </Modal>

    )
}


const styles = StyleSheet.create({

    calendarButtonText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#545454'
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    datePickerContainer: {
        position: 'relative',
        bottom: 150,
        margin: 10,
        backgroundColor: 'white',
        borderRadius: 8,
        padding: 20,
        width: '60%',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 1,
    },
})