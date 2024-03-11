import {observer} from "mobx-react";
import {useState} from "react";
import {useTheme} from "../../hooks/useTheme.ts";
import {useStyles} from "../../hooks/useStyles.ts";
import {SafeAreaView} from "react-native";
import {CuisineScreenProps} from "../../utils/navigation/navigationTypes.ts";

export const CuisineScreen = observer(({navigation}: CuisineScreenProps) => {
    let [title, setTitle] = useState<string>('');
    const {Colors} = useTheme();
    const styles = useStyles(Colors);

    return (
        <SafeAreaView>
        </SafeAreaView>
    )
})