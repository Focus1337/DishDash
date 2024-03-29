import {GestureResponderEvent, StyleSheet, Text, TouchableOpacity} from "react-native";
import React, {useEffect, useState} from "react";
import {useColors} from "../../hooks/useColors.ts";
import {useStyles} from "../../hooks/useStyles.ts";

interface IOptionButtonProps {
    text: string,
    pressed: boolean,
    onActivate: (event: GestureResponderEvent) => void,
    onDeactivate: (event: GestureResponderEvent) => void,
}

export const OptionButton = (props: IOptionButtonProps) => {
    let [pressed, setPressed] = useState<boolean>(props.pressed);
    const {Colors} = useColors();
    const styles = useStyles(Colors);

    useEffect(() => {
        setPressed(props.pressed);
    }, []);

    useEffect(() => {
        setPressed(props.pressed);
    }, [props.pressed]);

    const handleOnPress = (event: GestureResponderEvent) => {
        if (pressed) {
            props.onDeactivate(event);
        } else {
            props.onActivate(event);
        }

        setPressed(!pressed);
    }

    return (
        <TouchableOpacity style={[localStyles.option, pressed ? styles.buttonPrimaryCTA : {}]} onPress={handleOnPress}>
            {/*<Text style={[styles.textBody14M, pressed ? styles.textWhite : {color: Colors.text600}]}>🦐</Text>*/}
            <Text style={[styles.textBody14M, pressed ? styles.textWhite : {color: Colors.text600}]}>{props.text}</Text>
        </TouchableOpacity>
    );
}

let localStyles = StyleSheet.create({
    option: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'flex-start',
        paddingHorizontal: 10,
        paddingVertical: 7,
        borderRadius: 100,
        borderWidth: 1,
        gap: 6,
        borderStyle: 'solid',
        borderColor: '#C9CDC9',
        backgroundColor: 'white'
    }
});
