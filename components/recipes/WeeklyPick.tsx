import {ImageBackground, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import GradientBackground from "../GradientBackground.tsx";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import React from "react";
import {useColors} from "../../hooks/useColors.ts";
import {useStyles} from "../../hooks/useStyles.ts";

export const WeeklyPick = () => {
    const {Colors} = useColors();
    const styles = useStyles(Colors);

    return (
        <TouchableOpacity style={[localStyles.container]}>
            <ImageBackground source={require('../../assets/images/receipt_image.jpg')} resizeMode={'cover'}
                             borderRadius={10} style={{flex: 1}}>
                <GradientBackground styles={localStyles.main}>
                    <View style={localStyles.prepare}>
                        <FontAwesome name={"clock-o"} color={Colors.backgroundPrimary} size={12}/>
                        <Text style={[styles.textBody10, styles.textWhite]}>12 min</Text>
                        <FontAwesome name={"flask"} color={Colors.backgroundPrimary} size={12}/>
                        <Text style={[styles.textBody10, styles.textWhite]}>14 ingredients</Text>
                    </View>

                    <Text style={[styles.textBody24S, styles.textWhite]}>Weekly Pick</Text>
                    <Text style={[styles.textBody14R, styles.textWhite]}>This Italian pasta and steak will
                        warm up the faintest of hearts.
                    </Text>
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
        height: 200
    },

    main: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-end',
        padding: 16,
    },

    prepare: {
        flexDirection: "row",
        gap: 6,
        alignItems: 'center'
    }
});
