import {observer} from "mobx-react";
import {SafeAreaView, StyleSheet, Text, View} from "react-native";
import {ProfileScreenProps} from "../utils/navigation/navigationTypes.ts";
import React from "react";
import {useColors} from "../hooks/useColors.ts";
import {useStyles} from "../hooks/useStyles.ts";
import Icon from "react-native-vector-icons/FontAwesome";
import {UserAvatar} from "../components/UserAvatar.tsx";
import {OutlinedMainButton} from "../components/buttons.tsx";
import {Recipe} from "../modules/recipes/models/Recipe.ts";
import {RecipeScroll} from "../components/recipes/RecipeScroll.tsx";
import Navigation from "../utils/navigation/Navigation.ts";

export const ProfileScreen = observer(({navigation}: ProfileScreenProps) => {
    const {Colors} = useColors();
    const styles = useStyles(Colors);

    const recipes: Recipe[] = [
        new Recipe("1", "Chicken", "Andrew Tate", "Japan", 4.9),
        new Recipe("1", "Chicken Teriyaki 123234", "Andrew 123", "Japan", 4.9),
        new Recipe("2", "Spaghetti", "Aboba", "Italy", 5),
        new Recipe("2", "Spaghetti", "Aboba", "Italy", 5),
    ];

    const handleSettings = () => {
       Navigation.navigate("Welcome");
    };

    const handleViewAll = () => {

    };

    const handleOnEdit = () => {

    };

    return (
        <SafeAreaView style={localStyles.container}>
            <View style={localStyles.profileContainer}>
                <View style={localStyles.profileHeader}>
                    <Text style={styles.textHeader4}>Profile</Text>
                    <Icon.Button name="gear" onPress={handleSettings} size={24} color={Colors.primaryCTA}
                                 backgroundColor={'white'}/>
                </View>
                <View style={localStyles.profileInfo}>
                    <UserAvatar/>
                    <View style={localStyles.profileEdit}>
                        <Text style={styles.textHeader6S}>User Name</Text>
                        <Text
                            style={[styles.textBody12M, {color: Colors.text300}, {marginBottom: 10}]}>adievadel@gmai.com</Text>
                        <OutlinedMainButton onPress={handleOnEdit} title={'Edit Profile'}/>
                    </View>
                </View>
            </View>
            <RecipeScroll title={"Saved Recipes"} data={recipes} onViewAll={handleViewAll}/>
            <View style={{flex: 2}}>
            </View>
        </SafeAreaView>
    );
})


let localStyles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: 'white'
    },

    profileContainer: {
        flex: 1,
        flexDirection: 'column',
        gap: 20
    },

    profileHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'space-between'
    },

    profileInfo: {
        flexDirection: 'row',
        alignItems: 'center',
        alignContent: 'center',
    },

    profileEdit: {
        paddingLeft: 20,
        gap: 6,
        flexDirection: 'column'
    }
});
