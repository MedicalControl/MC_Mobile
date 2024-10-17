import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Pressable, TextInput } from "react-native";
import * as Notifications from "expo-notifications";
import { useEffect, useState, useRef } from "react";
import { LogBox } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

// Ignorar advertencias específicas
LogBox.ignoreLogs(["new NativeEventEmitter"]);
LogBox.ignoreAllLogs();

// Configuración de manejo de notificaciones
Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldPlaySound: false,
    shouldShowAlert: true,
    shouldSetBadge: false,
  }),
});

// Definición del componente AlarmClock con TypeScript
export default function AlarmClock(): JSX.Element {
  const notificationListener = useRef<Notifications.Subscription | null>(null);
  const [notification, setNotification] = useState<Notifications.Notification | boolean>(false);
  const [hourr, setHour] = useState<string>("");
  const [minutee, setMinute] = useState<string>("");
  const [ampm, setAmpm] = useState<string>("");
  const [notificationId, setNotificationId] = useState<string>("none");

  useEffect(() => {
    getData();
    notificationListener.current = Notifications.addNotificationResponseReceivedListener((response) => {
      setNotification(response.notification);
    });
    return () => {
      if (notificationListener.current) {
        Notifications.removeNotificationSubscription(notificationListener.current);
      }
    };
  }, []);

  let date = new Date();
  date.setSeconds(date.getSeconds() + 5);

  async function scheduleNotificationsHandler(): Promise<void> {
    console.log(notificationId);
    if (notificationId === "none") {
      let newHourr = parseInt(hourr);
      if (ampm === "pm") {
        newHourr = newHourr + 12;
      }
      const identifier = await Notifications.scheduleNotificationAsync({
        content: {
          title: "Alarm",
          body: "It is time to wake up!",
          data: { data: "Your morning alarm data" },
        },
        trigger: {
          seconds: 5,
        },
      });
      setAmpm("");
      setHour("");
      setMinute("");
      console.log(date);
      console.log(identifier);
      setNotificationId(identifier);
      storeData(identifier);
    } else {
      alert("Turn off alarm before starting a new one");
      setAmpm("");
      setHour("");
      setMinute("");
      console.log(notificationId);
      console.log("not working");
    }
  }

  async function turnOffAlarm(): Promise<void> {
    console.log(notificationId);
    if (notificationId !== "none") {
      await Notifications.cancelAllScheduledNotificationsAsync();
      const resetValue = "none";
      setNotificationId(resetValue);
      storeData(resetValue);
    } else {
      alert("Alarm already turned off");
      console.log(notificationId);
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
        placeholder="Enter hour"
        value={hourr}
        onChangeText={(text) => setHour(text)}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.textInput}
        placeholder="Enter minute"
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
      <Pressable style={styles.button} onPress={scheduleNotificationsHandler}>
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
