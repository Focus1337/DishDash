import {StyleSheet, Text, View} from "react-native";
import React from "react";

interface IPageNumberProps {
    pageNumber: number,
    isActive: boolean
}

export const PageNumber = (props: IPageNumberProps) => {
    return (
        <View style={[localStyles.page, props.isActive ? localStyles.pageActive : {}]}>
            <Text>{props.pageNumber}</Text>
        </View>
    );
};

let localStyles = StyleSheet.create({
    pageActive: {
        borderColor: '#052C05'
    },

    page: {
        display: 'flex',
        alignItems: 'center',
        width: 26,
        height: 26,
        padding: 2,
        borderRadius: 13,
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: '#B2BBB2'
    },
});