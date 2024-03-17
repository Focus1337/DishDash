import {observer} from "mobx-react";
import {Animated, SafeAreaView, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {ProfileScreenProps} from "../utils/navigation/navigationTypes.ts";
import React from "react";
import {useColors} from "../hooks/useColors.ts";
import {useStyles} from "../hooks/useStyles.ts";
import Icon from "react-native-vector-icons/FontAwesome";
import {UserAvatar} from "../components/UserAvatar.tsx";
import {OutlinedMainButton} from "../components/buttons.tsx";
import {RecipeCard} from "../components/recipes/RecipeCard.tsx";
import FlatList = Animated.FlatList;
import {Recipe} from "../modules/recipes/Recipe.ts";

export const ProfileScreen = observer(({navigation}: ProfileScreenProps) => {
    const {Colors} = useColors();
    const styles = useStyles(Colors);

    const recipes: Recipe[] = [
        new Recipe("1", "Chicken", "Andrew Tate", "Japan", 4.9),
        new Recipe("1", "Chicken Teriyaki 2222", "Andrew Tate 123", "Japan", 4.9),
        new Recipe("2", "Spaghetti", "Aboba", "Italy", 5),
        new Recipe("2", "Spaghetti", "Aboba", "Italy", 5),
    ];

    const handleSettings = () => {

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

            <View style={localStyles.recipesContainer}>
                <View style={localStyles.recipesHeader}>
                    <Text style={styles.textHeader6S}>Saved Recipes</Text>
                    <TouchableOpacity onPress={handleViewAll}>
                        <Text style={[styles.textBody14M, {color: Colors.primaryAccent}]}>View All</Text>
                    </TouchableOpacity>
                </View>

                <FlatList contentContainerStyle={{gap: 20}} horizontal={true}
                          showsHorizontalScrollIndicator={false} data={recipes}
                          keyExtractor={(_, index) => index.toString()}
                          renderItem={({item}) => <RecipeCard recipe={item}/>}
                />
            </View>

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
    },

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
