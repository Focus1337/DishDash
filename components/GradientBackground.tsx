import React, {ReactNode} from "react";
import {StyleSheet, View, ViewStyle} from "react-native";
import LinearGradient from "react-native-linear-gradient";

interface GradientBackgroundProps {
    styles?: ViewStyle
    children: ReactNode;
}

const GradientBackground: React.FC<GradientBackgroundProps> = ({styles, children}) => {
    return (
        <View style={localStyles.container}>
            <LinearGradient
                colors={['transparent', 'rgba(0,0,0,0.8)']}
                start={{x: 0, y: 0}}
                end={{x: 0, y: 0.5}}
                style={[localStyles.gradient, styles === null ? {} : styles]}
            >
                {children}
            </LinearGradient>
        </View>
    );
};
export default GradientBackground;

const localStyles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    gradient: {
        flex: 1,
        width: 160,
        height: 140,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
});