import {Recipe} from "../../modules/recipes/models/Recipe.ts";
import {useColors} from "../../hooks/useColors.ts";
import {useStyles} from "../../hooks/useStyles.ts";
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {RecipeCard} from "./RecipeCard.tsx";
import React from "react";

interface SearchRecipeScrollProps {
    data: Recipe[];
}

export const SearchRecipeScroll = (props: SearchRecipeScrollProps) => {
    const {Colors} = useColors();
    const styles = useStyles(Colors);

    return (
        <View style={localStyles.recipesContainer}>
            <FlatList contentContainerStyle={{gap: 20, alignItems: 'center'}} numColumns={2}
                      columnWrapperStyle={{gap: 20}} showsHorizontalScrollIndicator={false} data={props.data}
                      keyExtractor={(_, index) => index.toString()}
                      renderItem={({item}) => <RecipeCard recipe={item}/>}
            />
        </View>
    );
};

let localStyles = StyleSheet.create({
    recipesContainer: {
        flex: 1,
        flexDirection: 'column',
    },

    recipesHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'space-between'
    }
});
