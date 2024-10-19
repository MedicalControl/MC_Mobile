import AsyncStorage from "@react-native-async-storage/async-storage";

export const storeData = async (token: string) => {
  try {
    await AsyncStorage.setItem("token", token);
    console.log(token);
  } catch (err) {
    console.log(err);
  }
};

export const GET = async () => {
  try {
    const token = await AsyncStorage.getItem("token");
    return token;
  } catch (error) {
    console.error("Error retrieving token", error);
    return null;
  }
};
