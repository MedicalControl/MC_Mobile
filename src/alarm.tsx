// ReminderApp.tsx
import { useEffect, useState } from "react";
import { View, Text } from "react-native";
import * as Notifications from "expo-notifications";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Reminder from "./reminder"; // Importa el componente Reminder

const ReminderApp = () => {
  const [reminderIds, setReminderIds] = useState<string[]>([]);

  const storeReminder = async (id: string) => {
    try {
      const existingIds = await AsyncStorage.getItem("reminderIds");
      const idsArray = existingIds ? JSON.parse(existingIds) : [];
      idsArray.push(id);
      await AsyncStorage.setItem("reminderIds", JSON.stringify(idsArray));
      setReminderIds(idsArray); // Actualizar el estado local
    } catch (e) {
      alert(e);
    }
  };

  const cancelAllReminders = async () => {
    for (const id of reminderIds) {
      await Notifications.cancelScheduledNotificationAsync(id);
    }
    await AsyncStorage.removeItem("reminderIds");
    setReminderIds([]); // Limpiar el estado local
    console.log("All reminders canceled.");
  };

  useEffect(() => {
    const fetchReminderIds = async () => {
      const jsonValue = await AsyncStorage.getItem("reminderIds");
      if (jsonValue) {
        const parsedValue = JSON.parse(jsonValue);
        setReminderIds(parsedValue);
      }
    };

    fetchReminderIds();
  }, []);

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 20 }}>Schedule Reminders</Text>
      <Reminder onSchedule={storeReminder} />
      <Text onPress={cancelAllReminders} style={{ color: "red", marginTop: 20 }}>
        Cancel All Reminders
      </Text>
    </View>
  );
};

export default ReminderApp;
