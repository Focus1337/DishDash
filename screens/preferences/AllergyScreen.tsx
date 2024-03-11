import {observer} from "mobx-react";
import {useState} from "react";
import {useTheme} from "../../hooks/useTheme.ts";
import {useStyles} from "../../hooks/useStyles.ts";
import {SafeAreaView, Text, View} from "react-native";
import Button from "../../components/Button.tsx";
import {AllergyScreenProps} from "../../utils/navigation/navigationTypes.ts";

export const AllergyScreen = observer(({navigation}: AllergyScreenProps) => {
    let [title, setTitle] = useState<string>('');
    const {Colors} = useTheme();
    const styles = useStyles(Colors);

    return (
        <SafeAreaView>
        </SafeAreaView>
    )
})