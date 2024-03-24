import {observer} from "mobx-react";
import {SearchResultScreenProps} from "../../utils/navigation/navigationTypes.ts";
import {useColors} from "../../hooks/useColors.ts";
import {useStyles} from "../../hooks/useStyles.ts";
import {Recipe} from "../../modules/recipes/models/Recipe.ts";
import {SafeAreaView, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import Feather from "react-native-vector-icons/Feather";
import React, {useEffect, useState} from "react";
import {SearchInput} from "../../components/SearchInput.tsx";
import {SearchRecipeScroll} from "../../components/recipes/SearchRecipeScroll.tsx";
import {useRootStore} from "../../hooks/useRootStore.ts";

export const SearchResultScreen = observer(({navigation, route}: SearchResultScreenProps) => {
    const [recipes, setRecipes] = useState<Recipe[]>([]);
    const {recipesStore} = useRootStore();
    const {Colors} = useColors();
    const styles = useStyles(Colors);

    useEffect(() => {
        (async () => await onSearch(route.params.request.q))();
    }, []);

    const onSearch = async (query: string) => {
        let req = route.params.request;
        req.q = query;

        await recipesStore.actionHandleSearch(req);
        setRecipes(recipesStore.recipes);
    };

    return (
        <SafeAreaView style={localStyles.container}>
            <View style={localStyles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}
                                  style={[localStyles.backButton]}>
                    <Feather name={"arrow-left"} color={Colors.text600} size={24}/>
                </TouchableOpacity>
                <SearchInput onSearch={onSearch} initValue={route.params.request.q}/>
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