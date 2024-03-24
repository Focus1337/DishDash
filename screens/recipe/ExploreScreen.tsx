import {observer} from "mobx-react";
import {SafeAreaView, StyleSheet, Text} from "react-native";
import {ExploreScreenProps} from "../../utils/navigation/navigationTypes.ts";
import {useColors} from "../../hooks/useColors.ts";
import {useStyles} from "../../hooks/useStyles.ts";
import {CategoryScroll} from "../../components/recipes/CategoryScroll.tsx";
import {SearchInput} from "../../components/SearchInput.tsx";
import {cuisineOptions} from "../../modules/preferences/models/CuisineType.ts";
import {useRootStore} from "../../hooks/useRootStore.ts";
import Navigation from "../../utils/navigation/Navigation.ts";
import {RecipeSearchRequest} from "../../modules/recipes/models/RecipeSearchRequest.ts";

export const ExploreScreen = observer(({navigation}: ExploreScreenProps) => {
    const {Colors} = useColors();
    const styles = useStyles(Colors);
    const {cuisineStore, healthStore, dietStore} = useRootStore();

    const handleSearch = async (query: string) => {
        await Promise.all([cuisineStore.actionHandleGet(), healthStore.actionHandleGet(), dietStore.actionHandleGet()]);

        let searchRequest: RecipeSearchRequest = {
            type: 'any',
            q: query,
            cuisineType: cuisineStore.items!,
            health: healthStore.items!,
            diet: dietStore.items!
        };

        Navigation.navigate("SearchResult", {request: searchRequest});
    };

    return (
        <SafeAreaView style={localStyles.container}>
            <Text style={styles.textHeader4}>Search</Text>
            <SearchInput onSearch={handleSearch}/>
            <CategoryScroll title={"Categories"} data={cuisineOptions}/>
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