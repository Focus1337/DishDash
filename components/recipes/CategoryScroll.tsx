import {useColors} from "../../hooks/useColors.ts";
import {useStyles} from "../../hooks/useStyles.ts";
import {FlatList, StyleSheet, Text, View} from "react-native";
import React from "react";
import {CategoryCard} from "./CategoryCard.tsx";

interface CategoryScrollProps {
    title: string;
    data: string[];
}

export const CategoryScroll = (props: CategoryScrollProps) => {
    const {Colors} = useColors();
    const styles = useStyles(Colors);

    return (
        <View style={localStyles.recipesContainer}>
            <View style={localStyles.recipesHeader}>
                <Text style={styles.textHeader6S}>{props.title}</Text>
            </View>

            <FlatList contentContainerStyle={{gap: 20, alignItems: 'center'}} numColumns={2}
                      columnWrapperStyle={{gap: 20}} data={props.data}
                      keyExtractor={(_, index) => index.toString()}
                      renderItem={({item}) => <CategoryCard category={item}/>}
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
