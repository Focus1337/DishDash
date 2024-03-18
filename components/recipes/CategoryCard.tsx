import {useColors} from "../../hooks/useColors.ts";
import {useStyles} from "../../hooks/useStyles.ts";
import {ImageBackground, StyleSheet, Text, TouchableOpacity} from "react-native";
import GradientBackground from "../GradientBackground.tsx";
import React from "react";

interface CategoryCardProps {
    category: string;
}

export const CategoryCard = ({category}: CategoryCardProps) => {
    const {Colors} = useColors();
    const styles = useStyles(Colors);

    return (
        <TouchableOpacity style={[localStyles.container]}>
            <ImageBackground source={require('../../assets/images/receipt_image.jpg')} resizeMode={'cover'}
                             borderRadius={10} style={{flex: 1}}>
                <GradientBackground styles={localStyles.main} end={{x: 0, y: 0}} opacity={0.5}>
                    <Text numberOfLines={1} ellipsizeMode="tail"
                          style={[styles.textBody16M, styles.textWhite]}>{category}</Text>
                </GradientBackground>
            </ImageBackground>
        </TouchableOpacity>
    );
};

let localStyles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        borderRadius: 10,
        width: 160,
        height: 70
    },

    main: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10
    }
});
