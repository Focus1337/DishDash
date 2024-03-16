import {observer} from "mobx-react";
import {SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {ProfileScreenProps} from "../utils/navigation/navigationTypes.ts";
import React from "react";
import {useColors} from "../hooks/useColors.ts";
import {useStyles} from "../hooks/useStyles.ts";
import Icon from "react-native-vector-icons/FontAwesome";

export const ProfileScreen = observer(({navigation}: ProfileScreenProps) => {
    const {Colors} = useColors();
    const styles = useStyles(Colors);

    const handleSettings = () => {

    };

    const handleViewAll = () => {

    };

    return (
        <SafeAreaView style={localStyles.container}>
            <View style={localStyles.profileContainer}>
                <View style={localStyles.profileHeader}>
                    <Text style={styles.textHeader4}>Profile</Text>
                    <Icon.Button name="gear" onPress={handleSettings} size={24} color={Colors.primaryCTA}
                                 backgroundColor={'white'}/>
                </View>

                <View>

                </View>
            </View>

            <View style={localStyles.recipesContainer}>
                <View style={localStyles.recipesHeader}>
                    <Text style={styles.textHeader6S}>Saved Recipes</Text>
                    <TouchableOpacity onPress={handleViewAll}>
                        <Text style={[styles.textBody14M, {color: Colors.primaryAccent}]}>View All</Text>
                    </TouchableOpacity>
                </View>

                <ScrollView horizontal={true} style={{borderWidth: 1, borderColor: 'yellow'}}>

                </ScrollView>
            </View>
        </SafeAreaView>
    );
})


let localStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },

    profileContainer: {
        flex: 1,
        flexDirection: 'column',
        padding: 20,
        gap: 20,
        borderWidth: 1,
        borderColor: 'red'
    },

    profileHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'space-between'
    },

    recipesContainer: {
        flex: 3,
        flexDirection: 'column',
        padding: 20,
        gap: 20,
        borderWidth: 1,
        borderColor: 'blue'
    },

    recipesHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'space-between'
    }
});
