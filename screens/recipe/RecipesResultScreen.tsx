import {observer} from "mobx-react";
import {RecipesResultScreenProps} from "../../utils/navigation/navigationTypes.ts";
import React, {useEffect, useState} from "react";
import {Recipe} from "../../modules/recipes/models/Recipe.ts";
import {useColors} from "../../hooks/useColors.ts";
import {useStyles} from "../../hooks/useStyles.ts";
import {SafeAreaView, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import Feather from "react-native-vector-icons/Feather";
import {SearchRecipeScroll} from "../../components/recipes/SearchRecipeScroll.tsx";

export const RecipesResultScreen = observer(({navigation, route}: RecipesResultScreenProps) => {
    const [recipes, setRecipes] = useState<Recipe[]>([]);
    const {Colors} = useColors();
    const styles = useStyles(Colors);

    useEffect(() => {
        setRecipes(route.params.recipes);
    }, []);

    return (
        <SafeAreaView style={localStyles.container}>
            <View style={localStyles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}
                                  style={[localStyles.backButton]}>
                    <Feather name={"arrow-left"} color={Colors.text600} size={24}/>
                </TouchableOpacity>
            </View>
            <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
                <Text style={styles.textHeader6S}>Sort By</Text>
                <View style={localStyles.sort}>
                    <Text style={[styles.textBody16B, {color: Colors.primaryAccent}]}>Most Popular</Text>
                    <Feather name={"sliders"} color={Colors.primaryAccent} size={24}/>
                </View>
            </View>
            <SearchRecipeScroll data={recipes}/>
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
    },

    header: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
        marginRight: 60
    },

    sort: {
        flexDirection: 'row',
        gap: 10,
        alignItems: 'center'
    },

    backButton: {
        borderRadius: 100,
        width: 36,
        height: 36,
        alignItems: 'center',
        justifyContent: 'center',
    },
});