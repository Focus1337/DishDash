import {useColors} from "../../hooks/useColors.ts";
import {useStyles} from "../../hooks/useStyles.ts";
import {StyleSheet, Text, View} from "react-native";
import React from "react";

interface DirectionProps {
    step: number;
    text: string;
}

export const Direction = (props: DirectionProps) => {
    const {Colors} = useColors();
    const styles = useStyles(Colors);

    return (
        <View style={localStyles.container}>
            <View style={[localStyles.main, {backgroundColor: Colors.primaryCTA}]}>
                <Text style={[styles.textBody12M, {color: Colors.backgroundPrimary}]}>{props.step}</Text>
            </View>
            <Text style={[styles.textBody14M, {paddingHorizontal: 20}]}>{props.text}</Text>
        </View>
    );
};

let localStyles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    main: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 24,
        height: 24,
        borderRadius: 12,
    }
});