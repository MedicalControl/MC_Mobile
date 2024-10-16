import * as ImagePicker from 'expo-image-picker';
import { Alert } from 'react-native';

export class CameraAdapter {


    static async requestCameraPermission(): Promise<boolean> {

        const { status } = await ImagePicker.requestCameraPermissionsAsync();
        if (status !== 'granted') {
            Alert.alert("Error");
            return false;
        }
        return true;
    }

    static async takePicture(): Promise<string[]> {
        const hasPermission = await CameraAdapter.requestCameraPermission();
        if (!hasPermission) {
            return [];
        }

        const result = await ImagePicker.launchCameraAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            quality: 0.7,
        });

        if (!result.canceled && result.assets && result.assets.length > 0) {
            return [result.assets[0].uri];
        }


        return [];
    }


    static async pickImage(): Promise<string[]> {
        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            quality: 0.7,
        });

        if (!result.canceled && result.assets && result.assets.length > 0) {
            return [result.assets[0].uri];
        }

        return [];
    }

}


