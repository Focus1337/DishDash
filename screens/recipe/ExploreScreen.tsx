import {observer} from "mobx-react";
import {SafeAreaView, StyleSheet, Text, TextInput, View} from "react-native";
import {ExploreScreenProps} from "../../utils/navigation/navigationTypes.ts";
import {useColors} from "../../hooks/useColors.ts";
import {useStyles} from "../../hooks/useStyles.ts";
import {CategoryScroll} from "../../components/recipes/CategoryScroll.tsx";
import FontAwesome from "react-native-vector-icons/FontAwesome";

export const ExploreScreen = observer(({navigation}: ExploreScreenProps) => {
    const {Colors} = useColors();
    const styles = useStyles(Colors);

    const categories = ["Korean", "Australian", "American", "Mexican", "Brazilian", "French", "Nigerian", "Italian", "Chinese", "Indian"];

    return (
        <SafeAreaView style={localStyles.container}>
            <Text style={styles.textHeader4}>Search</Text>
            <View style={[localStyles.searchInput]}>
                <FontAwesome name={"search"} color={Colors.text300} size={20}/>
                <TextInput style={[{flex: 1}, styles.textBody14R]} numberOfLines={1} inputMode={'text'}
                           placeholder={"Search anything..."}/>
            </View>
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
    },

    searchInput: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingHorizontal: 16,
        borderRadius: 200,
        gap: 10,
        backgroundColor: '#F5F6F5',
    }
});