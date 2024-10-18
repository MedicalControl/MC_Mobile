import { Pressable, StyleProp, Text, ViewStyle } from "react-native"
import { globalStyles } from "../../theme/theme";


//Interface
interface Props {
    onPress: () => void;
    label: string;   
    style?: StyleProp<ViewStyle>;
    
}

export const PrimaryButton = ({ style,onPress, label }: Props) => {

    return (

        <Pressable
            onPress={() => onPress()}
            style={[globalStyles.button_mine, style]}>
            <Text style={globalStyles.button_Text}>{label}</Text>
        </Pressable>
    )
}



