import React, { useEffect } from 'react'
import { Pressable, StyleSheet, Text } from 'react-native'
import { icon } from '../../../constants/icon';
import Animated, { interpolate, useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';
import Icon from '@mdi/react';


const TabbarButton = ({ onPress, onLongPress, isFocused, routeName, color, label }:
    {
        onPress: Function;
        onLongPress: Function;
        isFocused: boolean;
        routeName: string;
        color: string;
        label: string;
    }) => {
    const scale = useSharedValue(0);
    useEffect(() => {
        scale.value = withSpring(
            typeof isFocused === "boolean" ? (isFocused ? 1 : 0) : isFocused,
            { duration: 350 }
        );
    }, [scale, isFocused]);

    const animatedIconStyle = useAnimatedStyle(() => {
        const scaleValue = interpolate(scale.value, [0, 1], [1,1.2]);

        const top = interpolate(scale.value, [0,1], [0,9]);

        return {
            transform: [{
                scale: scaleValue
            }],
            top: top
        }

    });

    const animatedTextStyle = useAnimatedStyle(() => {
        const opacity = interpolate(scale.value, [0, 1], [1, 0])
        return {
            opacity
        }
    });
    return (
        <Pressable
            onPress={onPress}
            onLongPress={onLongPress}
            style={styles.tabbarItem}
        >
            <Animated.View style={animatedIconStyle}>
    
            </Animated.View>

            <Animated.Text
                style={[{ color: isFocused ? '#0094B6' : '#545454' }, animatedTextStyle]}>
                {label}
            </Animated.Text>
        </Pressable>
    )
}

export default TabbarButton

const styles = StyleSheet.create({

    tabbarItem: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 5

    }

});

