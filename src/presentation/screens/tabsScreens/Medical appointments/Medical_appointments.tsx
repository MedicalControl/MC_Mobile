import React, { useState } from 'react';
import { Text, View, Modal, TouchableOpacity, StyleSheet, Pressable, Button } from 'react-native';
import { Header } from '../../../components/shared/Header';
import DatePicker from 'react-native-modern-datepicker';
import { getFormatedDate } from 'react-native-modern-datepicker';
import { IonIcon } from '../../../components/shared/Ionicon';
import { globalStyles } from '../../../theme/theme';


const today: Date = new Date();
today.setDate(today.getDate() + 1); // Ajusta la fecha a mañana
const startDate: string = getFormatedDate(today, 'DD/MM/YYYY'); // Formato de la fecha


export const Medical_appointments = () => {

  const [open, setOpen] = useState<boolean>(false);
  const [date, setDate] = useState<string>('13/10/2024');


  function handleOnPress() {
    setOpen(!open);
  }

  function handleChange(propDate: string) {
    setDate(propDate);
  }


  return (
    <View>
      <Header />
      <View style={{ justifyContent: 'center', alignItems: 'center' }}>
        <Pressable onPress={handleOnPress} style={style.input}>
          <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Calendario</Text>
          <IonIcon
            name='chevron-down-sharp'
            size={20}
            color='black'
          />

          <Modal
            animationType='fade'
            transparent={true}
            visible={open}
          >
            <View style={style.centeredView}>
              <View style={style.modalView}>
                <DatePicker
                  mode="calendar"
                  minimumDate={startDate}
                  selected={date}
                  onDateChange={handleChange}
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
                <TouchableOpacity onPress={handleOnPress}>
                  <Text>Close</Text>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>
        </Pressable>
      </View>
      {/* Modal con el DatePicker */}

    </View>
  )
}


const style = StyleSheet.create({

  input: {
    marginTop:5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 8,
    width: '80%',
    elevation: 2,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    //backgroundColor: 'rgba(0,0,0,0.5)'
  },
  modalView: {
    position:'relative',
    bottom:120,
    margin: 10,
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 20,
    width: '80%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.20,
    shadowRadius: 4,
    elevation:1

  },

})