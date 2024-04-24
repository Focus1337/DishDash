import {observer} from "mobx-react";
import {SafeAreaView, StyleSheet, Text, View} from "react-native";
import {HomeScreenProps} from "../../utils/navigation/navigationTypes.ts";
import {WeeklyPick} from "../../components/recipes/WeeklyPick.tsx";
import {useColors} from "../../hooks/useColors.ts";
import {useStyles} from "../../hooks/useStyles.ts";
import {RecipeScroll} from "../../components/recipes/RecipeScroll.tsx";
import {Recipe} from "../../modules/recipes/models/Recipe.ts";
import {CuisineType} from "../../modules/preferences/models/CuisineType.ts";
import {MealType} from "../../modules/recipes/models/MealType.ts";
import {DishType} from "../../modules/recipes/models/DishType.ts";
import {useRootStore} from "../../hooks/useRootStore.ts";
import {useEffect, useState} from "react";
import Navigation from "../../utils/navigation/Navigation.ts";

export const HomeScreen = observer(({navigation}: HomeScreenProps) => {
    const {Colors} = useColors();
    const styles = useStyles(Colors);
    const [recentRecipes, setRecentRecipes] = useState<Recipe[]>();
    const {localRecipesStore} = useRootStore();

    useEffect(() => {
        (async () => {
            await localRecipesStore.actionHandleGetRecent();
            setRecentRecipes(localRecipesStore.recent!);
        })();
    }, [localRecipesStore]);

    useEffect(() => {
        setRecentRecipes(localRecipesStore.recent!);
    }, [localRecipesStore.recent]);

    const handleViewAll = () => {
        Navigation.navigate("RecipesResult", {recipes: recentRecipes});
    };

    return (
        <SafeAreaView style={localStyles.container}>
            <Text style={styles.textHeader4}>Explore Recipes</Text>
            <WeeklyPick/>
            <RecipeScroll title={"Recent Recipes"} data={recentRecipes!} onViewAll={handleViewAll}/>
        </SafeAreaView>
    );
})

let localStyles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        padding: 20,
        gap: 20,
        backgroundColor: 'white'
    }
});