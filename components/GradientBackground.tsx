import React, {ReactNode} from "react";
import {StyleSheet, View, ViewStyle} from "react-native";
import LinearGradient from "react-native-linear-gradient";

interface GradientBackgroundProps {
    styles?: ViewStyle;
    children: ReactNode;
    start?: { x: number, y: number };
    end?: { x: number, y: number };
    opacity?: number;
}

const GradientBackground: React.FC<GradientBackgroundProps> = (props) => {
    return (
        <View style={localStyles.container}>
            <LinearGradient
                colors={['transparent', `rgba(0,0,0, ${props.opacity === undefined ? 0.8 : props.opacity})`]}
                start={props.start === undefined ? {x: 0, y: 0} : props.start}
                end={props.end === undefined ? {x: 0, y: 0.5} : props.end}
                style={[localStyles.gradient, props.styles === undefined ? {} : props.styles]}
            >
                {props.children}
            </LinearGradient>
        </View>
    );
};
export default GradientBackground;

const localStyles = StyleSheet.create({
    container: {
        flex: 1,
    },
    gradient: {
        flex: 1,
        borderRadius: 10
    },
});