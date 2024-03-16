import {StyleSheet, Text, View} from "react-native";
import React from "react";
import {useTheme} from "../hooks/useTheme.ts";
import {useStyles} from "../hooks/useStyles.ts";

interface IPageNumberProps {
    pageNumber: number,
    isActive: boolean
}

export const PageNumber = (props: IPageNumberProps) => {
    const {Colors} = useTheme();
    const styles = useStyles(Colors);

    return (
        <View
            style={[localStyles.page, {borderColor: Colors.text200}, props.isActive ? {borderColor: Colors.text500} : {}]}>
            <Text
                style={[styles.textBody14M, props.isActive ? {color: Colors.text500} : {color: Colors.text200}]}>{props.pageNumber}</Text>
        </View>
    );
};

let localStyles = StyleSheet.create({
    page: {
        display: 'flex',
        alignItems: 'center',
        width: 26,
        height: 26,
        padding: 2,
        borderRadius: 13,
        borderWidth: 1,
        borderStyle: 'solid'
    },
});