import React from 'react';
import { Pressable, Text, View, StyleProp, ViewStyle } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { globalStyles } from '../../theme/theme';

// Interface
interface Props {
    onPress: () => void;
    label: string;
    style?: StyleProp<ViewStyle>;
    name: string;
    size?: number;
    color?: string;
}

export const SecondButton = ({ onPress, label, style, name, size = 20, color = 'black' }: Props) => {
    return (
        <Pressable onPress={onPress}
            style={[globalStyles.primary_Button, style]}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                
                <Icon name={name} size={size} color={color} />
              
                <Text style={{
                    ...globalStyles.buttonText,
                    textAlign:'left',
                    flex: 1
                
                }}> {label} </Text>
            </View>
        </Pressable>
    );
};