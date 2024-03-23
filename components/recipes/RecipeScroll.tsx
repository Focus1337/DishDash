import {useColors} from "../../hooks/useColors.ts";
import {useStyles} from "../../hooks/useStyles.ts";
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {RecipeCard} from "./RecipeCard.tsx";
import React from "react";
import {Recipe} from "../../modules/recipes/models/Recipe.ts";

interface RecipeScrollProps {
    title: string;
    data: Recipe[];
    onViewAll: () => void;
}

export const RecipeScroll = (props: RecipeScrollProps) => {
    const {Colors} = useColors();
    const styles = useStyles(Colors);

    return (
        <View style={localStyles.recipesContainer}>
            <View style={localStyles.recipesHeader}>
                <Text style={styles.textHeader6S}>{props.title}</Text>
                <TouchableOpacity onPress={props.onViewAll}>
                    <Text style={[styles.textBody14M, {color: Colors.primaryAccent}]}>View All</Text>
                </TouchableOpacity>
            </View>

            <FlatList contentContainerStyle={{gap: 20}} horizontal={true}
                      showsHorizontalScrollIndicator={false} data={props.data}
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
        gap: 20
    },

    recipesHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'space-between'
    }
});
