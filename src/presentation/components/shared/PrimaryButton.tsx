import { Pressable, Text } from "react-native"
import { globalStyles } from "../../theme/theme";


//Interface
interface Props {
    onPress: () => void;
    label: string;
}


export const PrimaryButton = ({ onPress, label }: Props) => {

    return (

        <Pressable
            onPress={() => onPress()}
            style={globalStyles.primary_Button}>
            <Text style={globalStyles.button_Text}>{label}</Text>
        </Pressable>
    )
}
