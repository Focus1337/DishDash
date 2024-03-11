import {SafeAreaView, ScrollView, Text, TextInput, View} from "react-native";
import {WelcomeScreenProps} from "../utils/navigation/navigationTypes.ts";
import {useEffect, useState} from "react";
import {useStyles} from "../hooks/useStyles.ts";
import {useTheme} from "../hooks/useTheme.ts";
import {observer} from "mobx-react";

export const WelcomeScreen = observer(({navigation}: WelcomeScreenProps) => {
    let [title, setTitle] = useState<string>('');
    const {Colors} = useTheme();
    const styles = useStyles(Colors);

    return (
        <SafeAreaView>
            <Text>Hello!</Text>
        </SafeAreaView>
    )
})