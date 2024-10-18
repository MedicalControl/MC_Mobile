import { useEffect, useState } from "react";
import * as Notifications from "expo-notifications";
import { View, Text, Pressable, TextInput, FlatList } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { scheduleNotification, validateTime } from "./notificationHelpers"; // Archivo de utilidades

interface NotificationSchedulerProps {
  targetHour: string;
  targetMinute: string;
  ampm: string;
}

export default function NotificationScheduler({
  targetHour,
  targetMinute,
  ampm,
}: NotificationSchedulerProps) {
  const [notifications, setNotifications] = useState<
    { id: string; time: string }[]
  >([]);

  useEffect(() => {
    loadNotifications();
  }, []);

  const loadNotifications = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem("notifications");
      if (jsonValue !== null) {
        setNotifications(JSON.parse(jsonValue));
      }
    } catch (e) {
      console.error("Failed to load notifications from storage", e);
    }
  };

  const saveNotifications = async (newNotifications: { id: string; time: string }[]) => {
    try {
      await AsyncStorage.setItem("notifications", JSON.stringify(newNotifications));
    } catch (e) {
      console.error("Failed to save notifications to storage", e);
    }
  };

  const handleScheduleNotifications = async () => {
    const targetDate = validateTime(targetHour, targetMinute, ampm);
    if (!targetDate) {
      alert("Please set a valid future time.");
      return;
    }

    // 5 minutos antes
    const fiveMinutesBefore = new Date(targetDate.getTime() - 5 * 60 * 1000);
    const fiveId = await scheduleNotification(
      fiveMinutesBefore,
      "Reminder",
      "Event starts in 5 minutes!"
    );

    // 30 minutos antes
    const thirtyMinutesBefore = new Date(targetDate.getTime() - 30 * 60 * 1000);
    const thirtyId = await scheduleNotification(
      thirtyMinutesBefore,
      "Reminder",
      "Event starts in 30 minutes!"
    );

    const newNotifications = [
      ...notifications,
      { id: fiveId, time: fiveMinutesBefore.toString() },
      { id: thirtyId, time: thirtyMinutesBefore.toString() },
    ];

    setNotifications(newNotifications);
    saveNotifications(newNotifications);
  };

  const handleCancelNotification = async (id: string) => {
    await Notifications.cancelScheduledNotificationAsync(id);
    const updatedNotifications = notifications.filter((n) => n.id !== id);
    setNotifications(updatedNotifications);
    saveNotifications(updatedNotifications);
  };

  return (
    <View>
      <Text>Program Notifications</Text>
      <Text>{`For: ${targetHour}:${targetMinute} ${ampm}`}</Text>
      <Pressable onPress={handleScheduleNotifications}>
        <Text>Schedule Notifications</Text>
      </Pressable>

      <FlatList
  data={notifications}
  keyExtractor={(item, index) => `${item.id}-${index}`}
  renderItem={({ item }) => (
    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
      <Text>{`Notification at: ${item.time}`}</Text>
      <Pressable onPress={() => handleCancelNotification(item.id)}>
        <Text>Cancel</Text>
      </Pressable>
    </View>
  )}
/>
    </View>
  );
}
