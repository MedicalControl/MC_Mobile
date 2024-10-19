import React, { useState } from 'react';
import { Text, View, Modal, TouchableOpacity, ScrollView, Pressable, StyleSheet } from 'react-native';
import { Header } from '../../../components/shared/Header';
import { getFormatedDate } from 'react-native-modern-datepicker';
import { IonIcon } from '../../../components/shared/Ionicon';
import { Calendar } from '../../../components/shared/Calendar';
import { DateTimeCita } from '../../../components/shared/DateTimeCita';
import { globalColors } from '../../../theme/theme';

const today: Date = new Date();
today.setDate(today.getDate() + 1);
const startDate: string = getFormatedDate(today, 'DD/MM/YYYY');

export const Medical_appointments = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [date, setDate] = useState<string>('13/10/2024');
  const [menuVisible, setMenuVisible] = useState<boolean>(false);
  const [calendarOpen, setCalendarOpen] = useState<boolean>(false);
  const [selectedDay, setSelectedDay] = useState<number | null>(null);
  const [selectedHour, setSelectedHour] = useState<string | null>(null);
  const [buttonsEnabled, setButtonsEnabled] = useState<boolean>(false); // estado para controlar los botones, los colores de act / inactivo

  function handleOnPress() {
    setOpen(!open);
    setCalendarOpen(!calendarOpen);
  }

  function handleDateChange(propDate: string) {
    setDate(propDate);
  }

  function toggleMenu() {
    setMenuVisible(!menuVisible);
  }

  function selectDate(dayOffset: number) {
    const newDate = new Date();
    newDate.setDate(today.getDate() + dayOffset);
    const formattedDate = getFormatedDate(newDate, 'DD/MM/YYYY');
    setDate(formattedDate);
    setSelectedDay(dayOffset);
    setButtonsEnabled(true); // activar botones al tocar una fecha
  }

  function selectHour(hour: string) {
    setSelectedHour(hour);
    setButtonsEnabled(true); // activar botones al tocar hora
  }

  const dayNames = ['Lunes', 'Martes', 'Miércoles', 'Viernes', 'Sábado'];
  const dayDates = ['13', '14', '17', '18', '19'];

  const hourOptions = [
    '07:00 AM', '08:00 AM', '09:00 AM', '10:00 AM',
    '11:00 AM', '12:00 PM', '01:00 PM', '02:00 PM',
    '03:00 PM', '04:00 PM'
  ];
  const arr = [  //arreglo de citas 
    {
        hospital: "Hospital Roberto Huembe",
        date: "Miércoles 17 de Enero",
        time: "10:00 AM",
        estado: "Reasignada",
    },
    {
        hospital: "Clínica Dental Central",
        date: "Viernes 20 de Enero",
        time: "10:00 AM",
        estado: "Aceptada",
    },
    {

        hospital: "Hospital Metropolitano",
        date: "Lunes 22 de Enero",
        time: "10:00 AM",
        estado: "Revisión",
    },
]
  return (
    <View style={{ flex: 1 }}>
      <Header />
      <ScrollView contentContainerStyle={{ paddingBottom: 100 }}>
        <View style={styles.centeredView}>
          <Pressable onPress={handleOnPress} style={styles.calendarButton}>
            <Text style={styles.calendarButtonText}>Calendario</Text>
            <IonIcon name='chevron-down-sharp' size={20} color='#545454' />
            <Calendar
              handleDateChange={handleDateChange}
              handleOnPress={handleOnPress}
              open={open}
              startDate={startDate}
            />
          </Pressable>
        </View>

        {!calendarOpen ? (
          <>
            {
              arr.map((i, index) => (
                <View
                  key={`${i.hospital}-${index}`}
                  style={{ padding: 20 }}>
                  <DateTimeCita
                    Hospital={i.hospital}
                    Estado={i.estado}
                    fecha={i.date}
                    hora={i.time}
                  />
                </View>
              ))
            }
          </>
        ) : (
          <Text></Text>
        )}

      </ScrollView>


      <Modal visible={menuVisible} animationType="slide" transparent={true}>
        <View style={{ flex: 1, justifyContent: 'flex-end' }}>
          <View style={styles.menuContainer}>
            <Text style={styles.menuText}>Selecciona la fecha y la hora</Text>

            <View style={styles.buttonContainer}>
              {dayNames.map((day, index) => (
                <TouchableOpacity
                  key={index}
                  onPress={() => selectDate(index)}
                  style={[styles.dayButton, selectedDay === index ? styles.dayButtonActive : styles.dayButtonInactive]}
                >
                  <Text style={[styles.dayButtonText, selectedDay === index && { color: 'white' }]}>{day}</Text>
                  <Text style={[styles.dayDateText, selectedDay === index ? { color: 'white' } : { color: '#545454' }]}>{dayDates[index]}</Text>
                </TouchableOpacity>
              ))}
            </View>
            <ScrollView style={styles.hourScrollContainer}>
              {hourOptions.map((hour, index) => (
                <TouchableOpacity
                  key={index}
                  onPress={() => selectHour(hour)}
                  style={[styles.hourButton, selectedHour === hour ? styles.hourButtonActive : styles.hourButtonInactive]}
                >
                  <Text style={[styles.hourButtonText, selectedHour === hour && { color: 'white' }]}>{hour}</Text>
                </TouchableOpacity>
              ))}
            </ScrollView>

            <View style={styles.actionButtonsContainer}>
              <TouchableOpacity
                onPress={() => {
                  setMenuVisible(false);
                  setButtonsEnabled(false); // Desactivar btns al cancelar
                  setSelectedDay(null); // Reiniciar dia
                  setSelectedHour(null); // Reiniciar hra
                }}
                style={styles.cancelButton}
              >
                <Text style={styles.cancelButtonText}>Cancelar</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  setMenuVisible(false); // Cierra el menú
                }}
                style={[styles.saveButton, !buttonsEnabled && styles.disabledButton]} // descativar btn
              >
                <Text style={styles.saveButtonText}>Confirmar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>

      <TouchableOpacity style={styles.floatingButton} onPress={toggleMenu}>
        <Text style={styles.floatingButtonText}>+</Text>
      </TouchableOpacity>
    </View>
  );
};
//te comentareo los estilos melanie por cualquier cosa

const styles = StyleSheet.create({
  centeredView: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  calendarButton: {
    marginTop: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 8,
    width: '80%',
    elevation: 2,
  },
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

  menuContainer: {
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
    shadowColor: globalColors.dark,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  menuText: {
    fontWeight: 'bold',
    fontSize: 18,  //texto del menu desplazante
    marginBottom: 10,
    color: '#545454'
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  dayButton: {
    alignItems: 'center',
    padding: 10,
    borderRadius: 5,  //es el btn general
    flex: 1,
    margin: 2,
  },
  dayButtonActive: {   //boton de dia activo
    backgroundColor: globalColors.tertiary,
  },
  dayButtonInactive: {
    backgroundColor: globalColors.background,
    borderRadius: 7,
    borderColor: '#545454',
    borderWidth: 1, // boton de dia sin tocar
  },
  dayButtonText: {
    fontWeight: 'bold',  //texto del dia
    color: '#545454'
  },
  dayDateText: {  //texto de la fecha en el boton
    fontSize: 12,
    color: '#545454'
  },
  hourScrollContainer: {
    maxHeight: 150,
    marginBottom: 20,  //el scroll de las horas
  },
  hourButton: {
    padding: 10,
    borderRadius: 5,  //btn general de horas
    marginVertical: 5,
  },
  hourButtonActive: {   //btn hras tocando
    backgroundColor: globalColors.tertiary,
  },
  hourButtonInactive: {
    backgroundColor: '#f0f0f0',  //btn horas sin tocar
  },
  hourButtonText: {
    textAlign: 'center',  //texto de las horas
    color: '#545454'
  },
  actionButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cancelButton: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
    marginRight: 5,   //cancel btn
    backgroundColor: globalColors.background,
    borderRadius: 7,
    borderColor: '#545454',
    borderWidth: 1, // Añade el ancho del borde
  },
  saveButton: {
    flex: 1,
    backgroundColor: globalColors.tertiary,
    padding: 10,
    borderRadius: 7,
    alignItems: 'center',  //save btn
    marginLeft: 5,

  },
  saveButtonText: {
    color: globalColors.background,
    fontWeight: 'bold',  //txt de save btn
  },
  cancelButtonText: {
    color: '#545454',  //texto del btn cancelar
    fontWeight: 'bold',

  },
  floatingButton: {
    position: 'absolute', //menu flotante azul
    bottom: 100,
    right: 30,
    backgroundColor: globalColors.tertiary,
    width: 55,
    height: 55,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 5,
  },
  floatingButtonText: {  //texto del menu flotante
    color: 'white',
    fontSize: 25,
  },
  disabledButton: { // Estilo de confirmar cuando nadie lo toca
    backgroundColor: 'lightgray',
  },
});