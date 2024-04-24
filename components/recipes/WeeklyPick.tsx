import {ImageBackground, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import GradientBackground from "../GradientBackground.tsx";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import React, {useEffect, useState} from "react";
import {useColors} from "../../hooks/useColors.ts";
import {useStyles} from "../../hooks/useStyles.ts";
import {Recipe} from "../../modules/recipes/models/Recipe.ts";
import {useRootStore} from "../../hooks/useRootStore.ts";
import Navigation from "../../utils/navigation/Navigation.ts";

export const WeeklyPick = () => {
    const {Colors} = useColors();
    const styles = useStyles(Colors);
    const [recipes, setRecipes] = useState<Recipe[]>([]);
    const {remoteRecipesStore} = useRootStore();

    useEffect(() => {
        (async () => await onOpen())();
    }, []);

    const onOpen = async () => {
        await remoteRecipesStore.actionHandleSearchRandom();
        setRecipes(remoteRecipesStore.recipes);
    };

    const onPress = () => {
        Navigation.navigate("RecipeDetails", {recipe: recipes[0]});
    }

    return (
        <TouchableOpacity style={[localStyles.container]} onPress={onPress}>
            <ImageBackground
                source={{uri: recipes[0]?.image || "https://t3.ftcdn.net/jpg/05/14/75/82/360_F_514758236_i8rnB85PVdEaK19yGaK0TpaYEYMyxOL5.jpg"} ?? require('../../assets/images/receipt_image.jpg')}
                resizeMode={'cover'}
                borderRadius={10} style={{flex: 1}}>
                <GradientBackground styles={localStyles.main}>
                    <View style={localStyles.prepare}>
                        <FontAwesome name={"clock-o"} color={Colors.backgroundPrimary} size={12}/>
                        <Text style={[styles.textBody10, styles.textWhite]}>{recipes[0]?.calories.toFixed()} kcal</Text>
                        <FontAwesome name={"flask"} color={Colors.backgroundPrimary} size={12}/>
                        <Text
                            style={[styles.textBody10, styles.textWhite]}>{recipes[0]?.ingredients.length} ingredients</Text>
                    </View>

                    <Text style={[styles.textBody24S, styles.textWhite]}>Weekly Pick</Text>
                    <Text style={[styles.textBody14R, styles.textWhite]}>{recipes[0]?.label} by {recipes[0]?.source}
                    </Text>
                </GradientBackground>
            </ImageBackground>
        </TouchableOpacity>
    );
};

let localStyles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        borderRadius: 10,
        height: 200
    },

    main: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-end',
        padding: 16,
    },

    prepare: {
        flexDirection: "row",
        gap: 6,
        alignItems: 'center'
    }
});
