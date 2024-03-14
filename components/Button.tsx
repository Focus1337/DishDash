import {GestureResponderEvent, Pressable, StyleProp, Text, TextStyle, ViewStyle} from "react-native";
import React from "react";
import {useTheme} from "../hooks/useTheme.ts";
import {useStyles} from "../hooks/useStyles.ts";

interface IBaseButtonProps {
    onPress: (event: GestureResponderEvent) => void,
    buttonStyles: StyleProp<ViewStyle>,
    textStyles: StyleProp<TextStyle>,
    title: string
}

function BaseButton(props: IBaseButtonProps) {
    const {onPress, title = 'Save'} = props;

    return (
        <Pressable style={[props.buttonStyles]} onPress={onPress}>
            <Text style={[props.textStyles]}>{title}</Text>
        </Pressable>
    );
}

interface IButtonProps {
    onPress: (event: GestureResponderEvent) => void,
    buttonStyles?: StyleProp<ViewStyle>,
    title: string
}

export const FilledMainButton = (props: IButtonProps) => {
    const {Colors} = useTheme();
    const styles = useStyles(Colors);

    return <BaseButton onPress={props.onPress} buttonStyles={[styles.buttonFilled, styles.buttonPrimaryCTA, props.buttonStyles]}
                       textStyles={[styles.textWhite, styles.buttonPrimaryCTA]} title={props.title}/>
}

export const OutlinedMainButton = (props: IButtonProps) => {
    const {Colors} = useTheme();
    const styles = useStyles(Colors);

    return <BaseButton onPress={props.onPress} buttonStyles={[styles.buttonOutlined, styles.buttonWhite, props.buttonStyles]}
                       textStyles={[styles.text600]} title={props.title}/>
}
