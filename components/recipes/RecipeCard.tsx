import {ImageBackground, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import React from "react";
import {useColors} from "../../hooks/useColors.ts";
import {useStyles} from "../../hooks/useStyles.ts";
import Icon from "react-native-vector-icons/FontAwesome";
import GradientBackground from "../GradientBackground.tsx";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import {Recipe} from "../../modules/recipes/Recipe.ts";

interface RecipeCardProps {
    recipe: Recipe;
}

export const RecipeCard = ({recipe}: RecipeCardProps) => {
    const {Colors} = useColors();
    const styles = useStyles(Colors);

    const handleLike = () => {

    };

    return (
        <TouchableOpacity style={[localStyles.container]}>
            <ImageBackground source={require('../../assets/images/receipt_image.jpg')} resizeMode={'cover'}
                             borderRadius={10} style={{flex: 1}}>
                <GradientBackground styles={localStyles.main}>
                    <View style={[localStyles.like, {backgroundColor: Colors.alert}]}>
                        <Icon.Button name="heart" onPress={handleLike} size={16} color={Colors.backgroundPrimary}
                                     backgroundColor={'transparent'} style={{textAlign: 'center'}}
                                     iconStyle={{textAlign: 'center'}}/>
                    </View>

                    <View style={{flexDirection: 'row', gap: 10, justifyContent: "space-between"}}>
                        <View style={{maxWidth: 100}}>
                            <Text
                                style={[styles.textBody10, {color: Colors.text200}]}>{recipe.country}</Text>
                            <Text numberOfLines={1} ellipsizeMode="tail"
                                  style={[styles.textBody13S]}>{recipe.title}</Text>
                            <Text
                                numberOfLines={1} ellipsizeMode="tail"
                                style={[styles.textBody10, {color: Colors.text200}]}>By {recipe.author}</Text>
                        </View>

                        <View style={{flexDirection: 'row', alignItems: 'center', alignSelf: 'flex-end'}}>
                            <FontAwesome name={"star"} color={Colors.secondary} size={12}/>
                            <Text
                                style={[{marginLeft: 4}, styles.textBody10M, {color: Colors.secondary}]}>{recipe.rating}</Text>
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
        borderRadius: 10
    },

    main: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: 10
    }
});
