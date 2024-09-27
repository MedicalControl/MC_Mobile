import React, { useEffect } from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';
import Animated, { interpolate, useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';
import Icon from 'react-native-vector-icons/Ionicons';

const TabbarButton = ({ onPress, onLongPress, isFocused, routeName, color, label, nameIcon }:
    {
        onPress: Function;
        onLongPress: Function;
        isFocused: boolean;
        routeName: string;
        color: string;
        label: string;
        nameIcon: string;
    }) => {
    const scale = useSharedValue(0);

    useEffect(() => {
        scale.value = withSpring(isFocused ? 1 : 0, { duration: 380 });
    }, [isFocused]);

    const animatedIconStyle = useAnimatedStyle(() => {
        const scaleValue = interpolate(scale.value, [0, 1], [1, 1.2]);
        const top = interpolate(scale.value, [0, 1], [0, -5]);

        return {
            transform: [{ scale: scaleValue }],
            top: top
        };
    });

    const animatedTextStyle = useAnimatedStyle(() => {
        const opacity = interpolate(scale.value, [0, 1], [1, 0]);
        return {
            opacity
        };
    });

    return (
        <Pressable
            onPress={onPress}
            onLongPress={onLongPress}
            style={styles.tabbarItem}
        >
            <Animated.View style={animatedIconStyle}>
                <Icon
                    name={nameIcon}
                    size={24}
                    color={isFocused ? '#ffffff' : '#777'}
                />
            </Animated.View>

            <Animated.Text
                style={[{ color: isFocused ? '#0094B6' : '#777' }, animatedTextStyle]}>
                {label}
            </Animated.Text>
        </Pressable>
    );
}

export default TabbarButton;

const styles = StyleSheet.create({
    tabbarItem: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});
