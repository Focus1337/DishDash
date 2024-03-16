import {GestureResponderEvent, StyleSheet, Text, TouchableOpacity} from "react-native";
import React, {useState} from "react";
import {useTheme} from "../hooks/useTheme.ts";
import {useStyles} from "../hooks/useStyles.ts";

interface IOptionButtonProps {
    text: string,
    onActivate: (event: GestureResponderEvent) => void,
    onDeactivate: (event: GestureResponderEvent) => void,
}

export const OptionButton = (props: IOptionButtonProps) => {
    let [pressed, setPressed] = useState<boolean>(false);
    const {Colors} = useTheme();
    const styles = useStyles(Colors);

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
            <Text style={[styles.textBody14M, pressed ? styles.textWhite : {color: Colors.text600}]}>🦐</Text>
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


// /* Btn */
//
// box-sizing: border-box;
//
// /* Auto layout */
// display: flex;
// flex-direction: row;
// justify-content: center;
// align-items: center;
// padding: 7px 10px;
// gap: 10px;
//
// width: 98px;
// height: 35px;
//
// /* Text Color/100 */
// border: 1px solid #C9CDC9;
// border-radius: 100px;
//
// /* Inside auto layout */
// flex: none;
// order: 0;
// flex-grow: 0;
//
//
// /* 🦐 Shrimp */
//
// width: 75px;
// height: 21px;
//
// /* Recipe Body/14(M) */
// font-family: 'Montserrat';
// font-style: normal;
// font-weight: 500;
// font-size: 14px;
// line-height: 21px;
// /* identical to box height, or 150% */
// text-align: center;
// letter-spacing: 0.005em;
//
// /* Text Color/600 */
// color: #001E00;
//
//
// /* Inside auto layout */
// flex: none;
// order: 0;
// flex-grow: 0;
