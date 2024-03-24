import {ImageBackground, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import React from "react";
import {useColors} from "../../hooks/useColors.ts";
import {useStyles} from "../../hooks/useStyles.ts";
import Icon from "react-native-vector-icons/FontAwesome";
import GradientBackground from "../GradientBackground.tsx";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import {Recipe} from "../../modules/recipes/models/Recipe.ts";

interface RecipeCardProps {
    recipe: Recipe;
    onPress: () => void;
}

export const RecipeCard = ({recipe, onPress}: RecipeCardProps) => {
    const {Colors} = useColors();
    const styles = useStyles(Colors);

    const handleLike = () => {

    };

    return (
        <TouchableOpacity style={[localStyles.container]} onPress={onPress}>
            <ImageBackground source={{uri: recipe.image} ?? require('../../assets/images/receipt_image.jpg')}
                             resizeMode={'cover'} borderRadius={10} style={{flex: 1}}>
                <GradientBackground styles={localStyles.main}>
                    <TouchableOpacity style={[localStyles.like, {backgroundColor: Colors.alert}]} onPress={handleLike}>
                        <FontAwesome name={"heart"} color={Colors.backgroundPrimary} size={16}/>
                    </TouchableOpacity>

                    <View style={{flexDirection: 'row', gap: 10, justifyContent: "space-between"}}>
                        <View style={{maxWidth: 100}}>
                            <Text
                                style={[styles.textBody10, {color: Colors.text200}]}>{recipe.calories.toFixed()} kcal</Text>
                            <Text numberOfLines={1} ellipsizeMode="tail"
                                  style={[styles.textBody13S]}>{recipe.label}</Text>
                            <Text
                                numberOfLines={1} ellipsizeMode="tail"
                                style={[styles.textBody10, {color: Colors.text200}]}>By {recipe.source}</Text>
                        </View>

                        <View style={{flexDirection: 'row', alignItems: 'center', alignSelf: 'flex-end'}}>
                            <FontAwesome name={"star"} color={Colors.secondary} size={12}/>
                            <Text
                                style={[{marginLeft: 4}, styles.textBody10M, {color: Colors.secondary}]}>5</Text>
                        </View>
                    </View>
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
        width: 160,
        height: 140
    },

    like: {
        alignSelf: 'flex-end',
        padding: 6,
        borderRadius: 10
    },

    main: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: 10
    }
});
