// Reminder.tsx
import { useEffect } from "react";
import * as Notifications from "expo-notifications";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface ReminderProps {
  title: string; 
  body: string; 
  hours: number;
  minutes: number; 
  onSchedule: (id: string) => void; 
}

const Reminder: React.FC<ReminderProps> = ({ title, body, hours, minutes, onSchedule }) => {
  useEffect(() => {
    const scheduleNotification = async () => {
      const triggerDate = new Date();
      triggerDate.setHours(hours, minutes, 0); // Establece la hora y minutos

      // Calcular el tiempo para 5 y 30 minutos antes
      const fiveMinutesBefore = Math.floor((triggerDate.getTime() - 5 * 60 * 1000 - Date.now()) / 1000);
      const thirtyMinutesBefore = Math.floor((triggerDate.getTime() - 30 * 60 * 1000 - Date.now()) / 1000);

      // Función para programar una notificación si no existe
      const scheduleIfNotExists = async (identifier: string) => {
        const existingIds = await AsyncStorage.getItem("scheduledNotifications");
        const idsArray = existingIds ? JSON.parse(existingIds) : [];

        if (!idsArray.includes(identifier)) {
          const newId = await Notifications.scheduleNotificationAsync({
            content: {
              title: `Recordatorio: ${title}`,
              body: `${body} - ${identifier === "5" ? "5 minutos" : "30 minutos"} restantes.`,
              categoryIdentifier: 'reminder_category',
            },
            trigger: { seconds: identifier === "5" ? fiveMinutesBefore : thirtyMinutesBefore },
          });

          // Almacenar el nuevo ID
          idsArray.push(newId);
          await AsyncStorage.setItem("scheduledNotifications", JSON.stringify(idsArray));
          onSchedule(newId); // Notificar al componente padre sobre el ID programado
          console.log(`Scheduled ${identifier} min reminder: ${newId}`);
        } else {
          console.log(`Ya existe un recordatorio programado para ${identifier} minutos antes.`);
        }
      };

      // Programar la notificación para 5 minutos antes
      if (fiveMinutesBefore > 0) {
        await scheduleIfNotExists("5");
      }

      // Programar la notificación para 30 minutos antes
      if (thirtyMinutesBefore > 0) {
        await scheduleIfNotExists("30");
      }
    };

    scheduleNotification(); // Llama a la función para programar la notificación
  }, [title, body, hours, minutes, onSchedule]); // Dependencias para el efecto

  return null; // No renderiza nada
};

interface CancelNotificationsProps {
  onCancel?: () => void; // Callback opcional para notificar al padre
}

const CancelNotifications: React.FC<CancelNotificationsProps> = ({ onCancel }) => {
  useEffect(() => {
    const cancelAllNotifications = async () => {
      await Notifications.cancelAllScheduledNotificationsAsync();
      console.log("Todas las notificaciones programadas han sido canceladas.");
      
      // Llama al callback, si se proporciona
      if (onCancel) {
        onCancel();
      }
    };

    cancelAllNotifications(); // Ejecutar la función al montar el componente
  }, [onCancel]); // Dependencia para el efecto

  return null; // No renderiza nada
};

export default Reminder;
