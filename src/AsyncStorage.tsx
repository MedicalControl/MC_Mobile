import AsyncStorage from "@react-native-async-storage/async-storage";

export const storeData = async (token: string) => {
    try {
      await AsyncStorage.setItem("token", token);
      console.log(token)
    } catch (err) {
      console.log(err);
    }
  };
  