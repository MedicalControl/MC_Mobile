import React, { useState } from 'react';
import { Text, View, Modal, TouchableOpacity, ScrollView, Pressable, StyleSheet } from 'react-native';
import { Header } from '../../../components/shared/Header';
import DatePicker from 'react-native-modern-datepicker';
import { getFormatedDate } from 'react-native-modern-datepicker';
import { IonIcon } from '../../../components/shared/Ionicon';

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

  return (
    <View style={{ flex: 1 }}>
      <Header />
      <ScrollView contentContainerStyle={{ paddingBottom: 100 }}>
        <View style={styles.centeredView}>
          <Pressable onPress={handleOnPress} style={styles.calendarButton}>
            <Text style={styles.calendarButtonText}>Calendario</Text>
            <IonIcon name='chevron-down-sharp' size={20} color='#545454' />
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
                  <TouchableOpacity onPress={handleOnPress}>
                    <Text>Close</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </Modal>
          </Pressable>
        </View>

        <View style={{ padding: 20, marginTop: calendarOpen ? 320 : 10 }}>
          <View style={styles.appointmentContainer}>
            <View style={styles.iconContainer}>
              <IonIcon name="calendar-outline" size={20} color="#545454" />
              <IonIcon name="time-outline" size={20} color="#545454" />
            </View>
            <View style={{ marginLeft: 10 }}>
              <Text style={styles.titleText}>Cita médica</Text>
              <Text style={styles.descriptionText}>Hospital Roberto Huembe</Text>
              <Text style={styles.descriptionText}>Miércoles 17 de Enero</Text>
              <Text style={styles.descriptionText}>8:00 AM - 10:00 AM</Text>
            </View>
            <View style={styles.forwardIcon}>
              <IonIcon name="chevron-forward-outline" size={17} color="#545454" />
            </View>
          </View>

          <View style={styles.appointmentContainer}>
            <View style={styles.iconContainer}>
              <IonIcon name="calendar-outline" size={20} color="#545454" />
              <IonIcon name="time-outline" size={20} color="#545454" />
            </View>
            <View style={{ marginLeft: 10 }}>
              <Text style={styles.titleText}>Retiro de medicamentos</Text>
              <Text style={styles.descriptionText}>Hospital Roberto Huembe</Text>
              <Text style={styles.descriptionText}>Miércoles 28 de Enero</Text>
              <Text style={styles.descriptionText}>8:00 AM - 4:00 PM</Text>
            </View>
            <View style={styles.forwardIcon}>
              <IonIcon name="chevron-forward-outline" size={17} color="#545454" />
            </View>
          </View>
        </View>
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
  appointmentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f8f8f8',
    padding: 20,
    borderRadius: 10,
    marginVertical: 10,
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
  titleText: {
    fontSize: 18,
    fontWeight: 'bold', //los de las citas texto grande
    color: '#545454'
  },
  descriptionText: {
    fontSize: 14, //los de las citas
    color: '#545454',
  },
  forwardIcon: {
    marginLeft: 'auto',  //los iconos que van a otra cosa
  },
  menuContainer: {
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
    shadowColor: '#000',
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
    backgroundColor: '#0094B6',
  },
  dayButtonInactive: {
    backgroundColor: '#ffff',
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
    backgroundColor: '#0094B6',
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
    backgroundColor: '#ffff',
    borderRadius: 7,
    borderColor: '#545454',
    borderWidth: 1, // Añade el ancho del borde
  },
  saveButton: {
    flex: 1,
    backgroundColor: '#0094B6',
    padding: 10,
    borderRadius: 7,
    alignItems: 'center',  //save btn
    marginLeft: 5,

  },
  saveButtonText: {
    color: '#ffff',
    fontWeight: 'bold',  //txt de save btn
  },
  cancelButtonText: {
    color: '#545454',  //texto del btn cancelar
    fontWeight: 'bold',

  },
  floatingButton: {
    position: 'absolute', //menu flotante azul
    bottom: 130,
    right: 30,
    backgroundColor: '#0094B6',
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

