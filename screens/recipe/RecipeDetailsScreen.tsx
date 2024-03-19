import {observer} from "mobx-react";
import {RecipeDetailsScreenProps} from "../../utils/navigation/navigationTypes.ts";
import {useColors} from "../../hooks/useColors.ts";
import {useStyles} from "../../hooks/useStyles.ts";
import {
    Alert,
    Image,
    ImageBackground,
    SafeAreaView, ScrollView,
    Share,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import React from "react";
import {CustomTab} from "../../components/CustomTab.tsx";

export const RecipeDetailsScreen = observer(({navigation}: RecipeDetailsScreenProps) => {
    const {Colors} = useColors();
    const styles = useStyles(Colors);

    const handleShare = async () => {
        try {
            const result = await Share.share({
                message:
                    'Checkout this recipe!',
            });
            if (result.action === Share.sharedAction) {
                if (result.activityType) {
                    // shared with activity type of result.activityType
                } else {
                    // shared
                }
            } else if (result.action === Share.dismissedAction) {
                // dismissed
            }
        } catch (error: any) {
            Alert.alert(error.message);
        }
    };

    return (
        <SafeAreaView style={localStyles.container}>
            <View style={localStyles.image}>
                <ImageBackground source={require('../../assets/images/recipe_details.png')}
                                 style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between', padding: 20}}
                                 resizeMode={'cover'}>
                    <TouchableOpacity
                        style={[localStyles.backButton, {backgroundColor: Colors.outline,}]}>
                        <FontAwesome name={"arrow-left"} color={Colors.backgroundPrimary}
                                     size={20}/>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={[localStyles.backButton, {backgroundColor: Colors.outline}]}>
                        <FontAwesome name={"heart"} color={Colors.backgroundPrimary}
                                     size={20}/>
                    </TouchableOpacity>
                </ImageBackground>
            </View>
            <View style={localStyles.main}>
                <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <Text style={styles.textHeader4}>Yangnyeom Chicken</Text>
                    <TouchableOpacity onPress={handleShare}
                                      style={[localStyles.backButton, {backgroundColor: "#F5F6F5"}]}>
                        <FontAwesome name={"share-alt"} color={Colors.text600} size={26}/>
                    </TouchableOpacity>
                </View>

                <View style={[localStyles.authorContainer, {borderColor: Colors.outline}]}>
                    <Image source={require('../../assets/images/person.jpg')} style={localStyles.authorImage}/>
                    <View style={{flexDirection: 'column'}}>
                        <Text style={styles.textBody16M}>Andrew Jun</Text>
                        <Text style={[styles.textBody14M, {color: Colors.text300}]}>@andrewjun</Text>
                    </View>
                </View>

                <CustomTab tab1Content={<TabOverview/>} tab2Content={<TabIngredients/>} tab3Content={<TabDirections/>}/>

            </View>
        </SafeAreaView>
    );
})

const TabOverview = () => {
    const {Colors} = useColors();
    const styles = useStyles(Colors);

    return (
        <ScrollView contentContainerStyle={{paddingVertical: 20, gap: 20}}>
            <Text style={styles.textBody15M}>
                Yangnyeom is crispy fried chicken coated in sweet and spicy sauce. It's accompanied by pickled
                radishes, sliced scallions, and a side of rice. Cold beer or soft drinks are popular pairings.
                Enjoy!
            </Text>

            <View style={{flexDirection: 'row', gap: 12, justifyContent: 'center'}}>
                <View style={localStyles.miniInfo}>
                    <View style={{flexDirection: 'row', alignItems: 'center', gap: 6}}>
                        <FontAwesome name={"clock-o"} color={Colors.alert} size={16}/>
                        <Text style={[styles.textBody14M, {color: Colors.alert}]}>12 mins</Text>
                    </View>
                    <Text style={[styles.textBody12M, {color: Colors.text400}]}>Cook time</Text>
                </View>

                <View style={localStyles.miniInfo}>
                    <View style={{flexDirection: 'row', alignItems: 'center', gap: 6}}>
                        <FontAwesome name={"fire"} color={Colors.alert} size={16}/>
                        <Text style={[styles.textBody14M, {color: Colors.alert}]}>245</Text>
                    </View>
                    <Text style={[styles.textBody12M, {color: Colors.text400}]}>Calories</Text>
                </View>

                <View style={localStyles.miniInfo}>
                    <View style={{flexDirection: 'row', alignItems: 'center', gap: 6}}>
                        <FontAwesome name={"map-marker"} color={Colors.alert} size={16}/>
                        <Text style={[styles.textBody14M, {color: Colors.alert}]}>Korea</Text>
                    </View>
                    <Text style={[styles.textBody12M, {color: Colors.text400}]}>Origin</Text>
                </View>
            </View>
        </ScrollView>
    );
};

const TabIngredients = () => {
    const {Colors} = useColors();
    const styles = useStyles(Colors);

    return (
        <ScrollView contentContainerStyle={{paddingVertical: 20, gap: 20}}>
            <Text>2</Text>
        </ScrollView>
    )
};

const TabDirections = () => {
    const {Colors} = useColors();
    const styles = useStyles(Colors);

    return (
        <ScrollView contentContainerStyle={{paddingVertical: 20, gap: 20}}>
            <Text>3</Text>
        </ScrollView>
    )
};

let localStyles = StyleSheet.create({
    container: {
        flex: 1,
    },

    backButton: {
        borderRadius: 100,
        width: 36,
        height: 36,
        alignItems: 'center',
        justifyContent: 'center',
        opacity: 0.8
    },

    authorContainer: {
        flexDirection: "row",
        gap: 10,
        paddingVertical: 16,
        borderTopWidth: 0.7,
        borderBottomWidth: 0.7,
    },

    authorImage: {
        width: 50,
        height: 50,
        borderRadius: 25
    },

    image: {
        flex: 2,
    },

    miniInfo: {
        padding: 10,
        gap: 4,
        borderRadius: 10,
        width: 104,
        alignItems: 'center',
        backgroundColor: 'rgba(248, 86, 87, 0.07)'
    },

    main: {
        flex: 3,
        padding: 20,
        gap: 20,
        backgroundColor: 'white',
    }
});