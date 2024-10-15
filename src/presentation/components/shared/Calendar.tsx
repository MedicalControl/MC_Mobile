import { View, Pressable, Modal, Text, StyleSheet, Button } from 'react-native';
import { IonIcon } from "./Ionicon"
import DatePicker from 'react-native-modern-datepicker';
import { getFormatedDate } from "react-native-modern-datepicker";
import { useState } from "react";
import { globalColors } from "../../theme/theme";

const today: Date = new Date();
today.setDate(today.getDate() + 1);
const startDate: string = getFormatedDate(today, 'DD/MM/YYYY');


interface PropsPicker {
    open: boolean;
    startDate: string;
    handleOnPress: () => void;
    handleDateChange: (date: string) => void;
}

export const Calendar = ({ open, startDate, handleDateChange, handleOnPress }: PropsPicker) => {
    const [date, setDate] = useState<string>('13/10/2024');
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
                            textHeaderColor: globalColors.tertiary,
                            textDefaultColor: 'black',
                            selectedTextColor: '#FFF',
                            mainColor: globalColors.tertiary,
                            textSecondaryColor: globalColors.tertiary,
                            borderColor: 'rgba(120,146,165,0.1)',
                        }}
                    />
                    <Pressable onPress={handleOnPress} style={{position:'relative', bottom:20}}>
                        <Text>Cerrar</Text>
                    </Pressable>
                </View>
            </View>
        </Modal>

    )
}


const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    datePickerContainer: {
        position: 'relative',
        bottom: 125,
        margin: 10,
        backgroundColor: 'white',
        borderRadius: 8,
        padding: 20,
        width: 320,
        height:320,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 1,
    },
})