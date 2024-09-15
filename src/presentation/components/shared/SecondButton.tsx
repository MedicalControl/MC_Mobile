import React from 'react';
import { Pressable, Text, View, StyleProp, ViewStyle } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { globalStyles } from '../../theme/theme';

// Interface
interface Props {
    label: string;
    Title: string;
    style?: StyleProp<ViewStyle>;
    name: string;
    size?: number;
    color?: string;
    label_2: string;
}

interface Props_2 {
    label: string;
    Title: string;
    style?: StyleProp<ViewStyle>;
    name: string;
    size?: number;
    color?: string;
    name_2: string;
    color_2: string;
    label_2: string;
}

export const SecondButton = ({ label, style, name, size = 20, color, Title, label_2 }: Props) => {
    return (
        <Pressable
            style={[globalStyles.primary_Button, style]}>
            <Text style={{ fontSize: 20, fontWeight: 'bold', right: 30, paddingBottom: 10 }}>{Title}</Text>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>

                <Icon name={name} size={size} color={color} />
                <Text style={{
                    ...globalStyles.buttonText,
                    textAlign: 'center',
                    flex: 1

                }}> {label} </Text>

            </View>
            <Text style = {{fontWeight : '400', top: 12}}>{label_2}</Text>

        </Pressable>
    );
};

export const SecondButton_home = ({ label, style, name, size = 20, color, Title, name_2, color_2, label_2 }: Props_2) => {
    return (
        <Pressable
            style={[globalStyles.primary_Button, style]}>
            <Text style={{ fontSize: 20, fontWeight: 'bold', right: 30, paddingBottom: 10 }}>{Title}</Text>
            <View style={{ flexDirection: 'row', alignItems: 'center', paddingBottom: 7 }}>

                <Icon name={name} size={size} color={color} />


                <Text style={{
                    ...globalStyles.buttonText,
                    textAlign: 'center',
                    flex: 1

                }}> {label} </Text>

            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>


                <Icon name={name_2} size={size} color={color_2} />

                <Text style={{
                    ...globalStyles.buttonText,
                    textAlign: 'center',
                    flex: 1

                }}> {label_2} </Text>

            </View>

        </Pressable>
    );
};