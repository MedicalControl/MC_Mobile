// Reminder.tsx
import { View, Text, TextInput, Pressable } from "react-native";
import { useState } from "react";
import * as Notifications from "expo-notifications";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface ReminderProps {
  onSchedule: (id: string) => void;
}

const Reminder: React.FC<ReminderProps> = ({ onSchedule }) => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [seconds, setSeconds] = useState("");

  const scheduleNotification = async () => {
    const identifier = await Notifications.scheduleNotificationAsync({
      content: {
        title: title,
        body: body,
        categoryIdentifier: 'reminder_category', // Opcional
      },
      trigger: { seconds: parseInt(seconds) },
    });

    onSchedule(identifier); // Notificar al componente padre sobre el ID programado
    console.log(`Scheduled: ${identifier}`);
  };

  return (
    <View style={{ marginBottom: 20 }}>
      <TextInput
        placeholder="Title"
        value={title}
        onChangeText={setTitle}
      />
      <TextInput
        placeholder="Body"
        value={body}
        onChangeText={setBody}
      />
      <TextInput
        placeholder="Seconds"
        value={seconds}
        onChangeText={setSeconds}
        keyboardType="numeric"
      />
      <Pressable onPress={scheduleNotification}>
        <Text>Schedule Reminder</Text>
      </Pressable>
    </View>
  );
};

export default Reminder;
