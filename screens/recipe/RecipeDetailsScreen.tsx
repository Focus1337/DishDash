import {observer} from "mobx-react";
import {RecipeDetailsScreenProps} from "../../utils/navigation/navigationTypes.ts";
import {useColors} from "../../hooks/useColors.ts";
import {useStyles} from "../../hooks/useStyles.ts";
import {
    Alert,
    FlatList,
    Image,
    ImageBackground,
    SafeAreaView,
    ScrollView,
    Share,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Feather from "react-native-vector-icons/Feather";
import React from "react";
import {CustomTab} from "../../components/CustomTab.tsx";
import {Direction} from "../../components/recipes/Direction.tsx";

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
                        <Feather name={"arrow-left"} color={Colors.backgroundPrimary}
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
                        <Feather name={"share-2"} color={Colors.text600} size={26}/>
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

    const ingredients = ['2 cups coconut milk',
        '1 cup uncooked quinoa',
        '1 (20-ounce) can pineapple chunks in natural juice, drained with juice reserved',
        '1 (15-ounce) can diced mangos in light syrup, drained with syrup reserved',
        '1 (15-ounce) can diced mangos in light syrup, drained with syrup reserved',
        '1 (11-ounce) can Mandarin oranges in light syrup, drained with syrup reserved',
        '½ cup sweetened shredded coconut, toasted'];

    return (
        <View style={{paddingVertical: 20, gap: 20}}>
            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <View style={[{flexDirection: 'row', gap: 4}]}>
                    <Text style={styles.textBody16B}>Ingredients</Text>
                    <Text style={[styles.textBody16S, {color: Colors.alert}]}>(12)</Text>
                </View>

                <View style={{flexDirection: 'row', alignItems: 'center', gap: 4}}>
                    <Text style={[styles.textBody12M, {color: Colors.text300}]}>4</Text>
                    <Text style={[styles.textBody12M, {color: Colors.text300, marginRight: 4}]}>servings</Text>
                    <Feather name={"minus-circle"} color={Colors.text600} size={16} style={{marginRight: 4}}/>
                    <Feather name={"plus-circle"} color={Colors.text600} size={16}/>
                </View>
            </View>

            <FlatList data={ingredients} contentContainerStyle={{paddingRight: 50}}
                      keyExtractor={(_, index) => index.toString()}
                      renderItem={({item}) => <Text style={[styles.textBody14M, {marginBottom: 10}]}>{item}</Text>}
            />

        </View>
    )
};

const TabDirections = () => {
    const directions = [
        'Heat 2 inches of oil in a large heavy frying pan over medium hight heat for about 10 to 12 minutes until the oil temperature reaches 330-350º. Combine all the ingredients and mix altogether.',
        'Add the coated chicken to hot oil one by one. Fry them for 12 minutes until the all sides of the chicken are golden brown and crunchy, turning over with tongs.'
    ];

    return (
        <ScrollView contentContainerStyle={{paddingVertical: 20, gap: 20}}>
            {
                directions.map((d, id) => <Direction key={d} text={d} step={id}/>)
            }
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