import {observer} from "mobx-react";
import {SafeAreaView, StyleSheet, Text, View} from "react-native";
import {RecipesScreenProps} from "../../utils/navigation/navigationTypes.ts";
import {WeeklyPick} from "../../components/recipes/WeeklyPick.tsx";
import {useColors} from "../../hooks/useColors.ts";
import {useStyles} from "../../hooks/useStyles.ts";
import {RecipeScroll} from "../../components/recipes/RecipeScroll.tsx";
import {Recipe} from "../../modules/recipes/Recipe.ts";

export const RecipesScreen = observer(({navigation}: RecipesScreenProps) => {
    const {Colors} = useColors();
    const styles = useStyles(Colors);

    const handleViewAll = () => {

    };

    const recipes: Recipe[] = [
        new Recipe("1", "Chicken", "Andrew Tate", "Japan", 4.9),
        new Recipe("1", "Chicken Teriyaki 2222", "Andrew Tate 123", "Japan", 4.9),
        new Recipe("2", "Spaghetti", "Aboba", "Italy", 5),
        new Recipe("2", "Spaghetti", "Aboba", "Italy", 5),
    ];

    return (
        <SafeAreaView style={localStyles.container}>
            <Text style={styles.textHeader4}>Explore Recipes</Text>
            <WeeklyPick/>
            <RecipeScroll title={"Recent Recipes"} data={recipes} onViewAll={handleViewAll}/>
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