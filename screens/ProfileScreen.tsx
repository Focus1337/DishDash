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
import {useRootStore} from "../hooks/useRootStore.ts";

export const ProfileScreen = observer(({navigation}: ProfileScreenProps) => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [profile, setProfile] = useState<Profile>({userName: "User Name", email: "email@gmail.com", avatarUrl: ""});
    const {profileStore, localRecipesStore} = useRootStore();
    const {Colors} = useColors();
    const styles = useStyles(Colors);
    const [savedRecipes, setSavedRecipes] = useState<Recipe[]>();

    useEffect(() => {
        (async () => {
            await localRecipesStore.actionHandleGetSaved();
            setSavedRecipes(localRecipesStore.saved!);
        })();
    }, [localRecipesStore]);

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

    useEffect(() => {
        setSavedRecipes(localRecipesStore.saved!);
    }, [localRecipesStore.saved]);

    const handleSettings = () => {
        Navigation.navigate("Welcome");
    };

    const handleViewAll = () => {
        Navigation.navigate("RecipesResult", {recipes: savedRecipes});
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
            <RecipeScroll title={"Saved Recipes"} data={savedRecipes!} onViewAll={handleViewAll}/>
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
