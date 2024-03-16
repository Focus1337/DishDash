import {observer} from "mobx-react";
import React from "react";
import {useTheme} from "../../hooks/useTheme.ts";
import {useStyles} from "../../hooks/useStyles.ts";
import {Alert, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {AllergyScreenProps} from "../../utils/navigation/navigationTypes.ts";
import {FilledMainButton, OutlinedMainButton} from "../../components/Button.tsx";
import {PageNumber} from "../../components/PageNumber.tsx";
import {OptionButton} from "../../components/OptionButton.tsx";

let allergies = ['Shrimp', 'Carrot', 'Mushroom', 'Onion', 'Bell Pepper', 'Garlic', 'Apple', 'Eggplant', 'Banana'];

export const AllergyScreen = observer(({navigation}: AllergyScreenProps) => {
    const {Colors} = useTheme();
    const styles = useStyles(Colors);

    const handlePrevious = () => navigation.navigate("Welcome");
    const handleNextStep = () => navigation.navigate("Diet");
    const handleSkip = () => {
        Alert.alert("Skipped", "skip")
    };
    const handleAdd = (value: string) => {
        Alert.alert(value);
    };

    const handleRemove = (value: string) => {
        Alert.alert("removed: " + value);
    };

    return (
        <SafeAreaView style={localStyles.container}>
            <View style={localStyles.main}>
                <View style={localStyles.mainHeader}>
                    <View style={localStyles.mainHeaderPage}>
                        <PageNumber pageNumber={1} isActive={true}/>
                        <PageNumber pageNumber={2} isActive={false}/>
                        <PageNumber pageNumber={3} isActive={false}/>
                    </View>
                    <TouchableOpacity onPress={handleSkip}>
                        <Text style={[styles.textBody16M, styles.textAlert]}>Skip</Text>
                    </TouchableOpacity>
                </View>

                <View style={{gap: 10}}>
                    <Text style={styles.textBody30}>Do you have any allergies or dislikes?</Text>
                    <Text style={styles.textBody16R}>This will help us curate more recipe experiences for you.</Text>
                </View>

                <ScrollView style={{marginTop: 10}} contentContainerStyle={localStyles.mainChoose}>
                    {allergies.map(a => <OptionButton key={a} text={a} onActivate={() => handleAdd(a)}
                                                      onDeactivate={() => handleRemove(a)}/>)}
                </ScrollView>
            </View>
            <View style={localStyles.controls}>
                <OutlinedMainButton onPress={handlePrevious} title="Previous" buttonStyles={styles.buttonWidth40}/>
                <FilledMainButton onPress={handleNextStep} title="Next Step" buttonStyles={styles.buttonWidth40}/>
            </View>
        </SafeAreaView>
    )
})

let localStyles = StyleSheet.create({
    container: {
        flex: 1
    },

    main: {
        display: 'flex',
        flex: 1,
        flexDirection: 'column',
        padding: 20,
        gap: 20
    },

    mainHeader: {
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center'
    },

    mainHeaderPage: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
    },

    mainChoose: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 10
    },

    controls: {
        display: 'flex',
        flex: 0,
        gap: 16,
        justifyContent: 'space-around',
        flexDirection: 'row',
        alignItems: 'center',
        padding: 20,
        marginBottom: 32
    }
});