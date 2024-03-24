import {observer} from "mobx-react";
import {Modal, SafeAreaView, StyleSheet, Text, TextInput, View} from "react-native";
import {ProfileScreenProps} from "../utils/navigation/navigationTypes.ts";
import React, {useEffect, useState} from "react";
import {useColors} from "../hooks/useColors.ts";
import {useStyles} from "../hooks/useStyles.ts";
import Icon from "react-native-vector-icons/FontAwesome";
import {UserAvatar} from "../components/UserAvatar.tsx";
import {FilledMainButton, OutlinedMainButton} from "../components/buttons.tsx";
import {Recipe} from "../modules/recipes/models/Recipe.ts";
import {RecipeScroll} from "../components/recipes/RecipeScroll.tsx";
import Navigation from "../utils/navigation/Navigation.ts";
import {CuisineType} from "../modules/preferences/models/CuisineType.ts";
import {MealType} from "../modules/recipes/models/MealType.ts";
import {DishType} from "../modules/recipes/models/DishType.ts";
import {useRootStore} from "../hooks/useRootStore.ts";

const recipes: Recipe[] = [
    {
        uri: "http://www.edamam.com/ontologies/edamam.owl#recipe_8d3e4b9299664a1ca8e6f5bdb8532300",
        label: "Rotisserie Chicken Recipe",
        image: "https://edamam-product-images.s3.amazonaws.com/web-img/88e/88edb31264dc1e58b37c2fec3f99a244.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLWVhc3QtMSJHMEUCIQC4EQkk%2BPA1TwS7JI3WSH%2FrhVqEg52x%2BLkwtN2F89W3VQIgCxa1LExsNNd99kTOUgPQX9OEkNhSMPWpkzUuNrzpjYYquQUIYRAAGgwxODcwMTcxNTA5ODYiDOqziq3sgVmUmTfeDyqWBRiHb8B1KMFBd3TKGHLnIs5sd7U1VrVqdgI9V8cGkFfH%2F%2BBIpGK6gfDLL%2B%2B2cDGxhwR2AEqKcEvYvkPICSVA85AwJvMHytuYYAqDjcv9XBBHHi%2BblwwaixEa8s64V%2BEZzYMjR9Xvq%2FxcYCY1TDhSEUigJekT5VjPVYcPcVVUufg8YfnKfKxrmhKxoJimMQxLBKFQTsy%2BdNx33CmeMZYH%2BJuKH4gVeZzmAt9PcrNl9srhrUQRZzddrcq%2FoSPyBUPuE0zXACr0EPJY8H%2B4V86wOnOZ0%2B%2FQyiNn33hme0aJ3ebp8UZBKp4nT2LWL%2FiLQL2B0qjqnTtVW8nIpwDzOkNblkcSJ1NUA%2BNfHzQ2CtBnz2gf5x688WEBnSbu%2FOqOijCsLa6tR3hYwkVfU1y3jJUpmzWNutvICLIgnsrQILXKmXALg2aVm2uYXS2UG3%2BThgxu%2BZOk69NkQnRa%2F77ExWW2f2sDShj2p9cgrFAcjLZTSp%2BktdaFpG3gerCUl39Xnl6cxmSWJ%2BGS0BlIhJuFydnfuBkil%2FVwLercnSrwpC6DPZcH2mQzWwMKE4oe0cmgpeiuSYFnUmhJDbBVddeJuBPJwBGoXg%2B4nAk%2FvpZfn5IhlM3Xlp5TNaapogcnr2bTEH3fjM62XKVHOdwMZIC9LjfG5trsypP0DYyy9q%2FjbaxFJoiw5ZgdUMOtl2uszJtDU51dVzJBnRRA88w39clkBqdfzy%2Fdz62BwiPYoNJsl3MOJVBZNgVX1E4Ia111%2B6nyxTk9L6och8FxZ2C9GOXWT0I2pOzoHn6L7eQTLw4Oi1PTJpM7dgfXUavb6mwQCaLnO%2B9unCRtrhi3k8QHjb5FOjaEJvlMt0ZVneLzCT3%2FoMpFQVqhCjc2TK%2FCMOju%2B68GOrEBl6Vjyo7qUTUhe4%2FKOu1u%2BR5OiVVLMs5GxC58xWBdHf2bJ3o1QiYgiBTYLx%2FeqPkLRVitVULb8RTXOVGeHdyqcTtOZWgenwpdbIus3vjnDcTaTZP%2F00qeLmpfWfkWRfzByXYqn%2BlooQbzXjqlDS5YolbCoun%2BY52xsVqIRzbwcRyS1w9xZO7y94ZhCGUwzvvi1mQmajBe2W%2BQAABXeuwtQtdx02TRe6HJ%2FyfaTh3gZmPb&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240323T155729Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFDVXLY3XH%2F20240323%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=fa71ac38d3db353868df57cd577d602b240ff22b467106444ca137c2e00b6f59",
        source: "Serious Eats",
        url: "https://www.seriouseats.com/basic-rotisserie-chicken-recipe",
        shareAs: "http://www.edamam.com/recipe/rotisserie-chicken-recipe-8d3e4b9299664a1ca8e6f5bdb8532300/chicken",
        yield: 4.0,
        dietLabels: [
            "Low-Carb"
        ],
        healthLabels: [
            "Sugar-Conscious",
            "Keto-Friendly",
            "Gluten-Free",
            "Wheat-Free",
            "Egg-Free",
            "Peanut-Free",
            "Tree-Nut-Free",
            "Soy-Free",
            "Fish-Free",
            "Shellfish-Free",
            "Pork-Free",
            "Red-Meat-Free",
            "Crustacean-Free",
            "Celery-Free",
            "Mustard-Free",
            "Sesame-Free",
            "Lupine-Free",
            "Mollusk-Free",
            "Alcohol-Free",
            "FODMAP-Free",
            "Immuno-Supportive"
        ],
        cautions: [],
        ingredientLines: [
            "1 whole chicken, about 4 pounds",
            "2 tablespoons kosher salt",
            "2 tablespoons butter, melted"
        ],
        ingredients: [
            {
                text: "1 whole chicken, about 4 pounds",
                quantity: 4.0,
                measure: "pound",
                food: "chicken",
                weight: 1814.36948,
                foodCategory: "Poultry",
                image: "https://www.edamam.com/food-img/d33/d338229d774a743f7858f6764e095878.jpg"
            },
            {
                text: "2 tablespoons kosher salt",
                quantity: 2.0,
                measure: "tablespoon",
                food: "kosher salt",
                weight: 29.124999999507587,
                foodCategory: "Condiments and sauces",
                image: "https://www.edamam.com/food-img/694/6943ea510918c6025795e8dc6e6eaaeb.jpg"
            },
            {
                text: "2 tablespoons butter, melted",
                quantity: 2.0,
                measure: "tablespoon",
                food: "butter",
                weight: 28.4,
                foodCategory: "Dairy",
                image: "https://www.edamam.com/food-img/713/71397239b670d88c04faa8d05035cab4.jpg"
            }
        ],
        calories: 2856.23617976,
        totalWeight: 1851.5802008708001,
        totalTime: 540.0,
        cuisineType: [
            CuisineType.Mexican
        ],
        mealType: [
            MealType.Lunch,
            MealType.Dinner
        ],
        dishType: [
            DishType.Starter
        ],
        digest: []
    }
];

export const ProfileScreen = observer(({navigation}: ProfileScreenProps) => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [profile, setProfile] = useState<Profile>({userName: "User Name", email: "email@gmail.com", avatarUrl: ""});
    const {profileStore} = useRootStore();
    const {Colors} = useColors();
    const styles = useStyles(Colors);

    useEffect(() => {
        (async () => {
            await profileStore.actionHandleGet();

            if (profileStore.profile === null) {
                await profileStore.actionHandleAdd(profile);
            }
            await profileStore.actionHandleGet();

            setProfile(profileStore.profile!);
        })();

    }, [profileStore]);

    const handleSettings = () => {
        Navigation.navigate("Welcome");
    };

    const handleViewAll = () => {

    };

    const handleOnEdit = () => {
        setIsModalVisible(true);
    };

    const handleCancelEdit = () => {
        setIsModalVisible(false);
    };

    const handleSave = async () => {
        const updatedProfile = {userName: name, email: email, avatarUrl: ""};
        await profileStore.actionHandleAdd(updatedProfile);
        setProfile(updatedProfile);
        setIsModalVisible(false);
    };

    return (
        <SafeAreaView style={localStyles.container}>
            <Modal
                animationType="fade"
                transparent={true}
                visible={isModalVisible}
                onRequestClose={() => {
                    setIsModalVisible(!isModalVisible);
                }}>
                <View style={modalStyles.centeredView}>
                    <View style={modalStyles.modalView}>
                        <View style={[modalStyles.input]}>
                            <TextInput style={[{flex: 1}, styles.textBody14R]} numberOfLines={1} inputMode={'text'}
                                       placeholder={"Your name"} onChangeText={setName} value={name}/>
                        </View>

                        <View style={[modalStyles.input]}>
                            <TextInput style={[{flex: 1}, styles.textBody14R]} numberOfLines={1} inputMode={'text'}
                                       placeholder={"Your email"} onChangeText={setEmail} value={email}/>
                        </View>

                        <View style={[modalStyles.button]}>
                            <FilledMainButton buttonStyles={{flex: 1}} onPress={handleSave} title="Save"/>
                        </View>

                        <View style={[modalStyles.button]}>
                            <OutlinedMainButton buttonStyles={{flex: 1}} onPress={handleCancelEdit} title="Cancel"/>
                        </View>
                    </View>
                </View>
            </Modal>

            <View style={localStyles.profileContainer}>
                <View style={localStyles.profileHeader}>
                    <Text style={styles.textHeader4}>Profile</Text>
                    <Icon.Button name="gear" onPress={handleSettings} size={24} color={Colors.primaryCTA}
                                 backgroundColor={'white'}/>
                </View>
                <View style={localStyles.profileInfo}>
                    <UserAvatar/>
                    <View style={localStyles.profileEdit}>
                        <Text style={styles.textHeader6S}>{profile.userName}</Text>
                        <Text
                            style={[styles.textBody12M, {color: Colors.text300}, {marginBottom: 10}]}>{profile.email}</Text>
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

const modalStyles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22,
        backgroundColor: 'rgba(0, 0, 0, 0.7)'
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        gap: 12,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    input: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingHorizontal: 16,
        borderRadius: 200,
        gap: 10,
        backgroundColor: '#F5F6F5',
    },

    button: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingHorizontal: 16,
    }
});

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
