import {useColors} from "../../hooks/useColors.ts";
import {useStyles} from "../../hooks/useStyles.ts";
import {Dimensions, ImageBackground, StyleSheet, Text, TouchableOpacity} from "react-native";
import GradientBackground from "../GradientBackground.tsx";
import React from "react";
import Navigation from "../../utils/navigation/Navigation.ts";
import {useRootStore} from "../../hooks/useRootStore.ts";
import {parseCuisine} from "../../modules/preferences/models/CuisineType.ts";

const {width} = Dimensions.get('window');

interface CategoryCardProps {
    category: string;
}

export const CategoryCard = ({category}: CategoryCardProps) => {
    const {Colors} = useColors();
    const styles = useStyles(Colors);
    const {remoteRecipesStore} = useRootStore();

    const onPress = async () => {
        await remoteRecipesStore.actionHandleSearchByCuisine(parseCuisine(category)!);

        Navigation.navigate("RecipesResult", {recipes: remoteRecipesStore.recipes});
    }

    return (
        <TouchableOpacity style={[localStyles.container]} onPress={onPress}>
            <ImageBackground source={require('../../assets/images/receipt_image.jpg')} resizeMode={'cover'}
                             borderRadius={10} style={{flex: 1}}>
                <GradientBackground styles={localStyles.main} end={{x: 0, y: 0}} opacity={0.5}>
                    <Text numberOfLines={1} ellipsizeMode="tail"
                          style={[styles.textBody16M, styles.textWhite]}>{category}</Text>
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
        width: width * 0.4,
        height: width * 0.2,
    },

    main: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10
    }
});
