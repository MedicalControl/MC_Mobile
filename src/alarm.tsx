import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Pressable, TextInput } from "react-native";
import * as Notifications from "expo-notifications";
import { useEffect, useState, useRef } from "react";
import { LogBox } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as Speech from 'expo-speech'; // Importar expo-speech

// Ignorar advertencias específicas
LogBox.ignoreLogs(["new NativeEventEmitter"]);
LogBox.ignoreAllLogs();

// Definición del componente AlarmClock con TypeScript
export default function AlarmClock(): JSX.Element {
  const [notificationId, setNotificationId] = useState<string>("none");
  const [hourr, setHour] = useState<string>("");
  const [minutee, setMinute] = useState<string>("");
  const [ampm, setAmpm] = useState<string>("");

  useEffect(() => {
    getData();
    return () => {
      Notifications.cancelAllScheduledNotificationsAsync();
    };
  }, []);

  async function speak(text: string) {
    Speech.speak(text, {
      language: 'es', // Cambiar al idioma deseado
      rate: 1.0, // Velocidad de la voz
      pitch: 1.0, // Tono de la voz
    });
  }

  async function scheduleAlarm(): Promise<void> {
    const newHour = parseInt(hourr) + (ampm === "pm" && parseInt(hourr) < 12 ? 12 : 0);
    const newMinute = parseInt(minutee);
    
    const triggerDate = new Date();
    triggerDate.setHours(newHour);
    triggerDate.setMinutes(newMinute);
    triggerDate.setSeconds(0);
    
    if (triggerDate > new Date()) {
      const identifier = await Notifications.scheduleNotificationAsync({
        content: {
          title: "Alarm",
          body: "It's time to wake up!",
        },
        trigger: {
          seconds: Math.floor((triggerDate.getTime() - Date.now()) / 1000),
        },
      });
      setNotificationId(identifier);
      storeData(identifier);
      // Esperar hasta que la notificación se dispare para reproducir el sonido
      setTimeout(() => speak("Recuerda que tienes una cita a las 8 de la mañana el martes"), Math.floor((triggerDate.getTime() - Date.now()))); // Reproduce el sonido a la hora programada
    } else {
      alert("Please set a future time.");
    }
  }

  async function turnOffAlarm(): Promise<void> {
    if (notificationId !== "none") {
      await Notifications.cancelAllScheduledNotificationsAsync();
      setNotificationId("none");
      storeData("none");
    } else {
      alert("Alarm already turned off");
    }
  }

  async function storeData(id: string): Promise<void> {
    try {
      await AsyncStorage.setItem("currentAlarmId", JSON.stringify(id));
    } catch (e) {
      alert(e);
    }
  }

  async function getData(): Promise<void> {
    try {
      const jsonValue = await AsyncStorage.getItem("currentAlarmId");
      if (jsonValue) {
        const parsedValue = JSON.parse(jsonValue);
        setNotificationId(parsedValue);
      }
    } catch (e) {
      alert(e);
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Alarm App</Text>
      <TextInput
        style={styles.textInput}
        placeholder="Enter hour (1-12)"
        value={hourr}
        onChangeText={(text) => setHour(text)}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.textInput}
        placeholder="Enter minute (0-59)"
        value={minutee}
        onChangeText={(text) => setMinute(text)}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.textInput}
        placeholder="Enter am or pm"
        value={ampm}
        onChangeText={(text) => setAmpm(text.toLowerCase())}
      />
      <Pressable style={styles.button} onPress={scheduleAlarm}>
        <Text style={styles.buttonText}>Turn on Alarm</Text>
      </Pressable>
      <Pressable style={styles.button} onPress={turnOffAlarm}>
        <Text style={styles.buttonText}>Turn off Alarm</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    color: "green",
    margin: 20,
    fontSize: 60,
    fontWeight: "bold",
  },
  button: {
    width: "70%",
    backgroundColor: "green",
    borderRadius: 18,
    margin: 15,
    padding: 5,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
    fontSize: 35,
    fontWeight: "bold",
  },
  textInput: {
    fontSize: 30,
    margin: 5,
  },
});
