import * as Notifications from "expo-notifications";

// Función para validar el tiempo y retornar una fecha si es válida
export function validateTime(hour: string, minute: string, ampm: string): Date | null {
  let newHour = parseInt(hour);
  const newMinute = parseInt(minute);
  
  // Ajuste de AM/PM
  if (ampm === "pm" && newHour < 12) {
    newHour += 12;
  } else if (ampm === "am" && newHour === 12) {
    newHour = 0; // Para 12 AM, ajusta a 0 (medianoche)
  }

  const targetDate = new Date();
  targetDate.setHours(newHour);
  targetDate.setMinutes(newMinute);
  targetDate.setSeconds(0);

  // Asegurarse de que no esté en el pasado
  if (targetDate <= new Date()) {
    return null; // Retorna nulo si es un tiempo pasado
  }

  return targetDate;
}

// Función para programar una notificación
export async function scheduleNotification(triggerDate: Date, title: string, body: string): Promise<string> {
  const triggerSeconds = Math.floor((triggerDate.getTime() - Date.now()) / 1000);
  
  if (triggerSeconds <= 0) {
    console.log("Time is already passed.");
    return "";
  }

  const identifier = await Notifications.scheduleNotificationAsync({
    content: {
      title: title,
      body: body,
    },
    trigger: {
      seconds: triggerSeconds,
    },
  });

  console.log(`Scheduled notification with ID: ${identifier} for ${triggerDate.toString()}`);
  return identifier;
}
