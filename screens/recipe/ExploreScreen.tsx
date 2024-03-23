import {observer} from "mobx-react";
import {SafeAreaView, StyleSheet, Text} from "react-native";
import {ExploreScreenProps} from "../../utils/navigation/navigationTypes.ts";
import {useColors} from "../../hooks/useColors.ts";
import {useStyles} from "../../hooks/useStyles.ts";
import {CategoryScroll} from "../../components/recipes/CategoryScroll.tsx";
import {SearchInput} from "../../components/SearchInput.tsx";

export const ExploreScreen = observer(({navigation}: ExploreScreenProps) => {
    const {Colors} = useColors();
    const styles = useStyles(Colors);

    const categories = ["Korean", "Australian", "American", "Mexican", "Brazilian", "French", "Nigerian", "Italian", "Chinese", "Indian"];

    return (
        <SafeAreaView style={localStyles.container}>
            <Text style={styles.textHeader4}>Search</Text>
            <SearchInput/>
            <CategoryScroll title={"Categories"} data={categories}/>
        </SafeAreaView>
    );
})

let localStyles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: 'white',
        gap: 20
    }
});